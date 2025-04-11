import React, { useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
  MutationCache,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useSetAtom } from "jotai";
import { useNavigate } from "@tanstack/react-router";
import { defaultUser, userAtom, UserState } from "@/stores/user";
import { toast } from "sonner";

const logout = (setUser: (user: UserState) => void, navigate: ReturnType<typeof useNavigate>) => {
  toast.error("Unauthorized access, logging out...");
  setUser(defaultUser);
  navigate({ to: "/auth/login" });
};

const errorHandler = (
  err: unknown, 
  navigate: ReturnType<typeof useNavigate>, 
  setUser: (user: UserState) => void
) => {
  if (err instanceof AxiosError && err.response?.status === 401) {
    logout(setUser, navigate);
  } else {
    const { error, message, status } = err as unknown as {
      error: string;
      message: string;
      status: number;
    };
    if (status === 401) {
      logout(setUser, navigate);
    }
    if (error === "Unauthorized") {
      logout(setUser, navigate);
    } else {
      if (error && message) {
        toast.error(error, {
          description: message,
        });
      } else {
        toast.error(message);
      }
    }
  }
};

const createQueryClient = (
  navigate: ReturnType<typeof useNavigate>,
  setUser: (user: UserState) => void
) =>
  new QueryClient({
    // defaultOptions: {
    //   queries: {
    //     retry: (failureCount, error: any) => {
    //       // Don't retry on 401 errors
    //       if (error instanceof AxiosError && error.response?.status === 401) {
    //         return false;
    //       }
    //       // Retry up to 3 times on other errors
    //       return failureCount < 3;
    //     },
    //   },
    // },
    queryCache: new QueryCache({
      onError: (error: unknown) => {
        errorHandler(error, navigate, setUser);
      },
    }),
    mutationCache: new MutationCache({
      // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
      onError: (error: unknown, _variables: unknown, _context: unknown, mutation: any) => {
        errorHandler(error, navigate, setUser);
      },
    }),
  });

function ReactQueryProvider({ children }: React.PropsWithChildren<object>) {
  const navigate = useNavigate();
  const setUser = useSetAtom(userAtom);
  const [client] = useState(() => createQueryClient(navigate, setUser));
  
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

export default ReactQueryProvider;
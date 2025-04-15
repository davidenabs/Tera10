"use client";
import React, { useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
  MutationCache,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useSetAtom } from "jotai";
import { defaultUser, userAtom } from "@/stores/user";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const logout = (setUser: (user: typeof defaultUser) => void, navigate: ReturnType<typeof useNavigate>) => {
  toast.error("Unauthorized access, logging out...");
  setUser(defaultUser);
  navigate("/auth/login");
};

const errorHandler = (
  err: unknown,
  navigate: ReturnType<typeof useNavigate>,
  setUser: (user: typeof defaultUser) => void
) => {
  if (err instanceof AxiosError && err.response?.status === 401) {
    logout(setUser, navigate);
  } else {
    const { error, message } = err as { error?: string; message?: string };
    if (error === "Unauthorized") {
      logout(setUser, navigate);
    } else {
      if (error && message) {
        toast.error(error, { description: message });
      } else if (message) {
        toast.error(message);
      } else {
        toast.error("An unknown error occurred");
      }
    }
  }
};

const createQueryClient = (
  navigate: ReturnType<typeof useNavigate>,
  setUser: (user: typeof defaultUser) => void
) =>
  new QueryClient({
    queryCache: new QueryCache({
      onError: (error) => {
        errorHandler(error, navigate, setUser);
      },
    }),
    mutationCache: new MutationCache({
      onError: (error) => {
        errorHandler(error, navigate, setUser);
      },
    }),
  });

function ReactQueryProvider({ children }: React.PropsWithChildren) {
  const navigate = useNavigate();
  const setUser = useSetAtom(userAtom);

  const [client] = useState(() => createQueryClient(navigate, setUser));

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

export default ReactQueryProvider;

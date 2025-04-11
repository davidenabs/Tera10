import ChangePasswordPage from "@/components/pages/auth/change-password";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/change-password")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ChangePasswordPage />;
}

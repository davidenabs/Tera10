import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useNavigate } from "@tanstack/react-router";

const ForgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
});

const ForgotPasswordForm = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof ForgotPasswordSchema>>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof ForgotPasswordSchema>) {
    toast.success("Password reset link sent to your email!");
    console.log(data);
    navigate({ to: "/auth/change-password" });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className=""
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Reset Button */}
        <Button
          type="submit"
          className="w-full rounded-full"
        >
          Send Reset Link
        </Button>
      </form>
    </Form>
  );
};

export default ForgotPasswordForm;

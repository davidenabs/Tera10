import usePageTitle from "@/hooks/use-page-title";
import ForgotPasswordForm from "./children/forgot-password-form";
import AuthFormHeader from "./children/auth_form_header";

const ForgotPasswordPage = () => {
  usePageTitle("Forgot Password Page");

  return (
    <div className="max-w-2/3 mx-auto pt-20">
      <AuthFormHeader
        title={
          <>
            <h2 className="text-2xl font-semibold mb-2">Forgot Password</h2>
          </>
        }
        subtitle="P Forgot your password? Enter your email to reset it."
      />
      <ForgotPasswordForm />
    </div>
  );
};

export default ForgotPasswordPage;

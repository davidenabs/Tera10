import usePageTitle from "@/hooks/use-page-title";
import LoginForm from "./children/login-form";
import AuthFormHeader from "./children/auth_form_header";

const LoginPage = () => {
  usePageTitle("Login Page");

  return (
    <div className="sm:max-w-2/3 mx-auto md:pt-20">
      <AuthFormHeader
        title={
          <>
            <div className="flex justify-center mb-3">
              <span className="text-2xl">👋</span>
            </div>
            <h2 className="text-2xl font-semibold mb-2">Welcome Back</h2>
          </>
        }
        subtitle="Provide your sign in details to continue "
      />
      <LoginForm />
    </div>
  );
};

export default LoginPage;

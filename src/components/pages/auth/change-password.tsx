import usePageTitle from "@/hooks/use-page-title";
import ChangePasswordForm from "./children/change-password-form";
import AuthFormHeader from "./children/auth_form_header";

const ChangePasswordPage = () => {
  usePageTitle("Change Password Page");

  return (
    <div className="sm:max-w-2/3 mx-auto md:pt-20">
      <AuthFormHeader
        title={
          <>
            <h2 className="text-2xl font-semibold mb-2">Change Password</h2>
          </>
        }
        subtitle=" Change your password to access your account"
      />
      <ChangePasswordForm />
    </div>
  );
};

export default ChangePasswordPage;

import usePageTitle from "@/hooks/use-page-title";
// import LoginForm from "./children/login-form";

const RegisterPage = () => {
  usePageTitle("Register Page");

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-[22px] font-bold leading-normal text-gray-1000 lg:text-3xl">
        Register Page
      </h1>
      <p className="text-gray-500 my-4">
        This is the login page. Please enter your credentials to log in.
      </p>
      {/* <LoginForm /> */}
    </div>
  );
};

export default RegisterPage;

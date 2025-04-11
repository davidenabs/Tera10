import { ReactElement } from "react";

const AuthFormHeader = ({
  title,
  subtitle,
}: {
  title: ReactElement | string;
  subtitle: string;
}) => {
  return (
    <div className="m-10 text-center flex items-center justify-center">
      <div className="w-full max-w-md">
        {title}
        <p className="text-gray-600 text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthFormHeader;

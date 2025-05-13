import { JSX } from "react";

type Props = {
  title: string | JSX.Element;
  description: string | JSX.Element;
};

const KYCFormHeader = (props: Props) => {
  return (
    <div className="text-center pb-10">
      <h2 className="text-2xl font-semibold mb-2">{props.title}</h2>
      <p className="text-gray-500 text-sm mb-6">{props.description}</p>
    </div>
  );
};

export default KYCFormHeader;

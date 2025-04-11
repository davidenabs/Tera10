import { appAtom } from "@/stores/app";
import { useAtom } from "jotai";
import React from "react";

const usePageTitle = (title: string) => {
  const [, setApp] = useAtom(appAtom);

  React.useEffect(() => {
    setApp((prev) => ({ ...prev, dashboardTitle: title }));

    return () => setApp((prev) => ({ ...prev, dashboardTitle: "" }));
  }, [setApp, title]);
};

export default usePageTitle;

import { appAtom } from "@/stores/app";
import { useAtom } from "jotai";
import React from "react";

const usePageTitle = (title: string, subtitle?: string) => {
  const [, setApp] = useAtom(appAtom);

  React.useEffect(() => {
    setApp((prev) => ({
      ...prev,
      dashboardTitle: title,
      subtitle: subtitle ?? null,
    }));

    return () => setApp((prev) => ({ ...prev, dashboardTitle: "" }));
  }, [setApp, title, subtitle]);
};

export default usePageTitle;

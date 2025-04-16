/* eslint-disable @typescript-eslint/no-explicit-any */
import { userAtom } from "@/stores/user";
// import { useNavigation } from "@/utils/navigation";
import { useAtomValue } from "jotai";
import React, { useEffect } from "react";

interface UseCheckUserFieldParams {
  field: string;
  condition: (value: any) => boolean;
  redirectTo: string;
}

function getNestedValue(obj: any, path: string): any {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
}

function useCheckUserFields(conditions: UseCheckUserFieldParams[]) {
  const [loaded, setLoaded] = React.useState(false);
  // const { goTo } = useNavigation();
  const user = useAtomValue(userAtom);

  useEffect(() => {
    const userData = user?.user;
    if (!userData || !loaded) return;
    for (const { field, condition, redirectTo } of conditions) {
      const fieldValue = getNestedValue(userData, field);
      if (fieldValue === undefined) return;
      if (condition(fieldValue)) {
        // goTo(redirectTo);
        console.log(redirectTo);
        
        break;
      }
    }
  }, [user, conditions, loaded]);

  useEffect(() => {
    setLoaded(true);
    return () => setLoaded(false);
  }, []);
}

export default useCheckUserFields;

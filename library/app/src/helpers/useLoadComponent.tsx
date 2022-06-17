
import React, { useLayoutEffect, useState } from "react";


function useLoad(module: Promise<any>): React.ElementType | null {
  const [component, setComponent] = useState<React.ElementType | null>(() => null);

  useLayoutEffect(() => {
    module
      .then((instance: any) => setComponent(() => instance['default']));
  }, [module]);

  return component;
}

export default useLoad;

// ScrollToTop.js
import { useLocation } from "@reach/router";
import React, { useEffect } from "react";

export const ScrollToTop = ({ children }: any) => {
  const { pathname } = useLocation();

  useEffect(() => window.scrollTo(0, 0), [pathname]);

  return <>{children}</>;
};

import { lazy } from "react";

export const lazyMinLoadTime = (
  factory = () => Promise,
  minLoadTimeMs = 2000
) =>
  lazy(() =>
    Promise.all([
      factory(),
      new Promise((resolve) => setTimeout(resolve, minLoadTimeMs)),
    ]).then(([moduleExports]) => moduleExports)
  );

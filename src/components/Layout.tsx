import * as React from "react";
import cx from "classnames";

export default function Layout({
  as: Component = "div",
  className,
  children,
  ...props
}: React.HTMLProps<HTMLDivElement> & { as?: any }) {
  return (
    <Component
      data-component="Layout"
      className={cx(className, "md:grid md:grid-cols-10")}
      {...props}
    >
      <div className="hidden md:block md:col-span-3 mb-8">
        <h1 className="text-3xl mb-4">Welcome to my notes.</h1>
        <p className="text-lg text-gray-600">
          On this small corner of the internet, I write about the various things
          that catch my fancy. From software, to organizational process, to
          poetry and music.
        </p>
      </div>
      <div className="md:col-span-7 md:pl-20">
        {children}
      </div>
    </Component>
  );
}

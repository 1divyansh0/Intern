import React from "react";

export default function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primaryLight">
      <div className="w-full max-w-3xl card">
        <div className="bg-primary -mx-6 -mt-6 px-6 py-6 ">
          <h1 className="text-white text-3xl font-semibold text-center">
            {title}
          </h1>
          {subtitle && (
            <p className="text-teal-100 text-center mt-1">{subtitle}</p>
          )}
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </div>
  );
}

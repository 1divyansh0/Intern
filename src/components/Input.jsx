import React from "react";
import { clsx } from "clsx";

export default function Input({
  label,
  type = "text",
  value,
  onChange,
  name,
  placeholder,
  error,
  rightIcon,
  onRightIconClick,
}) {
  return (
    <div className="w-full">
      {label && <label className="field-label">{label}</label>}
      <div className="relative">
        <input
          className={clsx(
            "field-input pr-10",
            error && "border-red-500 focus:border-red-600"
          )}
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          autoComplete="off"
        />
        {rightIcon && (
          <button
            type="button"
            onClick={onRightIconClick}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2"
            aria-label="toggle"
          >
            {rightIcon}
          </button>
        )}
      </div>
      {error && <p className="error-text">{error}</p>}
    </div>
  );
}

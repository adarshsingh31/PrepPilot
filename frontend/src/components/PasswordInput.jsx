import React, { useState } from "react";

const PasswordInput = ({ label, placeholder = "••••••••", value, onChange, error, name, required = false, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputId = props.id || name || "password-input";

  return (
    <div className="space-y-1 w-full">
      {label && (
        <label htmlFor={inputId} className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          id={inputId}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 pr-12 text-on-surface focus:border-primary focus:ring-0 transition-all placeholder:text-on-surface-variant/40 text-base"
          {...props}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface focus:outline-none transition-colors"
        >
          <span className="material-symbols-outlined text-[20px] select-none">
            {showPassword ? "visibility_off" : "visibility"}
          </span>
        </button>
      </div>
      {error && (
        <p className="text-xs text-error mt-1 flex items-center gap-1">
          <span className="material-symbols-outlined text-sm">error</span>
          {error}
        </p>
      )}
    </div>
  );
};

export default PasswordInput;

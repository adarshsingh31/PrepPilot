import React from "react";

const AuthInput = ({ label, type = "text", placeholder, value, onChange, error, name, required = false, ...props }) => {
  const inputId = props.id || name;

  return (
    <div className="space-y-1 w-full">
      {label && (
        <label htmlFor={inputId} className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={inputId}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 text-on-surface focus:border-primary focus:ring-0 transition-all placeholder:text-on-surface-variant/40 text-base"
        {...props}
      />
      {error && (
        <p className="text-xs text-error mt-1 flex items-center gap-1">
          <span className="material-symbols-outlined text-sm">error</span>
          {error}
        </p>
      )}
    </div>
  );
};

export default AuthInput;

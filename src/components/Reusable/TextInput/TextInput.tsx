/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { forwardRef } from "react";
import type { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface TextInputProps {
  label: string;
  name?: string;
  placeholder?: string;
  type?: string;
  error?:
    | FieldError
    | string
    | undefined
    | Merge<FieldError, FieldErrorsImpl<any>>;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  defaultValue?: any;
  isDisabled?: boolean;
  isRequired?: boolean;
  icon: any;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      name,
      placeholder = "",
      type = "text",
      error,
      defaultValue,
      onKeyDown,
      isDisabled = false,
      isRequired = true,
      icon,
      ...rest
    },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-2 w-full font-plus-jakarta-sans">
        <label htmlFor="identifier" className="text-white mb-1">
          {label}
        </label>

        <div className="relative">
          <img
            src={icon}
            alt="private key"
            className="absolute left-5 top-1/2 -translate-y-1/2 size-5 z-10 pointer-events-none"
          />
          <div className="group rounded-[8px] bg-neutral-90 p-[1px] transition-all duration-500 hover:bg-gradient-to-r hover:from-orange-400 hover:via-green-400 hover:to-cyan-400">
            <input
              required={isRequired}
              id={name}
              name={name || undefined}
              type={type}
              placeholder={placeholder}
              onKeyDown={onKeyDown}
              defaultValue={defaultValue}
              ref={ref}
              disabled={isDisabled}
              className={`w-full pl-12 pr-6 py-[15px] rounded-[7px] bg-neutral-140 focus:outline-none transition duration-300 focus:border-primary-45/70 text-neutral-85 ${
                error ? "ring-2 ring-red-500" : ""
              }`}
              style={{
                boxShadow: "inset 0px 4px 10.5px 0px rgba(255, 255, 255, 0.25)",
              }}
              {...rest}
            />
          </div>
        </div>
        {error && <span className="text-red-500 text-sm">{String(error)}</span>}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;

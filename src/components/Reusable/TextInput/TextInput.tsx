/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { forwardRef } from "react";
import type { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface TextInputProps {
  name?: string;
  placeholder?: string;
  type?: string;
  error?: FieldError | string | undefined | Merge<FieldError, FieldErrorsImpl<any>>;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  defaultValue?: any;
  isDisabled?: boolean;
  isRequired?: boolean;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ name, placeholder = "", type = "text", error, defaultValue, onKeyDown, isDisabled = false, isRequired = true, ...rest }, ref) => {
    return (
      <div className="flex flex-col gap-2 font-Inter w-full font-plus-jakarta-sans">
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
          className={`w-full p-4 rounded-[5px] border border-primary-50 bg-primary-50 focus:border focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-55 ${error ? "border-red-500" : "border-primary-10/50"
            }`}
          {...rest}
        />
        {typeof error === "object" && "message" in error && (
          <span className="text-red-500 text-sm">{String(error.message)}</span>
        )}
        {typeof error === "string" && (
          <span className="text-red-500 text-sm">{error}</span>
        )}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;

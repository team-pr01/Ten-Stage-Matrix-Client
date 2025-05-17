/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { forwardRef } from "react";
import type { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface TextAreaProps {
  name?: string;
  placeholder?: string;
  type?: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  defaultValue?: any;
  isDisabled?: boolean;
  isRequired?: boolean;
  rows : number;
  cols : number;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({  name, placeholder = "", rows, cols, error, isDisabled = false, isRequired = true, ...rest }, ref) => {
    return (
      <div className="flex flex-col gap-2 font-Inter w-full font-plus-jakarta-sans">
        <textarea
          ref={ref}
          required={isRequired}
          id={name}
          name={name}
          rows={rows}
          cols={cols}
          placeholder={placeholder}
          disabled={isDisabled}
          className={`w-full p-4 rounded-[5px] border border-primary-50 bg-primary-50 focus:border focus:outline-none focus:border-primary-10/50 transition duration-300 text-neutral-55 ${error ? "border-red-500" : ""
            }`}
          {...rest}
        />
        {error?.message && (
          <span className="text-red-500 text-sm">{String(error.message)}</span>
        )}
      </div>
    );
  }
);


TextArea.displayName = "TextArea";

export default TextArea;

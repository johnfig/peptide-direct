import clsx from "clsx";
import type { UseFormRegisterReturn } from "react-hook-form";

interface TextareaProps {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  register?: UseFormRegisterReturn;
  rows?: number;
  className?: string;
}

export default function Textarea({
  label,
  name,
  placeholder,
  required = false,
  error,
  register,
  rows = 4,
  className,
}: TextareaProps) {
  return (
    <div className={clsx("space-y-1.5", className)}>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-navy"
      >
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </label>

      <textarea
        id={name}
        placeholder={placeholder}
        rows={rows}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={clsx(
          "w-full resize-y rounded-xl border px-4 py-2.5 text-sm",
          "transition-colors duration-200",
          "placeholder:text-gray-400",
          "focus:outline-none focus:ring-2",
          error
            ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
            : "border-gray-200 focus:border-medical-blue focus:ring-medical-blue/20",
        )}
        {...register}
      />

      {error && (
        <p id={`${name}-error`} className="text-xs text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

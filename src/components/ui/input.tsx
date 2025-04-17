import * as React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  isNumber?: boolean; // Add this prop
}

function Input({
  className,
  type,
  isNumber,
  onChange,
  id,
  ...props
}: InputProps) {
  const generatedId = React.useId();
  const inputId = id || generatedId;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNumber) {
      const value = e.target.value === "" ? null : Number(e.target.value);
      onChange?.(value as unknown as React.ChangeEvent<HTMLInputElement>);
    } else {
      onChange?.(e);
    }
  };

  return (
    <input
      id={inputId}
      type={type}
      data-slot="input"
      className={cn(
        "border-inpu file:text-foreground placeholder:text-[#667085] selection:bg-accent selection:text-primary-foreground flex h-11 w-full min-w-0 rounded-xl border border-[#D0D5DD] bg-white px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus:ring-background",
        "focus-visible:border-[#D0D5DD] focus-visible:ring-[#D0D5DD]/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-red-500/20 dark:aria-invalid:ring-red-500/40 aria-invalid:border-red-500",
        className
      )}
      onChange={handleChange} // Use the custom handler
      {...props}
    />
  );
}

export { Input };

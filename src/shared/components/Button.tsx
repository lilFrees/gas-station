import { MouseEventHandler, ReactNode } from "react";

function BrandButton({
  onClick,
  children,
  variant,
  className,
  size = "md",
  icon,
}: {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  variant?: "primary" | "danger" | "default";
  className?: string;
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
}) {
  const sizeClasses = {
    sm: "h-[24px]",
    md: "h-[42px]",
    lg: "h-[52px]",
  };

  return (
    <button
      className={`flex w-full items-center justify-center rounded-lg font-sans font-medium text-inherit text-white transition-all duration-200 ${variant === "primary" ? "bg-primary" : variant === "danger" ? "bg-danger" : "border border-slate-300 bg-slate-100 !text-black"} ${variant === "primary" ? "hover:bg-primary/80" : variant === "danger" ? "hover:bg-danger-dark" : ""} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
}

export default BrandButton;

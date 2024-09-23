import { MouseEventHandler, ReactNode } from "react";

function ActionButton({
  onClick,
  children,
  icon,
  type,
}: {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  icon?: ReactNode;
  type?: "info" | "danger";
}) {
  return (
    <button
      className={`flex h-8 w-max items-center gap-[6px] rounded-full border px-3 font-sans text-xs font-medium transition-all duration-200 ${type === "info" ? "border-background bg-background" : "border-danger/40 bg-danger/10 text-danger hover:bg-danger/20"}`}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </button>
  );
}

export default ActionButton;

function LinkItem({
  text,
  type,
  isActive,
}: {
  text?: string;
  type?: "link" | "record";
  isActive?: boolean;
}) {
  return (
    <div
      className={`flex cursor-pointer items-center gap-2 text-sm font-medium transition-all duration-300 ${type === "record" ? "text-danger" : ""} ${isActive && type !== "record" ? "text-primary" : "text-black"}`}
    >
      <span>{text}</span>
      {type === "record" && (
        <div className="relative flex h-2 w-2 items-center justify-center rounded-full bg-danger">
          <div className="absolute h-2 w-2 animate-ping rounded-full bg-danger"></div>
        </div>
      )}
    </div>
  );
}

export default LinkItem;

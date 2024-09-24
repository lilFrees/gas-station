import { Input } from "antd";

function InputField({
  label,
  id,
  value,
  size = "default",
}: {
  label: string;
  id: string;
  value: string;
  size?: "default" | "small";
}) {
  return (
    <label htmlFor={id} className="flex flex-col">
      <div
        className={`w-max ${size === "small" ? "text-parent-10" : "text-parent-20"}`}
      >
        {label}
      </div>
      <Input
        id={id}
        type="text"
        className={`w-full rounded-[0.5vw] p-[2%] text-parent-20 ${size === "small" ? "!h-6" : ""}`}
        value={value}
        disabled
      />
    </label>
  );
}

export default InputField;

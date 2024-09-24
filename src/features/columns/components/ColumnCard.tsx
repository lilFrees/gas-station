import { Input } from "antd";
import { TbGridDots } from "react-icons/tb";
import BrandButton from "../../../shared/components/Button";
import { FaCirclePlay } from "react-icons/fa6";
import InputField from "./InputField";

function ColumnCard({ id }: { id: number }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border-[1.5px] border-primary bg-white p-[0.5vw]">
      <div className="mb-2 flex items-center justify-between gap-[1vw]">
        <div className="text-parent-50 font-bold">#{id + 1}</div>
        <button className="rounded-md p-[0.2vw] text-parent-50 transition-all duration-200 hover:bg-slate-100">
          <TbGridDots />
        </button>
      </div>
      <div className="mb-2 grid grid-cols-3 gap-[0.5vw]">
        <InputField label="Темп-ра" id={`temp-${id}`} value="20.0" />
        <InputField label="Давл-е" id={`pressure-${id}`} value="50" />
        <InputField label="Цена" id={`price-${id}`} value="3800.0" />
      </div>
      <div className="mb-2 grid grid-cols-2 gap-[0.5vw]">
        <InputField label="Давление" id={`volume-${id}`} value="0.000" />
        <InputField label="Сумма (сум)" id={`sum-${id}`} value="0.0" />
      </div>
      <Input
        type="text"
        size="small"
        className="mb-2 w-full rounded-md p-[0.2vw] text-parent-20"
      />
      <BrandButton
        variant="primary"
        className="mt-auto h-auto gap-[0.25vw] p-[0.25vw] text-parent-30"
        icon={<FaCirclePlay />}
      >
        Старт
      </BrandButton>
    </div>
  );
}

export default ColumnCard;

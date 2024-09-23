import { Input } from "antd";
import { TbGridDots } from "react-icons/tb";
import BrandButton from "../../../shared/components/Button";
import { FaCirclePlay } from "react-icons/fa6";

function ColumnCard({ id }: { id: number }) {
  return (
    <div className="h-full w-full">
      <div className="relative left-0 top-0 h-full w-full overflow-hidden rounded-xl border-[1.5px] border-primary bg-white px-[0.5vw] py-[0.25vw]">
        <div className="mx-auto flex w-[95%] flex-col">
          <div className="flex items-center justify-between gap-[1vw]">
            <div className="text-parent-50 font-bold">#{id + 1}</div>
            <button className="rounded-md p-[0.2vw] text-parent-50 transition-all duration-200 hover:bg-slate-100">
              <TbGridDots />
            </button>
          </div>
          <div className="grid grid-cols-3 items-end gap-[0.5vw] pb-[3%]">
            <label htmlFor={`temp-${id}`} className="leading-[0.8]">
              <div className="w-max text-parent-20">Темп-ра</div>
              <Input
                id={`temp-${id}`}
                type="text"
                className="w-full p-[0.2vw] text-parent-20"
                value={"20.0"}
                disabled
              />
            </label>
            <label htmlFor={`pressure-${id}`} className="leading-[0.8]">
              <div className="w-max text-parent-20">Давл-е </div>
              <Input
                id={`pressure-${id}`}
                type="text"
                className="w-full p-[0.2vw] text-parent-20"
                disabled
                value={"50"}
              />
            </label>
            <label htmlFor={`price-${id}`} className="leading-[0.8]">
              <div className="w-max text-parent-20">Цена</div>
              <Input
                id={`price-${id}`}
                type="text"
                className="w-full p-[0.2vw] text-parent-20"
                disabled
                value={"3800.0"}
              />
            </label>
          </div>
          <div className="grid grid-cols-2 items-end gap-[0.5vw]">
            <label htmlFor={`volume-${id}`} className="!h-min leading-[0.8]">
              <div className="w-max text-parent-10">Давление</div>
              <Input
                id={`volume-${id}`}
                type="text"
                className="w-full p-[0.2vw] text-parent-20"
                disabled
                value={"0.000"}
              />
            </label>
            <label htmlFor={`sum-${id}`} className="!h-min leading-[0.8]">
              <div className="w-max text-parent-10">Сумма (сум)</div>
              <Input
                id={`sum-${id}`}
                type="text"
                className="w-full rounded-md p-[0.2vw] text-parent-20"
                disabled
                value={"0.0"}
              />
            </label>
          </div>
          <Input
            type="text"
            size="small"
            className="mt-[0.4vw] w-full rounded-md p-[0.2vw] text-parent-20"
          />
          <BrandButton
            variant="primary"
            className="mt-[0.25vw] h-auto gap-[0.25vw] p-[0.25vw] text-parent-30"
            icon={<FaCirclePlay />}
          >
            Старт
          </BrandButton>
        </div>
      </div>
    </div>
  );
}

export default ColumnCard;

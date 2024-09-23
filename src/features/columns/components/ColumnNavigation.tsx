import { StopOutlined } from "@ant-design/icons";
import ActionButton from "./ActionButton";
import { FaTowerBroadcast, FaXmark } from "react-icons/fa6";
import Logo from "../../../shared/components/Logo";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import LinkItem from "./LinkItem";
import profilePic from "../../../assets/profile.svg";
import { useAuth } from "../../auth/hooks/useAuth";
import { Modal } from "antd";
import BrandButton from "../../../shared/components/Button";

const linkItems: {
  text: string;
  type: "link" | "record";
}[] = [
  {
    text: "Колонки",
    type: "link",
  },
  {
    text: "Видеофиксация",
    type: "record",
  },
  {
    text: "Отчеты",
    type: "link",
  },
  {
    text: "Объёмы",
    type: "link",
  },
  {
    text: "Настройки",
    type: "link",
  },
];

function ColumnNavigation() {
  const [activePage, setActivePage] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { logout } = useAuth();

  return (
    <div className="border-b border-slate-300 bg-white">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-5 overflow-hidden px-6">
        <div className="flex h-full items-center gap-6">
          <Logo />
          <AnimatePresence>
            {linkItems.map((linkItem, index) => (
              <div
                key={index}
                onClick={() => setActivePage(index)}
                className="relative flex h-full items-center"
              >
                <LinkItem
                  text={linkItem.text}
                  type={linkItem.type}
                  isActive={activePage === index}
                />
                {activePage === index && (
                  <motion.div
                    layoutId="underline"
                    initial={{ y: 2 }}
                    animate={{ y: 2 }}
                    exit={{ y: 2 }}
                    className={`absolute bottom-0 h-1 w-full rounded-xl ${linkItem.type === "record" ? "bg-danger" : "bg-primary"}`}
                  ></motion.div>
                )}
              </div>
            ))}
          </AnimatePresence>
        </div>
        <div className="flex items-center gap-3">
          <ActionButton
            icon={<StopOutlined />}
            onClick={() => setIsOpen(true)}
            type="info"
          >
            Закрыть смену
          </ActionButton>
          <Modal
            open={isOpen}
            onClose={() => setIsOpen(false)}
            onCancel={() => setIsOpen(false)}
            cancelButtonProps={{ className: "hidden" }}
            okButtonProps={{ className: "hidden" }}
            bodyProps={{ className: "flex flex-col gap-3 p-5 items-center" }}
            className="!w-[30rem] rounded-lg"
            getContainer={false}
          >
            <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-gradient-to-b from-[#F1F5F699] to-[#D4DFE299]">
              <StopOutlined className="text-lg text-[#69757A]" />
            </div>
            <h3 className="text-lg font-semibold">Подтвердите действие</h3>
            <p className="-mt-2 text-center text-sm text-[#767993]">
              Вы уверены, что хотите закрыть смену? Перед закрытием смены, Вы
              должны распечатать все чеки, которые не прошли фискализацию в
              течении рабочего дня.
            </p>
            <div className="mt-5 flex w-full items-center gap-4">
              <BrandButton onClick={() => setIsOpen(false)}>Отмена</BrandButton>
              <BrandButton onClick={logout} variant="primary">
                Начать
              </BrandButton>
            </div>
          </Modal>
          <ActionButton icon={<FaTowerBroadcast />} type="danger">
            Аварийная остановка
          </ActionButton>
          <div className="h-8 w-8 cursor-pointer rounded-full border border-primary p-px">
            <img
              src={profilePic}
              alt="Profile Picture"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColumnNavigation;

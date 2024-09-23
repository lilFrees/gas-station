import logo from "../../assets/logo.svg";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-[30px] w-[30px] overflow-hidden">
        <img src={logo} alt="Logo" className="h-full w-full object-contain" />
      </div>
      <div className="text-xl font-semibold">FuelNet</div>
    </div>
  );
}

export default Logo;

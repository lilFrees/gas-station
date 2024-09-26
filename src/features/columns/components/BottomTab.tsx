function BottomTab() {
  return (
    <div className="mx-auto mt-5 w-full max-w-6xl px-2">
      <div className="flex items-center gap-2">
        <h2 className="text-2xl font-bold">Неоплаченные операции</h2>
        <div className="rounded-full border border-slate-300 px-2 text-xs">
          0 операций
        </div>
      </div>
      <div className="flex items-center justify-center pt-10">
        <h3 className="text-xl font-light">No data available</h3>
      </div>
    </div>
  );
}

export default BottomTab;

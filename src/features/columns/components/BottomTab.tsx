function BottomTab() {
  return (
    <div className="mx-auto mt-5 w-full max-w-6xl px-2">
      <div className="flex items-center gap-2">
        <h2 className="text-2xl font-bold">Неоплаченные операции</h2>
        <div className="rounded-full border border-slate-300 px-2">
          0 операций
        </div>
      </div>
    </div>
  );
}

export default BottomTab;

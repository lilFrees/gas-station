import { useEffect } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/hooks/useAuth";
import ColumnGrid from "../components/ColumnGrid";
import ColumnNavigation from "../components/ColumnNavigation";

function ColumnPage() {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-slate-50">
      <ColumnNavigation />
      <h1 className="text-2xl font-semibold">Колонки</h1>
      <PanelGroup autoSaveId="persist" direction="vertical">
        <Panel className="border-4 border-red-500">
          <ColumnGrid />
        </Panel>
        <PanelResizeHandle className="flex h-4 items-center justify-center overflow-visible bg-slate-300">
          <div className="h-3 w-3 rounded-full bg-slate-500"></div>
        </PanelResizeHandle>
        <Panel>
          <div className="h-full overflow-hidden bg-white p-4 pt-6">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-semibold">Неоплаченные операции</h2>
              <div className="rounded-full border px-5 py-2">0 операций</div>
            </div>
          </div>
        </Panel>
      </PanelGroup>
    </div>
  );
}

export default ColumnPage;

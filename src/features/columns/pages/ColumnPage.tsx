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
      <PanelGroup direction="vertical">
        <Panel className="flex flex-col">
          <h1 className="text-2xl font-semibold">Колонки</h1>
          <ColumnGrid />
        </Panel>
        <PanelResizeHandle className="h-4 bg-slate-300" />
        <Panel>
          <div className="h-full overflow-auto bg-white p-4 pt-6">
            <div className="text-3xl">Heading</div>
          </div>
        </Panel>
      </PanelGroup>
    </div>
  );
}

export default ColumnPage;

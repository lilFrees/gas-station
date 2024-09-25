import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/hooks/useAuth";
import ColumnGrid from "../components/ColumnGrid";
import ColumnNavigation from "../components/ColumnNavigation";
import ResizablePanel from "../../../shared/components/ResizablePanels";

function TopContent() {
  return <ColumnGrid />;
}

function BottomContent() {
  return <div className="mx-auto w-full max-w-6xl px-2">Bottom</div>;
}

function ColumnPage() {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="h-screen">
      <ColumnNavigation />

      <div className="h-[calc(100%-57px)]">
        <ResizablePanel TopContent={TopContent} BottomContent={BottomContent} />
      </div>
    </div>
  );
}

export default ColumnPage;

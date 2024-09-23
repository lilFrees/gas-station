import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/hooks/useAuth";
import ColumnNavigation from "../components/ColumnNavigation";
import ColumnGrid from "../components/ColumnGrid";

function ColumnPage() {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <ColumnNavigation />
      <div className="mx-auto h-[calc(100vh-3.5rem)] w-full max-w-6xl grow px-[2vw]">
        <ColumnGrid />
      </div>
    </div>
  );
}

export default ColumnPage;

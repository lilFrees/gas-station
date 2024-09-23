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
    <div className="flex min-h-screen flex-col gap-5 bg-slate-50">
      <ColumnNavigation />
      <div className="mx-auto flex w-full max-w-6xl grow flex-col gap-5 px-[2vw]">
        <h1 className="text-2xl font-semibold">Колонки</h1>
        <ColumnGrid />
      </div>
    </div>
  );
}

export default ColumnPage;

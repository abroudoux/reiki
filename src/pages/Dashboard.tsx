import { useNavigate } from "react-router-dom";

import useStore from "@/lib/store";

import Panel from "@/components/Admin/Panel";

export default function Dashboard() {
  const { token } = useStore();
  const navigate = useNavigate();

  if (!token) navigate("/admin/auth");

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}

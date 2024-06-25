import { useNavigate } from "react-router-dom";

import useStore from "@/lib/store";

import Header from "@/components/Site/Header";
import TableSessions from "@/components/Admin/TableSessions";

export default function Dashboard() {
  const { token, sessions } = useStore();
  const navigate = useNavigate();

  // if (!token) navigate("/admin/auth");

  return (
    <>
      <Header />
      <main className="w-full mt-48 max-w-7xl m-auto">
        <TableSessions />
      </main>
    </>
  );
}

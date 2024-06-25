import { useNavigate } from "react-router-dom";

import useStore from "@/lib/store";

import Sessions from "@/components/Admin/Sessions";

export default function Dashboard() {
  const { token, sessions } = useStore();
  const navigate = useNavigate();

  if (!token) navigate("/admin/auth");

  return (
    <>
      <Sessions />
    </>
  );
}

import { useNavigate } from "react-router-dom";

import useStore from "@/lib/store";

import SessionsSection from "@/components/Admin/SessionsSection";

export default function Dashboard() {
  const { token, sessions } = useStore();
  const navigate = useNavigate();

  if (!token) navigate("/admin/auth");

  return (
    <>
      <SessionsSection />
    </>
  );
}

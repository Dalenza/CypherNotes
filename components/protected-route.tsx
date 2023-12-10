"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  if (!localStorage.getItem("accessToken")) {
    router.push("/login");
    return <></>;
  }

  return <>{children}</>;
}

export default ProtectedRoute;

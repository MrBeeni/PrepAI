import { ReactNode } from "react";
import { redirect } from "next/navigation";

// import { isAuthenticated } from "@/lib/actions/auth.action";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  // const isUserAuthenticated = await isAuthenticated();
  // if (isUserAuthenticated) redirect("/");

  return <div className="auth-layout py-5">{children}</div>;
};

export default AuthLayout;

import Navbar from "@/components/shared/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative">
      <Navbar />

      <div className="mt-20">{children}</div>
    </main>
  );
};

export default Layout;

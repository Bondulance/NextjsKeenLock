import Navbar from "@/components/shared/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="relative">
        <Navbar />

        <section
          className="flex min-h-screen flex-1
        flex-col px-6  max-md:pb-14 sm:px-14
        items-center z-50"
        >
          <div className="w-3/4 max-sm:w-full max-sm:m-0 ">{children}</div>
        </section>
      </main>
    </>
  );
};

export default Layout;

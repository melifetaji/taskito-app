import React from "react";
import Navbar from "../landing/Navbar";
import Footer from "../landing/Footer";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar animate={true} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

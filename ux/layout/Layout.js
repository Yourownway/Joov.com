import React from "react";
import Header from "../share/Header";
import Head from "next/head";
import Footer from "../share/Footer";
export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer/>
    </>
  );
}

import GlobalStyle from "@/globalstyles";
import "@/styles/globals.css";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import SideBar from "components/SideBar/SideBar";
import type { AppProps } from "next/app";
import { Box } from "@mui/material";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isactive, setIsActive] = useState(false)
  return (
    <>
      <GlobalStyle />
      <Box className={`main_components ${isactive ? 'active' : 'not-active'}`}>
        <Header setIsActive={setIsActive} />
        <SideBar />
        <Component {...pageProps} />
        <Footer />
      </Box>

    </>
  );
}

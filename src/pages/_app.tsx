import GlobalStyle from "@/styles/globalstyles";
import "@/styles/globals.css";
import { Box } from "@mui/material";
import Footer from "Layout/Footer/Footer";
import Header from "Layout/Header/Header";
import SideBar from "components/SideBar/SideBar";
import type { AppProps } from "next/app";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isactive, setIsActive] = useState(false);

  useEffect(() => {
    console.log("router", router.pathname == "/login");
  }, []);
  return (
    <>
      <GlobalStyle />
      {router.pathname == "/login" ? (
        <Component {...pageProps} />
      ) : (
        <>
          <Box
            className={`main_components ${isactive ? "active" : "not-active"}`}
          >
            <Header setIsActive={setIsActive} />
            <SideBar />
            <Component {...pageProps} />
            <Footer />
          </Box>
        </>
      )}
    </>
  );
}

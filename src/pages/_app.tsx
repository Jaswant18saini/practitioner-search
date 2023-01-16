import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import SideBar from "components/SideBar/SideBar";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Theme from "@/Context/Theme";
import GlobalStyle from "@/globalstyles";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isactive, setIsActive] = useState(false);

  useEffect(() => {
    console.log("router", router.pathname == "/login");
  }, []);
  return (
    <>
      <Theme>
        <GlobalStyle />
        {router.pathname == "/login" ? (
          <Component {...pageProps} />
        ) : (
          <>
            <Box
              className={`main_components ${
                isactive ? "active" : "not-active"
              }`}
            >
              <Header setIsActive={setIsActive} />
              <SideBar />
              <Component {...pageProps} />
              <Footer />
            </Box>
          </>
        )}
      </Theme>
    </>
  );
}

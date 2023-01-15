import GlobalStyle from "@/globalstyles";
import "@/styles/globals.css";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import SideBar from "components/SideBar/SideBar";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <SideBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

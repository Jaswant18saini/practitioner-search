import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import Header from "components/Header/Header";
import SideBar from "components/SideBar/SideBar";
import Footer from "components/Footer/Footer";

export interface props {
  children?: React.ReactNode;
}
const Applayout = ({ children }: props) => {
  const router = useRouter();
  const [isactive, setIsActive] = useState(false);

  useEffect(() => {
    console.log("router", router.pathname == "/login");
  }, []);

  return (
    <Box>
      <Box sx={{ display: "flex", paddingLeft: "0" }}>
        <Box
          className={`main_components ${isactive ? "active" : "not-active"}`}
        >
          <Header setIsActive={setIsActive} />
          <SideBar />
          {children}
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default Applayout;

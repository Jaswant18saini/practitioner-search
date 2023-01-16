import * as React from "react";
import { Box } from "@mui/material";
import { PersonAdd, Groups, FindInPage } from "@mui/icons-material";
import Link from "next/link";
import { Sidebarstyles } from "./styles";

export default function SideBar() {
  const menuItems = [
    {
      href: "/",
      title: "Homepage",
      icon: <Groups />,
    },
    {
      href: "/memberSearch",
      title: "Member Search",
      icon: <Groups />,
    },
    {
      href: "/applicationSearch",
      title: "Application Search",
      icon: <FindInPage />,
    },
    {
      href: "/createMember",
      title: "Create Member",
      icon: <PersonAdd />,
    },
  ];
  return (
    <Sidebarstyles>
      <Box id="sidebar" className="sidebar">
        <nav>
          <ul>
            {menuItems?.map((val, index) => {
              return (
                <li key={index}>
                  <Link href={val?.href}>{val?.title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        {/* <ul>
          <li className="active">
            <a href="#">
              <Groups /> Member Search
            </a>
          </li>
          <li className="">
            <a href="#">
              <FindInPage /> Application Search
            </a>
          </li>
          <li className="">
            <a href="#">
              <PersonAdd /> Create New Member
            </a>
          </li>
        </ul> */}
      </Box>
    </Sidebarstyles>
  );
}

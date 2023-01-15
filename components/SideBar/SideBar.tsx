

import { Box } from "@mui/material";
import * as React from "react";
import { Sidebarstyles } from "./styles";
import HomeIcon from '@mui/icons-material/Home';
export default function SideBar() {

    return (
        <Sidebarstyles>
            <Box id="sidebar" className="sidebar">
                <ul>
                    <li className="active">
                        <a href="#"> <HomeIcon /> Dashboard</a>
                    </li>
                    <li className="">
                        <a href="#"><HomeIcon /> Leads</a>
                    </li>

                </ul>
            </Box>
        </Sidebarstyles>
    )

}

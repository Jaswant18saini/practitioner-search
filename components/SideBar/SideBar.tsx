

import { Box } from "@mui/material";
import * as React from "react";
import { Sidebarstyles } from "./styles";
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupsIcon from '@mui/icons-material/Groups';
import FindInPageIcon from '@mui/icons-material/FindInPage';
export default function SideBar() {

    return (
        <Sidebarstyles>
            <Box id="sidebar" className="sidebar">
                <ul>
                    <li className="active">
                        <a href="#"> <GroupsIcon /> Member Search</a>
                    </li>
                    <li className="">
                        <a href="#"><FindInPageIcon /> Application Search</a>
                    </li>
                    <li className="">
                        <a href="#"><PersonAddIcon /> Create New Member</a>
                    </li>

                </ul>
            </Box>
        </Sidebarstyles>
    )

}

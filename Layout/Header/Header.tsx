import * as React from "react";
import { Headerstyles } from "./Header.styles";
import PersonIcon from "@mui/icons-material/Person";
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

function Header({ setIsActive }: any) {
    return (
        <Headerstyles>
            <header id="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 col-lg-3 col-xl-2">
                            <div className="logo-sec">
                                <a className="logo animated fadeIn" href="#">
                                    <img src="./Images/Logoold.png" />
                                </a>
                                <a
                                    className="app-sidebar__toggle"
                                    href="#"
                                    data-toggle="sidebar"
                                    aria-label="Hide Sidebar"
                                    onClick={() => setIsActive((prev: any) => !prev)}
                                >
                                    <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 72 55.2"
                                    >
                                        <rect y="0.6" width="72" height="10"></rect>
                                        <rect y="24.6" width="72" height="10"></rect>
                                        <rect y="48.6" width="72" height="10"></rect>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="col-md-8 col-lg-9 col-xl-10">
                            <div className="row">
                                <div className="col-md-8">
                                    <form role="search" className="form-search">
                                        <div className="input-group">
                                            <input
                                                className="form-control"
                                                placeholder="Search for lead"
                                                name="srch-term"
                                                id="ed-srch-term"
                                                type="text"
                                            />
                                            <div className="input-group-btn">
                                                <button type="submit" id="searchbtn">
                                                    <i className="fa fa-search"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>


                                <div className="col-md-4">
                                    <div className="header_actions h-100">   {/* icons */}
                                        <div className="icons">
                                            <a href="JavaScript: void(0)"> <CircleNotificationsIcon /></a>
                                            <a href="JavaScript: void(0)"> <PersonIcon /> </a>
                                        </div>
                                        {/* end */}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </Headerstyles>
    );
}

export default Header;
import * as React from "react";
export default function Header() {

    return (
        <header id="header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 col-lg-3 col-xl-2">
                        <div className="logo-sec">
                            <a className="logo animated fadeIn" href="#">

                            </a>
                            <a className="app-sidebar__toggle" href="#" data-toggle="sidebar" aria-label="Hide Sidebar">

                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 55.2">
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
                                        <input className="form-control" placeholder="Search for lead, client , product , proposal or order" name="srch-term" id="ed-srch-term" type="text" />
                                        <div className="input-group-btn">
                                            <button type="submit" id="searchbtn">
                                                <i className="fa fa-search"></i></button>
                                        </div>

                                        <div className="search-content">
                                            <div className="search-results">
                                                <table className=" table-search">
                                                    <thead>
                                                        <tr><th>Search Results</th>
                                                            <th className="text-right">03 Items</th>
                                                        </tr></thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>John</td>
                                                            <td className="text-right"><a href="#">View User</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>John</td>
                                                            <td className="text-right"><a href="#">View Client</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>John</td>
                                                            <td className="text-right"><a href="#">View Broker</a></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-4">
                                <div className="header_actions h-100">
                                    <ul className="mb-0 d-flex">
                                        <li>
                                            <a href="index.php" className="d-inline-block noti-bell">
                                                <span className="noti"></span></a>
                                        </li>
                                        <li>
                                            <a href="add-list.php">

                                            </a>
                                        </li>
                                        <li>
                                            <div className="dropdown ac-cstm show">

                                                <div className="dropdown-menu fadeIn">
                                                    <a className="dropdown-item" href="#"><i className="fa fa-sign-out"></i>Log Out</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )

}

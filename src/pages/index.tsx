import Head from "next/head";
import styles from "@/styles/Home.module.css";
import withAuth from "@/Auth/withAuth"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LayoutWithLogin from "@/Layout";
import DashboardPageComponent from "@/PagesComponents/Dashboard";

const Home = () => {
  return (<DashboardPageComponent />);

}

export default withAuth(Home)




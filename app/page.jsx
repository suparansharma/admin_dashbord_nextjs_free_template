"use client"
import ECommerce from "@/components/Dashboard/E-commerce";
import SignIn from "./auth/signin/page";

import 'react-toastify/dist/ReactToastify.css';
import { Slide, ToastContainer } from "react-toastify";

import Axios from '../utils/axios'

// export const metadata = {
//   title: "TailAdmin | Next.js E-commerce Dashboard Template",
//   description: "This is Home Blog page for TailAdmin Next.js",
//   // other metadata
// };

export default function Home() {


  return (
    <>
      <ECommerce />
    </>
  );
}




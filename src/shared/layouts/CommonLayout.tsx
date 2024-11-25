// import Collaboration from "../components/Collaboration";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import CustomFooter from "../components/CustomFooter";
// import SocialMediaTag from "../components/SocialMediaTag";
// import PageScroll from "../components/PageScroll";


export default function  CommonLayout() {
 

  return (
    <>
      <Header />
      <section className="relative mx-auto overflow-hidden container-fluid">
        <Outlet />
        <CustomFooter />
      </section>
    </>
  );
}

/* eslint-disable react/prop-types */
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <div className={cx("content")}>{children}</div>
      </div>
    </>
  );
}

export default DefaultLayout;

/* eslint-disable react/prop-types */
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </>
  );
}

export default DefaultLayout;

/* eslint-disable react/prop-types */
import Header from "./Header";

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </>
  );
}

export default DefaultLayout;

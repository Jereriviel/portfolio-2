import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

function MainLayout() {
  const location = useLocation();

  return (
    <>
      <Header />
      <main
        className="page-fade flex min-h-0 w-full grow flex-col items-center"
        key={location.pathname}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;

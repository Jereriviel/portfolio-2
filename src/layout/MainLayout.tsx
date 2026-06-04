import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

function MainLayout() {
  return (
    <>
      <Header />
      <main className="flex min-h-0 w-full grow flex-col items-center">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;

import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <>
      <header className="top-0 z-50 mt-0 w-full space-y-4 py-4 md:space-y-0">
        <nav className="flex justify-between">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `link ${isActive ? "text-accent" : ""}`
            }
          >
            home
          </NavLink>

          <div className="flex gap-8">
            <NavLink
              to={"/projects"}
              className={({ isActive }) =>
                `link ${isActive ? "text-accent" : ""}`
              }
            >
              work
            </NavLink>

            <HashLink smooth to={"/#about-section"} className="link">
              about
            </HashLink>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;

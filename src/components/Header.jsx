import { useState } from "react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; // Import HashLink

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="header max-width py-5">
        <div className="flex items-center justify-between">
          <article className="flex items-center">
            <img src={Logo} alt="Logo" className="w-50 h-10" />

            <nav className="hidden md:block md:ml-5">
              <ul className="flex items-start justify-start">
                <li>
                  <Link className="text-slate-400" to="/">
                    Home
                  </Link>
                </li>
                <li className="my-5 md:my-0 md:mx-5">
                  <HashLink className="text-slate-400" smooth to="/#advanced">
                    Advanced
                  </HashLink>
                </li>
                <li>
                  <HashLink className="text-slate-400" smooth to="/#boost">
                    Boost
                  </HashLink>
                </li>
              </ul>
            </nav>
          </article>

          {isOpen && (
            <div className="absolute left-5 right-5 top-20 rounded bg-slate-900 text-slate-200 text-center py-10 md:relative md:top-0 md:left-0 md:right-0 md:bg-transparent md:text-slate-700 md:text-left md:py-0 md:flex md:items-center">
              <nav className="md:hidden">
                <ul className="flex flex-col items-center justify-center">
                  <li>
                    <button>Features</button>
                  </li>
                  <li className="my-5">
                    <button>Pricing</button>
                  </li>
                  <li>
                    <button>Resources</button>
                  </li>
                </ul>
              </nav>
              <ul className="flex flex-col items-center justify-center">
                <li className="my-5">
                  <Link to="/login" className="text-slate-400">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="btn-cta rounded-full">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          )}

          <div className="hidden md:block">
            <ul className="flex items-center ml-5">
              <li className="my-5 md:my-0 md:mr-5">
                <Link to="/login" className="text-slate-400">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="btn-cta rounded-full">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="uppercase text-sm tracking-wide md:hidden"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>
    </>
  );
}

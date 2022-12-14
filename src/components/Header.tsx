import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { h, Ref } from "preact";
import Logo from "../assets/Logo";
import { NavLink } from "react-router-dom";
import LoginButton from "./LoginButton";
import PolygonIcon from "../assets/PolygonIcon";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <NavLink to="/" className="flex items-center mb-4 sm:mb-0">
                  <Logo color="#862DF7" scale={0.7} />
                </NavLink>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Quiénes somos
                  </a>
                  <NavLink
                    to="restaurants"
                    className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Restaurantes
                  </NavLink>
                  <a
                    href="#"
                    className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Unite!
                  </a>
                </div>
              </div>
            </div>

            <div class="relative ml-3">
              <div>
                <a href="#" className="flex items-center mb-4 sm:mb-0 gap-5">
                  <LoginButton />
                  <PolygonIcon />
                </a>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-white-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref: Ref<HTMLDivElement> | undefined) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="text-black hover:bg-gray-200  block px-3 py-2 rounded-md text-base font-medium"
                >
                  Quiénes somos
                </a>

                <a
                  href="restaurants"
                  className="text-black hover:bg-gray-200  block px-3 py-2 rounded-md text-base font-medium"
                >
                  Restaurantes
                </a>

                <a
                  href="#"
                  className="text-black hover:bg-gray-200  block px-3 py-2 rounded-md text-base font-medium"
                >
                  Unite!
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Header;

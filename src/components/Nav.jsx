import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={`flex items-center w-full bg-white overflow fixed z-[999] border-b`}>
        <div className="container">
          <div className="relative flex items-center justify-between -mx-4">
            <div className="max-w-full px-4 w-60">
              <a href="/#" className="block w-full">
                <img
                  src="/image/my_Logo.png"
                  alt="logo"
                  className="w-36 h-32 md:mx-28 "
                />
              </a>
            </div>
            <div className="flex items-center justify-between w-full px-4">
              <div>
                <button
                  // @click="navbarOpen = !navbarOpen"
                  onClick={() => setOpen(!open)}
                  // :className="navbarOpen && 'navbarTogglerActive' "
                  id="navbarToggler"
                  className={` ${open && "opened"
                    } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                >
                  <svg width="40" height="40" viewBox="0 0 100 100" fill="black" stroke="black">
                        <path className="line line1"
                            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                        <path className="line line2" d="M 20,50 H 80" />
                        <path className="line line3"
                            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                    </svg>
                </button>
                <nav
                  // :className="!navbarOpen && 'hidden' "
                  id="navbarCollapse"
                  className={`absolute bg-white/50 backdrop-blur-md right-0 top-full max-md:h-[100vh] left-0 w-full maxw-[250px] rounded-lg bg-white py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${!open && "hidden"
                    } `}
                >
                  <ul className="flex max-md:flex-col items-center justify-between h-3/4 text-blue-600 ">
                    <ListItem
                      navItemStyles="text-dark"
                      NavLink="/#home"
                    >
                      Home
                    </ListItem>
                    <ListItem
                      navItemStyles="text-dark hover:text-primary"
                      NavLink="/#about"
                    >
                      About
                    </ListItem>
                    <ListItem
                      navItemStyles="text-dark hover:text-primary"
                      NavLink="/#vision"
                    >
                      Our Idea
                    </ListItem>
                    <ListItem
                      navItemStyles="text-dark hover:text-primary"
                      NavLink="/#categories"
                    >
                      Categories
                    </ListItem>
                    <ListItem
                      navItemStyles="text-dark hover:text-primary"
                      NavLink="/#caseflow"
                    >
                      Features
                    </ListItem>
                    <ListItem
                      navItemStyles="text-dark hover:text-primary"
                      NavLink="/#FAQ"
                    >
                      FAQs
                    </ListItem>
                  </ul>
                </nav>
              </div>
              <div className="justify-end hidden pr-16 mr-28 sm:flex lg:pr-0">
                <div className="flex items-center gap-5">
                  <p className="font-semibold">Download</p>
                  <button className="border to-black px-6 py-2 bg-[#2e34d2] text-white rounded-lg">Login/register</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

const ListItem = ({ children, navItemStyles, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className={`flex py-2 text-base font-medium lg:ml-12 lg:inline-flex ${navItemStyles}`}
        >
          {children}
        </a>
      </li>
    </>

  );
};

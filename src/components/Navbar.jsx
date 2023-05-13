import { useState } from "react";
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const NavBar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="navbar__logo" />

      <ul className="navbar__list">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`navbar__list-item ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
            <a href={`#${nav.id}`} title={nav.title}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex flex-1 sm:hidden justify-end items-center">
          <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={() => setToggle((prev) => !prev)} />

          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className="list-none flex flex-col justify-end items-center flex-1">{/* A classe nav__list que tinha aqui anteriormente contém classes que precisam ser mudada para o mobile. Penso em criar um novo componente dentro de navbar que vai receber uma prop que muda a classe principal */}
              {navLinks.map((nav, index) => (
                <li key={nav.id} className={`navbar__list-item ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}>
                  <a href={`#${nav.id}`} title={nav.title}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </nav>
  )
}

export default NavBar;
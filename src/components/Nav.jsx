import logo from "../assets/Logo Netflix.png";
import user from "../assets/Netflix-avatar.png";

function Nav() {
  return (
    <div className="flex justify-between px-16 py-6 font-netflix bg-gradient-to-b from-[#141414] to-transparent fixed top-0 left-0 w-full z-50">
      <div className="flex">
        <img src={logo} alt="Logo Netflix" className="h-6.5 w-auto mr-10" />
        <nav className="flex flex-row">
          <ul className="flex flex-row gap-6 text-[14px]">
            <li>
              <a href="#inicio" className="font-bold text-white">Início</a>
            </li>
            <li>
              <a
                href="#series"
                className="font-[500] text-[rgba(179,179,179)] hover:text-[#A1A1A0] duration-300">Séries</a>
            </li>
            <li>
              <a
                href="#filmes"
                className="font-medium text-[rgba(179,179,179)] hover:text-[#A1A1A0] duration-300"
              >
                Filmes
              </a>
            </li>
            <li>
              <a href="#jogos" className="font-netflix text-[rgba(179,179,179)] hover:text-[#A1A1A0] duration-300">
                Jogos
              </a>
            </li>
            <li>
              <a
                href="#bombando"
                className="font-normal text-[rgba(179,179,179)] hover:text-[#A1A1A0] duration-300">Bombando
                </a>
            </li>
            <li>
              <a
                href="#minha-lista"
                className="font-normal text-[rgba(179,179,179)] hover:text-[#A1A1A0] duration-300">Minha lista
              </a>
            </li>
            <li>
              <a
                href="#idiomas"
                className="font-normal text-[rgba(179,179,179)] hover:text-[#A1A1A0] duration-300">Navegar por Idiomas
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex gap-5 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="white"
          className="size-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>

        <a className="text-white cursor-pointer text-[14px]">Infantil</a>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
          />
        </svg>

        <div className="flex flex-row items-center gap-2.5">
          <img
            src={user}
            alt="Avatar do Usuário Netflix"
            className="w-8 rounded-md"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="cursor-pointer size-5"
          >
            <path
              fillRule="evenodd"
              d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Nav;

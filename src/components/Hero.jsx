import logoNetflix from "../assets/Logo Netflix.png";

function Hero() {
  return (
    <section className='bg-[url("/Stranger-Things/poster-stranger-things.jpg")] h-[1000px] bg-no-repeat w-full bg-cover font-netflix relative text-white'>
      <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/30 to-black/0 z-10"></div>

      <div className="absolute inset-0 z-20 flex flex-col justify-end pb-40 mx-20">
        <img src={logoNetflix} alt="Logo Netflix" className="w-48 mb-4" />

        <img
          src="/Stranger-Things/Stranger_Things_logo.png"
          alt="Logo Stranger Things"
          className="w-1/2 max-w-2xl mb-6"
        />

        <p className="w-2/3 max-w-4xl text-3xl mb-12">
          Quando um garoto desaparece em 1983, os amigos precisam usar suas
          habilidades em jogos de tabuleiro para encontrá-lo, mas logo se
          deparam com uma força sombria.
        </p>

        <div className="flex flex-row gap-4">
          <button className="flex items-center bg-white text-black px-10 py-1 font-bold rounded-md text-xl hover:bg-[#C6C3C2] cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-play-fill mr-2"
              viewBox="0 0 16 16"
            >
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
            </svg>
            <p className="text-2xl">Assistir</p>
          </button>

          <button className="flex items-center bg-[#4F5050] text-#4F5050 px-8 py-1 rounded-md font-extrabold text-xl hover:bg-[#303131] cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-info-circle mr-2"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
            </svg>
            <p>Mais informações</p>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;

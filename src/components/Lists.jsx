function Lists() {
  const rows = [
    { name: "Novidades na Netflix" },
    { name: "Series emocionantes" },
    { name: "Descubra suas próximas histórias" },
    { name: "Filmes para toda família" },
  ];

  const filmesNetflix = [
    {
      id: 1,
      titulo: "La Casa de Papel",
      genero: "Ficção Científica",
      ano: 2016,
      capa: "https://occ-0-5019-3851.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYDEl1SQk2o1-Y45ViaBfh7G-5MAgVszNnrGMd5rNzRGyy9ClfXQQm2SpJlXuumNlkcy_P8p-Pq5QVgoK65AJeHm9UC0_nRpTInc.jpg?r=bb4",
      classificacao: "16+",
      emAlta: true,
    },
    {
      id: 2,
      titulo: "Breaking Bad",
      genero: "Drama Histórico",
      ano: 2016,
      capa: "https://occ-0-5019-3851.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZm_kdw9cGWb_XPoEMwafKKlKMv50BgxgmiibI5HJpqoK01jgEwFXkUytoeeUYH7t9tuanm2W6c9l7a4fbW2J4PbmK917y1djlF0.webp?r=01d",
      classificacao: "14+",
      emAlta: false,
    },
    {
      id: 3,
      titulo: "Stranger Things",
      genero: "Suspense",
      ano: 2021,
      capa: "https://occ-0-5019-3851.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSL7qTNSJKTUdx0S7_9XU9UoqCoFuRHAVxm3j7C-3gCjREDMw2ohfOHPrmgX7IxyMRkp4B8SvJM0x5VlSOwAD0mU5n_noUAYWa6LSNWtwZgnk7w88xO89UbA58AE3cdo3wBlBebkjdtW2iDVHD3-VVoWM3kGHOnu-ed-HpjNcMlJxr0jS6x5-93uRzP9nLsRw3KQGnCDUu0Mk4Srm3B4r1C-lkzheVE-EJX3n55S.jpg?r=794",
      classificacao: "18+",
      emAlta: true,
    },
    {
      id: 4,
      titulo: "Outer Banks",
      genero: "Drama / Sobrevivência",
      ano: 2023,
      capa: "https://occ-0-5019-3851.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABU4y-G0g8bnd78xAHe7CUavlyZezat46qvpKd65JSCE-Tds_Mc4xJh7K35nSJJ865C3wzKvnG0xtYRhpNs1Itd3Jwieoc69JE8D1.jpg?r=8ab",
      classificacao: "16+",
      emAlta: true,
    },
    {
      id: 5,
      titulo: "DNA do Crime",
      genero: "Mistério",
      ano: 2022,
      capa: "https://occ-0-5019-3851.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUTZvCKvbF4PHeDmdQfo3Ngjz7DCK6dLlUdhTotn90fSvj2pYC_Hf9dd4VrOinble1ITFBse9Ui_JZgD-BObBQk7X8WUz8cZQfvS.jpg?r=44a",
      classificacao: "12+",
      emAlta: false,
    },
    {
      id: 6,
      titulo: "Wandinha",
      genero: "Mistério",
      ano: 2022,
      capa: "https://occ-0-5019-3851.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb7l8yPR2thvCNn9x3D7dfIOy8UAxhKU1F8Bf4Rf02eKGQhg3eXuiXe5Dc5HIrp1J3eUlXERC2FB_msqTGbI2Lme0kV-Z8K9xlVD.jpg?r=c58",
      classificacao: "12+",
      emAlta: false,
    },
  ];

  return (
    <section className="overflow-x-hidden">
      {rows.map((row, index) => (
        <div key={index} className="ml-20">
          <div className="mb-3">
            <h2 className="font-bold text-3xl">{row.name}</h2>
          </div>

          <div className="group flex flex-row mb-10 relative">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="bg-linear-to-l transition-all duration-100 from-[#141414] to-[#141414]/0 h-40 pr-5 px-20 py-15 cursor-pointer absolute z-50 right-0 top-1/2  -translate-y-1/2 opacity-0 group-hover:opacity-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
            {filmesNetflix.map((filmes) => (
              <div
                key={filmes.id}
                className="min-w-[300px] h-[160px] mr-2 overflow-hidden rounded-sm cursor-pointer"
              >
                <img
                  src={filmes.capa}
                  alt={filmes.titulo}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Lists;

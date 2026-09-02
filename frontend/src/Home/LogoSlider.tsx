
const companies = [
  {
    name: "Company 1",
    logo: "/ALmorshedy.webp",
  },
  {
    name: "Company 2",
    logo: "/marsilia.webp",
  },
  {
    name: "Company 3",
    logo: "/Alarab.webp",
  },
  {
    name: "Company 4",
    logo: "/TMG.webp",
  },
  {
    name: "Company 5",
    logo: "/ealb.webp",
  },
  {
    name: "Company 6",
    logo: "/bm.webp",
  },
    {
    name: "Company 7",
    logo: "/erw.webp",
  },
   {
    name: "Company 8",
    logo: "/ERC.webp",
  },
   {
    name: "Company 8",
    logo: "/eea.webp",
  },
   {
    name: "Company 8",
    logo: "/hada.webp",
  },
   {
    name: "Company 8",
    logo: "/SAE.webp",
  },
   {
    name: "Company 8",
    logo: "/SM.webp",
  },
    {
    name: "Company 8",
    logo: "/Cosmopack.webp",
  },
    {
    name: "Company 8",
    logo: "/NILE.webp",
  },
    {
    name: "Company 8",
    logo: "/ALR.webp",
  },
    {
    name: "Company 8",
    logo: "/ALZAMEL.webp",
  },
    {
    name: "Company 8",
    logo: "/QAHTAN.webp",
  },
   {
    name: "Company 8",
    logo: "/EIN.webp",
  },
     {
    name: "Company 8",
    logo: "/MANS.webp",
  },
       {
    name: "Company 8",
    logo: "/HAIL.webp",
  },
       {
    name: "Company 8",
    logo: "/JOUF.webp",
  },
];

const LogoSlider = () => {
  return (
    <section className="w-full overflow-hidden  py-16">
      {/* Title */}
      <div className="mb-10 text-center">
        <p className="text-sm font-medium tracking-[0.3em] text-slate-500">
          TRUSTED BY
        </p>


      </div>

      {/* Slider */}
      <div className="relative w-full h-50  ">
        <div className="flex w-max animate-logo-slider hover:[animation-play-state:paused]">

          {/* First set */}
          <div className="flex items-center gap-16 px-8">
            {companies.map((company) => (
              <div
                key={company.name}
                className="flex h-24 w-40 shrink-0 items-center justify-center"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-h-36 max-w-[140px] object-contain grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100"
                />
              </div>
            ))}
          </div>

          {/* Duplicate set */}
          <div className="flex items-center gap-16 px-8">
            {companies.map((company) => (
              <div
                key={`${company.name}-duplicate`}
                className="flex h-24 w-40 shrink-0 items-center justify-center"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-h-36 max-w-[140px] object-contain grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
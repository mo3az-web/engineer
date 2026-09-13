const companies = [
  {
    name: "Al Morshedy",
    logo: "/ALmorshedy.webp",
  },
  {
    name: "Marseilia",
    logo: "/marsilia.webp",
  },
  {
    name: "Alarab",
    logo: "/Alarab.webp",
  },
  {
    name: "TMG",
    logo: "/TMG.webp",
  },
  {
    name: "EALB",
    logo: "/ealb.webp",
  },
  {
    name: "BM",
    logo: "/bm.webp",
  },
  {
    name: "ERW",
    logo: "/erw.webp",
  },
  {
    name: "ERC",
    logo: "/ERC.webp",
  },
  {
    name: "EEA",
    logo: "/eea.webp",
  },
  {
    name: "HADA",
    logo: "/hada.webp",
  },
  {
    name: "SAE",
    logo: "/SAE.webp",
  },
  {
    name: "SM",
    logo: "/SM.webp",
  },
  {
    name: "Cosmopack",
    logo: "/Cosmopack.webp",
  },
  {
    name: "Nile",
    logo: "/NILE.webp",
  },
  {
    name: "ALR",
    logo: "/ALR.webp",
  },
  {
    name: "ALZAMEL",
    logo: "/ALZAMEL.webp",
  },
  {
    name: "QAHTAN",
    logo: "/QAHTAN.webp",
  },
  {
    name: "EIN",
    logo: "/EIN.webp",
  },
  {
    name: "Mansoura",
    logo: "/MANS.webp",
  },
  {
    name: "Hail",
    logo: "/HAIL.webp",
  },
  {
    name: "Jouf",
    logo: "/JOUF.webp",
  },
];

const LogoSlider = () => {
  return (
    <section className="w-full overflow-hidden py-16">
      {/* Title */}
      <div className="mb-10 text-center">
        <p className="text-sm font-medium tracking-[0.3em] text-slate-500">
          TRUSTED BY
        </p>
      </div>

      {/* Slider */}
<div className="relative w-full overflow-hidden" dir="ltr">
  <div className="flex w-max animate-logo-slider hover:[animation-play-state:paused]">
          {/* First set */}
          <div className="flex shrink-0 items-center gap-16 px-8">
            {companies.map((company) => (
              <div
                key={company.name}
                className="flex h-28 w-40 shrink-0 items-center justify-center"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  loading="lazy"
                  className="max-h-24 max-w-[140px] object-contain opacity-60 lg:grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>

          {/* Duplicate set */}
          <div
            className="flex shrink-0 items-center gap-16 px-8"
            aria-hidden="true"
          >
            {companies.map((company) => (
              <div
                key={`${company.name}-duplicate`}
                className="flex h-28 w-40 shrink-0 items-center justify-center"
              >
                <img
                  src={company.logo}
                  alt=""
                  loading="lazy"
                  className="max-h-24 max-w-[140px] object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
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
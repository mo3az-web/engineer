import { useMemo, useState } from "react";

import { projectSections } from "../Data/Data";
const totalProjectsCount = projectSections.reduce(
  (sum, section) => sum + section.projects.length,
  0
);

// Normalizes Arabic text so search isn't thrown off by alef variants,
// tashkeel, or ta-marbuta/ha differences.
const normalize = (value: string) =>
  value
    .toLowerCase()
    .replace(/[\u064B-\u065F\u0670]/g, "") // tashkeel
    .replace(/[إأآا]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .trim();

const Projects = () => {
  const [query, setQuery] = useState("");
  const [activeSections, setActiveSections] = useState<string[]>([]); // empty = all

  const toggleSection = (id: string) => {
    setActiveSections((current) =>
      current.includes(id)
        ? current.filter((sectionId) => sectionId !== id)
        : [...current, id]
    );
  };

  const clearFilters = () => {
    setQuery("");
    setActiveSections([]);
  };

  const { visibleSections, resultCount } = useMemo(() => {
    const q = normalize(query);

    const sections = projectSections
      .filter(
        (section) =>
          activeSections.length === 0 || activeSections.includes(section.id)
      )
      .map((section) => {
        if (!q) return section;

        const sectionMatches =
          normalize(section.title).includes(q) ||
          normalize(section.subtitle).includes(q);

        const matchingProjects = section.projects.filter(
          (project) =>
            normalize(project.name).includes(q) ||
            normalize(project.location).includes(q) ||
            normalize(project.work).includes(q)
        );

        return {
          ...section,
          projects: sectionMatches ? section.projects : matchingProjects,
        };
      })
      .filter((section) => section.projects.length > 0);

    const count = sections.reduce(
      (sum, section) => sum + section.projects.length,
      0
    );

    return { visibleSections: sections, resultCount: count };
  }, [query, activeSections]);

  const hasActiveFilters = query.trim() !== "" || activeSections.length > 0;

  return (
    <main
      className="min-h-screen [background-image:linear-gradient(#e2e8f0_1px,transparent_1px),linear-gradient(90deg,#e2e8f0_1px,transparent_1px)]
            [background-size:60px_60px] text-slate-900"
    >
      {/* =========================
          HERO
      ========================== */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="pointer-events-none absolute inset-0 opacity-[0.35]" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 sm:px-8 lg:px-12 lg:py-40">
          <div className="max-w-4xl">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-12 bg-emerald-500" />
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
                Engineering Portfolio
              </span>
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-8xl">
              مشروعاتنا
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-500 sm:text-xl">
              سجل من المشروعات الهندسية المتنوعة التي شملت التصميم،
              والاستشارات، والرسومات التنفيذية، والإشراف على التنفيذ في مصر
              والمملكة العربية السعودية.
            </p>

            <div className="mt-12 flex flex-wrap gap-10">
              <div>
                <p className="text-4xl font-bold text-slate-950">35+</p>
                <p className="mt-2 text-sm text-slate-500">عامًا من الخبرة</p>
              </div>

              <div className="h-14 w-px bg-slate-200" />

              <div>
                <p className="text-4xl font-bold text-slate-950">
                  300+
                </p>
                <p className="mt-2 text-sm text-slate-500">مشروع منفذ</p>
              </div>

              <div className="h-14 w-px bg-slate-200" />

              <div>
                <p className="text-4xl font-bold text-slate-950">09</p>
                <p className="mt-2 text-sm text-slate-500">قطاعات هندسية</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          SEARCH & FILTER BAR
      ========================== */}
      <section className=" top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
            {/* Search input */}
            <div className="relative flex-1">
              <svg
                className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-4.35-4.35M18 10.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
                />
              </svg>

              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="ابحث عن مشروع، موقع، أو نوع عمل..."
                dir="rtl"
                className="
                  w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pr-12 pl-4
                  text-sm text-slate-900 placeholder:text-slate-400
                  transition-colors
                  focus:border-emerald-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-emerald-100
                "
              />

              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="مسح البحث"
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>

            {/* Result summary + clear */}
            <div className="flex shrink-0 items-center gap-4 text-sm text-slate-500">
              <span>
                {hasActiveFilters ? (
                  <>
                    <span className="font-semibold text-emerald-600">
                      {resultCount}
                    </span>{" "}
                    من {totalProjectsCount} مشروع
                  </>
                ) : (
                  <>{totalProjectsCount} مشروع في {projectSections.length} قطاعات</>
                )}
              </span>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="font-medium text-emerald-600 underline-offset-4 hover:underline"
                >
                  مسح الكل
                </button>
              )}
            </div>
          </div>

          {/* Filter chips */}
          <div className="mt-5 flex flex-wrap gap-2.5">
            {projectSections.map((section) => {
              const isActive = activeSections.includes(section.id);
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => toggleSection(section.id)}
                  aria-pressed={isActive}
                  className={`
                    group flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium
                    transition-all duration-200
                    ${
                      isActive
                        ? "border-emerald-500 bg-emerald-500 text-white shadow-sm shadow-emerald-200"
                        : "border-slate-200 bg-white text-slate-600 hover:border-emerald-300 hover:text-emerald-700"
                    }
                  `}
                >
                  <span
                    className={`text-xs tabular-nums ${
                      isActive ? "text-emerald-100" : "text-slate-400"
                    }`}
                  >
                    {section.label}
                  </span>
                  {section.title}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================
          PROJECT SECTIONS
      ========================== */}

      {visibleSections.length === 0 && (
        <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:px-8 lg:px-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-slate-200 bg-slate-50">
            <svg
              className="h-6 w-6 text-slate-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-4.35-4.35M18 10.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
              />
            </svg>
          </div>
          <h3 className="mt-6 text-xl font-bold text-slate-900">
            لا توجد نتائج مطابقة
          </h3>
          <p className="mt-2 text-sm text-slate-500">
            جرّب كلمة بحث مختلفة أو امسح الفلاتر المختارة.
          </p>
          <button
            type="button"
            onClick={clearFilters}
            className="mt-6 rounded-xl border border-emerald-500 bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
          >
            مسح البحث والفلاتر
          </button>
        </div>
      )}

      {visibleSections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="border-b border-slate-200"
        >
          <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-36">
            {/* Section Header */}
            <div className="mb-16 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
              <div>
                <p className="text-sm font-bold tracking-[0.3em] text-emerald-600">
                  {section.label}
                </p>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
                  {section.subtitle}
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  {section.title}
                </h2>
                <p className="mt-6 max-w-3xl text-base leading-8 text-slate-500 sm:text-lg">
                  {section.description}
                </p>
              </div>
            </div>

  
            {/* =========================
                PROJECTS
            ========================== */}
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Selected Projects
                </p>
                <h3 className="mt-2 text-2xl font-bold text-slate-950">
                  نماذج من المشروعات
                </h3>
              </div>
              <p className="text-sm text-slate-400">
                {section.projects.length} مشروع
              </p>
            </div>

            {/* Project Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {section.projects.map((project, index) => (
                <article
                  key={`${section.id}-${project.name}-${index}`}
                  className="
                    group relative overflow-hidden rounded-2xl border border-slate-200
                    bg-white p-7 transition-all duration-300
                    hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-slate-200/50
                  "
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-[0.2em] text-slate-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-emerald-400 opacity-50 transition-opacity group-hover:opacity-100" />
                  </div>

                  <h4 className="mt-8 text-xl font-bold leading-8 text-slate-900">
                    {project.name}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {project.location}
                  </p>

                  <div className="mt-7 border-t border-slate-100 pt-5">
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-400">
                      Scope
                    </p>
                    <p className="mt-2 text-sm font-medium leading-6 text-slate-700">
                      {project.work}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full" />
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
};

export default Projects;
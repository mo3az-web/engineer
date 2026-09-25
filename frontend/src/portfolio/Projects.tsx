import { useMemo, useState } from "react";
import { projectSections } from "../Data/Data";

const totalProjectsCount = projectSections.reduce(
  (sum, section) => sum + section.projects.length,
  0
);

const normalize = (value: string) =>
  value
    .toLowerCase()
    .replace(/[\u064B-\u065F\u0670]/g, "")
    .replace(/[إأآا]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .trim();

const Projects = () => {
  const [query, setQuery] = useState("");
  const [activeSections, setActiveSections] = useState<string[]>([]);

  const toggleSection = (id: string) => {
    setActiveSections((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
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
          activeSections.length === 0 ||
          activeSections.includes(section.id)
      )
      .map((section) => {
        if (!q) return section;

        const sectionMatches =
          normalize(section.title).includes(q) ||
          normalize(section.subtitle).includes(q);

        const projects = section.projects.filter(
          (project) =>
            normalize(project.name).includes(q) ||
            normalize(project.location).includes(q) ||
            normalize(project.work).includes(q)
        );

        return {
          ...section,
          projects: sectionMatches ? section.projects : projects,
        };
      })
      .filter((section) => section.projects.length > 0);

    return {
      visibleSections: sections,
      resultCount: sections.reduce(
        (sum, section) => sum + section.projects.length,
        0
      ),
    };
  }, [query, activeSections]);

  const hasFilters =
    query.trim() !== "" || activeSections.length > 0;

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative min-h-[80vh] overflow-hidden border-b border-white/10">

        {/* Background Image */}
        <img
          src="/projects.jpeg"
          alt="Engineering Projects"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl items-center px-6 py-28 sm:px-8 lg:px-12 lg:py-36">
          <div className="max-w-4xl">

            {/* Label */}
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-blue-400" />

              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                Engineering Portfolio
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-8xl">
              مشروعاتنا
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-lg leading-9 text-white/70">
              سجل من المشروعات الهندسية المتنوعة التي شملت التصميم،
              والاستشارات، والرسومات التنفيذية، والإشراف على التنفيذ في
              مصر والمملكة العربية السعودية.
            </p>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap items-center gap-10">

              <div>
                <p className="text-4xl font-bold text-white">
                  35+
                </p>

                <p className="mt-2 text-sm text-white/50">
                  عامًا من الخبرة
                </p>
              </div>

              <div className="h-14 w-px bg-white/20" />

              <div>
                <p className="text-4xl font-bold text-white">
                  300+
                </p>

                <p className="mt-2 text-sm text-white/50">
                  مشروع منفذ
                </p>
              </div>

              <div className="h-14 w-px bg-white/20" />

              <div>
                <p className="text-4xl font-bold text-white">
                  09
                </p>

                <p className="mt-2 text-sm text-white/50">
                  قطاعات هندسية
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 z-[1] h-32 w-full bg-gradient-to-t from-black/30 to-transparent" />
      </section>

      {/* ================= SEARCH ================= */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8 lg:px-12">

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center">

            {/* Search Input */}
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ابحث عن مشروع، موقع، أو نوع عمل..."
              dir="rtl"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
            />

            {/* Result Count */}
            <div className="flex shrink-0 items-center gap-4 text-sm text-slate-500">
              <span>
                {hasFilters ? (
                  <>
                    <span className="font-semibold text-blue-600">
                      {resultCount}
                    </span>{" "}
                    من {totalProjectsCount} مشروع
                  </>
                ) : (
                  <>
                    {totalProjectsCount} مشروع في{" "}
                    {projectSections.length} قطاعات
                  </>
                )}
              </span>

              {hasFilters && (
                <button
                  onClick={clearFilters}
                  className="font-medium text-blue-600 hover:underline"
                >
                  مسح الكل
                </button>
              )}
            </div>

          </div>

          {/* Filters */}
          <div className="mt-5 flex flex-wrap gap-2">
            {projectSections.map((section) => {
              const active = activeSections.includes(section.id);

              return (
                <button
                  key={section.id}
                  onClick={() => toggleSection(section.id)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    active
                      ? "border-blue-500 bg-blue-500 text-white"
                      : "border-slate-200 bg-white text-slate-600 hover:border-blue-400 hover:text-blue-600"
                  }`}
                >
                  {section.title}
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">

          {visibleSections.length === 0 ? (

            /* No Results */
            <div className="py-24 text-center">
              <h2 className="text-2xl font-bold text-black">
                لا توجد نتائج مطابقة
              </h2>

              <p className="mt-3 text-slate-500">
                جرّب كلمة بحث مختلفة أو امسح الفلاتر.
              </p>

              <button
                onClick={clearFilters}
                className="mt-6 rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                مسح البحث والفلاتر
              </button>
            </div>

          ) : (

            <div className="space-y-24">

              {visibleSections.map((section) => (
                <div key={section.id}>

                  {/* Section Header */}
                  <div className="mb-10">

                    <div className="flex items-center gap-3">
                      <span className="h-px w-10 bg-blue-500" />

                      <span className="text-sm font-semibold text-blue-600">
                        {section.label}
                      </span>
                    </div>

                    <h2 className="mt-4 text-4xl font-bold text-black">
                      {section.title}
                    </h2>

                    <p className="mt-3 max-w-2xl text-slate-500">
                      {section.subtitle}
                    </p>

                  </div>

                  {/* Projects Grid */}
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {section.projects.map((project, index) => (

                      <article
                        key={`${section.id}-${project.name}-${index}`}
                        dir="rtl"
                        className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
                      >

                        {/* Project Number */}
                        <span className="text-5xl font-black text-slate-100">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <div className="mt-6">

                          {/* Project Name */}
                          <h3 className="text-2xl font-bold leading-tight text-black">
                            {project.name}
                          </h3>

                          {/* Location */}
                          <p className="mt-4 text-sm text-slate-500">
                            {project.location}
                          </p>

                          {/* Scope */}
                          <div className="mt-6 border-t border-slate-100 pt-5">

                            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                              Scope of Work
                            </p>

                            <p className="mt-2 text-sm leading-7 text-slate-600">
                              {project.work}
                            </p>

                          </div>

                        </div>

                        {/* Bottom Accent */}
                        <div className="absolute bottom-0 right-0 h-1 w-full bg-blue-500 transition-all duration-300 group-hover:h-1.5" />
                      </article>

                    ))}

                  </div>
                </div>
              ))}

            </div>

          )}

        </div>
      </section>
    </>
  );
};

export default Projects;
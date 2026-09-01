
import { motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
const fadeUp: Variants = { hidden: { opacity: 0, y: 60, }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut", }, }, };

/* =========================
   TYPEWRITER
========================= */

const Typewriter = ({
  text = "",
  speed = 70,
}: {
  text?: string;
  speed?: number;
}) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText("");

    if (!text) return;

    let index = 0;

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span>
      {displayedText}
      <span className="ml-1 inline-block animate-pulse text-emerald-500">
        |
      </span>
    </span>
  );
};


/* =========================
   ANIMATED SECTION
========================= */

const AnimatedSection = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.25,
      }}
      className="flex min-h-[80vh] items-center lg:min-h-screen"
    >
      <div className="w-full max-w-2xl">
        {children}
      </div>
    </motion.div>
  );
};


const AboutEng = () => {
  return (
    <section
      className="
        [background-image:linear-gradient(#e2e8f0_1px,transparent_1px),linear-gradient(90deg,#e2e8f0_1px,transparent_1px)]
        [background-size:60px_60px]
        text-slate-900
      "
    >
      <div className="w-full px-5 sm:px-8 lg:px-16 xl:px-24 2xl:px-32">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(420px,0.8fr)_minmax(520px,1.2fr)] xl:gap-24 2xl:gap-32">

          {/* =========================
              LEFT - STICKY IMAGE
          ========================== */}

          <div className="relative order-1">
            <div className="sticky top-0 flex h-screen items-center justify-start">

              <div className="relative flex w-full items-center justify-center overflow-hidden rounded-2xl bg-slate-100 lg:h-[78vh] xl:h-[80vh]">

                <img
                  src="/eng.jpeg"
                  alt="أشرف عبد الحميد طه"
                  className="
                    h-auto w-auto max-h-[65vh] max-w-full
                    object-contain sm:max-h-[70vh]
                    lg:max-h-[74vh] xl:max-h-[76vh]
                  "
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">

                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400 sm:text-sm">
                    Mechanical Engineer
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl xl:text-3xl">
                    أشرف عبد الحميد طه
                  </h3>

                </div>

              </div>
            </div>
          </div>


          {/* =========================
              RIGHT - SCROLLING CONTENT
          ========================== */}

          <div className="order-2 py-10 sm:py-16 lg:py-32">


            {/* =========================
                INTRO
            ========================== */}

            <AnimatedSection>

              <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-emerald-600">
                Engineering Consultant
              </p>

              <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-7xl">
                <Typewriter
                  text="أشرف عبد الحميد طه"
                  speed={80}
                />
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:mt-8 sm:text-xl sm:leading-9">

                <Typewriter
                  text="مهندس استشاري بخبرة ممتدة في مجالات الهندسة الميكانيكية، التبريد والتكييف، المحطات، والتخطيط والهندسة الصناعية ومكافحة الحريق."
                  speed={25}
                />

              </p>

              <div className="mt-8 h-px w-20 bg-emerald-500 sm:mt-10 sm:w-24" />

              <p className="mt-5 text-xs text-slate-400 sm:text-sm">
                Mechanical Engineering • Consulting • Fire Protection
              </p>

            </AnimatedSection>


            {/* =========================
                CAREER
            ========================== */}

            <AnimatedSection>

              <p className="text-sm uppercase tracking-[0.25em] text-emerald-600">
                Career
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">

                <Typewriter
                  text="مسيرة مهنية في الهندسة"
                  speed={60}
                />

              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600 sm:mt-8 sm:text-lg sm:leading-9">

                <Typewriter
                  text="بدأ مسيرته المهنية كضابط مهندس بالقوات المسلحة المصرية ضمن الهيئة الهندسية وسلاح الأشغال العسكرية، حيث اكتسب خبرة عملية واسعة في المجالات الهندسية والتنفيذية."
                  speed={22}
                />

              </p>

              <p className="mt-5 text-base leading-8 text-slate-600 sm:mt-6 sm:text-lg sm:leading-9">

                <Typewriter
                  text="ويشغل حاليًا منصب المدير العام للمركز الهندسي للكهروميكانيكا، مع خبرة متخصصة في الأعمال الهندسية والاستشارات الفنية."
                  speed={22}
                />

              </p>

              <div className="mt-8 grid grid-cols-2 gap-5 sm:mt-10 sm:gap-6">

                <div>

                  <p className="text-2xl font-bold text-slate-900 sm:text-3xl">
                    1988
                  </p>

                  <p className="mt-2 text-xs text-slate-400 sm:text-sm">
                    سنة التخرج
                  </p>

                </div>

                <div>

                  <p className="text-2xl font-bold text-slate-900 sm:text-3xl">
                    30+
                  </p>

                  <p className="mt-2 text-xs text-slate-400 sm:text-sm">
                    عامًا من الخبرة
                  </p>

                </div>

              </div>

            </AnimatedSection>


            {/* =========================
                EDUCATION
            ========================== */}

            <AnimatedSection>

              <p className="text-sm uppercase tracking-[0.25em] text-emerald-600">
                Education
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">

                <Typewriter
                  text="الخلفية العلمية"
                  speed={60}
                />

              </h2>

              <div className="mt-8 border-r border-slate-200 pr-5 sm:mt-10 sm:pr-6">

                <p className="text-sm text-emerald-600">
                  جامعة المنصورة
                </p>

                <h3 className="mt-2 text-xl font-semibold text-slate-900 sm:text-2xl">
                  كلية الهندسة
                </h3>

                <p className="mt-3 text-sm text-slate-600 sm:text-base">
                  قسم ميكانيكا قوى
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  تاريخ التخرج — 1988
                </p>

              </div>


              <div className="mt-8 border-r border-slate-200 pr-5 sm:mt-10 sm:pr-6">

                <p className="text-sm text-emerald-600">
                  الدراسات العليا
                </p>

                <h3 className="mt-2 text-xl font-semibold text-slate-900 sm:text-2xl">
                  هندسة التبريد والتكييف
                </h3>

                <p className="mt-3 text-sm text-slate-600 sm:text-base">
                  دبلوم هندسة التبريد والتكييف
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  جامعة المنصورة — 1998
                </p>

              </div>

            </AnimatedSection>


            {/* =========================
                CONSULTANCY
            ========================== */}

            <AnimatedSection>

              <p className="text-sm uppercase tracking-[0.25em] text-emerald-600">
                Consultancy
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">

                <Typewriter
                  text="الاعتمادات والاستشارات الهندسية"
                  speed={55}
                />

              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600 sm:mt-8 sm:text-lg sm:leading-9">

                <Typewriter
                  text="يتمتع بخبرة استشارية معتمدة في عدد من المجالات الهندسية المتخصصة، تشمل هندسة القوى والمحطات، التبريد والتكييف، والتخطيط والهندسة الصناعية ومكافحة الحريق."
                  speed={22}
                />

              </p>

              <div className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6">

                  <p className="text-sm text-emerald-600">
                    08 / 04 / 2004
                  </p>

                  <h3 className="mt-2 text-lg font-semibold text-slate-900 sm:text-xl">
                    استشاري هندسة القوى والمحطات
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    تخصص التكييف والتبريد
                  </p>

                </div>


                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6">

                  <p className="text-sm text-emerald-600">
                    23 / 05 / 2016
                  </p>

                  <h3 className="mt-2 text-lg font-semibold text-slate-900 sm:text-xl">
                    استشاري التخطيط والهندسة الصناعية
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    تخصص مكافحة الحريق
                  </p>

                </div>

              </div>

            </AnimatedSection>


            {/* =========================
                SYNDICATE
            ========================== */}

            <AnimatedSection>

              <p className="text-sm uppercase tracking-[0.25em] text-emerald-600">
                Engineers Syndicate
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">

                <Typewriter
                  text="نقابة المهندسين"
                  speed={60}
                />

              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600 sm:mt-8 sm:text-lg sm:leading-9">

                <Typewriter
                  text="مقيد بنقابة المهندسين المصرية ضمن الشعبة الميكانيكية، ويحمل اعتمادًا استشاريًا في عدد من التخصصات الهندسية."
                  speed={25}
                />

              </p>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:mt-10 sm:p-8">

                <p className="text-sm text-slate-500">
                  رقم القيد
                </p>

                <p className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  28 / 56688
                </p>

                <div className="my-6 h-px bg-slate-200 sm:my-8" />

                <p className="text-sm text-slate-500">
                  رقم القيد الاستشاري
                </p>

                <p className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  3 / 1089
                </p>

              </div>

            </AnimatedSection>


            {/* =========================
                AWARDS
            ========================== */}

            <AnimatedSection>

              <p className="text-sm uppercase tracking-[0.25em] text-emerald-600">
                Recognition
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">

                <Typewriter
                  text="التكريمات والشهادات"
                  speed={60}
                />

              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600 sm:mt-8 sm:text-lg sm:leading-9">

                <Typewriter
                  text="حصل على الدكتوراه الفخرية في الاستشارات العلمية وتكنولوجيا المعلومات تقديرًا لمسيرته وخبراته في المجالات الهندسية والاستشارية."
                  speed={25}
                />

              </p>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:mt-10 sm:p-8">

                <p className="text-3xl font-bold text-slate-900 sm:text-4xl">
                  29
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  يوليو 2019
                </p>

                <p className="mt-5 text-lg font-medium text-slate-900 sm:mt-6 sm:text-xl">
                  الدكتوراه الفخرية في الاستشارات العلمية وتكنولوجيا المعلومات
                </p>

              </div>

            </AnimatedSection>


            {/* =========================
                OFFICE
            ========================== */}

            <AnimatedSection>

              <p className="text-sm uppercase tracking-[0.25em] text-emerald-600">
                Engineering Office
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">

                <Typewriter
                  text="المكتب الاستشاري"
                  speed={60}
                />

              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600 sm:mt-8 sm:text-lg sm:leading-9">

                <Typewriter
                  text="يمتد النشاط الاستشاري ليشمل تقديم الخدمات الهندسية المتخصصة في مجالات التصميم والتخطيط والاستشارات الكهروميكانيكية وأنظمة مكافحة الحريق."
                  speed={25}
                />

              </p>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:mt-10 sm:p-8">

                <p className="text-sm text-slate-500">
                  ترخيص مكتب استشاري نوعي
                </p>

                <p className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  رقم 844
                </p>

                <p className="mt-3 text-sm text-slate-500">
                  بتاريخ 13 / 04 / 2016
                </p>

              </div>

            </AnimatedSection>


            {/* =========================
                END
            ========================== */}

            <AnimatedSection>

              <p className="text-sm uppercase tracking-[0.25em] text-emerald-600">
                Expertise & Experience
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">

                <Typewriter
                  text="خبرة هندسية تمتد عبر عقود"
                  speed={60}
                />

              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600 sm:mt-8 sm:text-lg sm:leading-9">

                <Typewriter
                  text="خبرة تجمع بين المعرفة الأكاديمية، الخبرة التنفيذية، والاعتماد الاستشاري لتقديم حلول هندسية متخصصة وموثوقة."
                  speed={25}
                />

              </p>

            </AnimatedSection>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEng;

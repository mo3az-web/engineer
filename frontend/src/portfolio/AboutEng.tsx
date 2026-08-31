
const AboutEng = () => {
  return (
    <section className=" [background-image:linear-gradient(#e2e8f0_1px,transparent_1px),linear-gradient(90deg,#e2e8f0_1px,transparent_1px)]
            [background-size:60px_60px] text-slate-900">

  
<div className="w-full px-5 sm:px-8 lg:px-16 xl:px-24 2xl:px-32">

  <div className="grid grid-cols-1 lg:grid-cols-[minmax(420px,0.8fr)_minmax(520px,1.2fr)] gap-12 xl:gap-24 2xl:gap-32">

          {/* =========================
              LEFT - STICKY IMAGE
          ========================== */}
       <div className="relative order-1">
         <div className="sticky top-0 flex h-screen items-center justify-start">
             <div className=" relative flex w-full items-center justify-center overflow-hidden rounded-2xl bg-slate-100 lg:h-[78vh] xl:h-[80vh] " >
                 <img src="/eng.jpeg"
                  alt="أشرف عبد الحميد طه" 
                  className=" h-auto w-auto max-h-[65vh] max-w-full object-contain sm:max-h-[70vh] lg:max-h-[74vh] xl:max-h-[76vh] " />
                   {/* Gradient */} 
                   <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" /> 
                   {/* Image Info */} <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8"> <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400 sm:text-sm"> Mechanical Engineer </p> <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl xl:text-3xl"> أشرف عبد الحميد طه </h3> </div> </div> </div> </div>

          {/* =========================
              RIGHT - SCROLLING CONTENT
          ========================== */}
       <div className="order-2 py-10 sm:py-16 lg:py-32"> {/* INTRO */} <div className="flex min-h-[80vh] items-center lg:min-h-screen"> <div className="w-full max-w-3xl"> <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-emerald-600"> Engineering Consultant </p> <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-7xl"> أشرف عبد الحميد طه </h1> <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:mt-8 sm:text-xl sm:leading-9"> مهندس استشاري بخبرة ممتدة في مجالات الهندسة الميكانيكية، التبريد والتكييف، المحطات، والتخطيط والهندسة الصناعية ومكافحة الحريق. </p> <div className="mt-8 h-px w-20 bg-emerald-500 sm:mt-10 sm:w-24" /> <p className="mt-5 text-xs text-slate-400 sm:text-sm"> Mechanical Engineering • Consulting • Fire Protection </p> </div> </div>


            {/* PROFESSIONAL CAREER */}
            <div className="flex min-h-[80vh] items-center lg:min-h-screen">
              <div className="max-w-2xl">

                <p className="text-sm uppercase tracking-[0.25em] text-emerald-600">
                  Career
                </p>

                <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">
                  مسيرة مهنية في الهندسة
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-600 sm:mt-8 sm:text-lg sm:leading-9">
                  بدأ مسيرته المهنية كضابط مهندس بالقوات المسلحة المصرية
                  ضمن الهيئة الهندسية وسلاح الأشغال العسكرية، حيث اكتسب
                  خبرة عملية واسعة في المجالات الهندسية والتنفيذية.
                </p>

                <p className="mt-5 text-base leading-8 text-slate-600 sm:mt-6 sm:text-lg sm:leading-9">
                  ويشغل حاليًا منصب المدير العام للمركز الهندسي
                  للكهروميكانيكا، مع خبرة متخصصة في الأعمال الهندسية
                  والاستشارات الفنية.
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

              </div>
            </div>


            {/* EDUCATION */}
            <div className="flex min-h-[80vh] items-center lg:min-h-screen">
              <div className="max-w-2xl">

                <p className="text-sm uppercase tracking-[0.25em] text-emerald-600">
                  Education
                </p>

                <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">
                  الخلفية العلمية
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

              </div>
            </div>


            {/* CONSULTANCY */}
            <div className="flex min-h-[80vh] items-center lg:min-h-screen">
              <div className="max-w-2xl">

                <p className="text-sm uppercase tracking-[0.25em] text-emerald-600">
                  Consultancy
                </p>

                <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">
                  الاعتمادات والاستشارات الهندسية
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-600 sm:mt-8 sm:text-lg sm:leading-9">
                  يتمتع بخبرة استشارية معتمدة في عدد من المجالات الهندسية
                  المتخصصة، تشمل هندسة القوى والمحطات، التبريد والتكييف،
                  والتخطيط والهندسة الصناعية ومكافحة الحريق.
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

              </div>
            </div>


            {/* SYNDICATE */}
            <div className="flex min-h-[80vh] items-center lg:min-h-screen">
              <div className="max-w-2xl">

                <p className="text-sm uppercase tracking-[0.25em] text-emerald-600">
                  Engineers Syndicate
                </p>

                <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">
                  نقابة المهندسين
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-600 sm:mt-8 sm:text-lg sm:leading-9">
                  مقيد بنقابة المهندسين المصرية ضمن الشعبة الميكانيكية،
                  ويحمل اعتمادًا استشاريًا في عدد من التخصصات الهندسية.
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

              </div>
            </div>


            {/* AWARDS */}
            <div className="flex min-h-[80vh] items-center lg:min-h-screen">
              <div className="max-w-2xl">

                <p className="text-sm uppercase tracking-[0.25em] text-emerald-600">
                  Recognition
                </p>

                <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">
                  التكريمات والشهادات
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-600 sm:mt-8 sm:text-lg sm:leading-9">
                  حصل على الدكتوراه الفخرية في الاستشارات العلمية
                  وتكنولوجيا المعلومات تقديرًا لمسيرته وخبراته في
                  المجالات الهندسية والاستشارية.
                </p>

                <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:mt-10 sm:p-8">

                  <p className="text-3xl font-bold text-slate-900 sm:text-4xl">
                    29
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    يوليو 2019
                  </p>

                  <p className="mt-5 text-lg font-medium text-slate-900 sm:mt-6 sm:text-xl">
                    الدكتوراه الفخرية في الاستشارات العلمية
                    وتكنولوجيا المعلومات
                  </p>

                </div>

              </div>
            </div>


            {/* OFFICE */}
            <div className="flex min-h-[80vh] items-center lg:min-h-screen">
              <div className="max-w-2xl">

                <p className="text-sm uppercase tracking-[0.25em] text-emerald-600">
                  Engineering Office
                </p>

                <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">
                  المكتب الاستشاري
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-600 sm:mt-8 sm:text-lg sm:leading-9">
                  يمتد النشاط الاستشاري ليشمل تقديم الخدمات الهندسية
                  المتخصصة في مجالات التصميم والتخطيط والاستشارات
                  الكهروميكانيكية وأنظمة مكافحة الحريق.
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

              </div>
            </div>


            {/* END */}
            <div className="flex min-h-[80vh] items-center lg:min-h-screen">
              <div className="max-w-2xl">

                <p className="text-sm uppercase tracking-[0.25em] text-emerald-600">
                  Expertise & Experience
                </p>

                <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  خبرة هندسية
                  <br />
                  تمتد عبر عقود
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-600 sm:mt-8 sm:text-lg sm:leading-9">
                  خبرة تجمع بين المعرفة الأكاديمية، الخبرة التنفيذية،
                  والاعتماد الاستشاري لتقديم حلول هندسية متخصصة
                  وموثوقة.
                </p>

              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutEng;

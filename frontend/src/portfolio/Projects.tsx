import React from "react";

const projectSections = [
  {
    id: "commercial",
    label: "01",
    title: "المولات والمنشآت التجارية",
    subtitle: "Commercial Projects",
    description:
      "مجموعة من المشروعات التجارية التي شملت التصميم والاستشارات الهندسية والإشراف على التنفيذ.",
    modelLabel: "3D COMMERCIAL MODEL",
    projects: [
      {
        name: "جراند مول",
        location: "التجمع الخامس – القاهرة الجديدة",
        work: "تصميم وإشراف ورسومات تنفيذية",
      },
      {
        name: "المول التجاري",
        location: "المنصورة",
        work: "تصميم وإشراف",
      },
      {
        name: "مول الجامعة بلازا",
        location: "المنصورة",
        work: "تصميم وإشراف ورسومات تنفيذية",
      },
      {
        name: "مول سيتي بلازا",
        location: "المنصورة",
        work: "تصميم وإشراف",
      },
      {
        name: "مول الجزيرة بلازا",
        location: "المنصورة",
        work: "تصميم وإشراف",
      },
      {
        name: "سوبر ماركت عوض الله",
        location: "المنصورة",
        work: "تصميم وإشراف",
      },
      {
        name: "سوبر ماركت زمزم",
        location: "الزقازيق",
        work: "تصميم وإشراف",
      },
    ],
  },

  {
    id: "hotels",
    label: "02",
    title: "الفنادق والمنتجعات",
    subtitle: "Hotels & Resorts",
    description:
      "مشروعات فندقية داخل مصر والمملكة العربية السعودية شملت أعمال التصميم والاستشارات والإشراف.",
    modelLabel: "3D HOTEL MODEL",
    projects: [
      {
        name: "فندق أطلانطي",
        location: "شرم الشيخ",
        work: "تصميم وإشراف",
      },
      {
        name: "فندق أم كلثوم",
        location: "الزمالك – القاهرة",
        work: "تصميم ورسومات تنفيذية",
      },
      {
        name: "فندق الجانب",
        location: "الباحة – السعودية",
        work: "تصميم",
      },
      {
        name: "فندق باري الهرم",
        location: "القاهرة",
        work: "تصميم وإشراف",
      },
      {
        name: "فندق مارسيليا",
        location: "الساحل الشمالي – الإسكندرية",
        work: "تصميم ورسومات تنفيذية",
      },
      {
        name: "فندق كدي",
        location: "مكة – السعودية",
        work: "تصميم",
      },
      {
        name: "فندق عبدالله صالح باعطيل",
        location: "مكة – السعودية",
        work: "تصميم",
      },
      {
        name: "فندق جرول",
        location: "مكة – السعودية",
        work: "تصميم",
      },
      {
        name: "فندق محباس الجن",
        location: "مكة – السعودية",
        work: "تصميم",
      },
      {
        name: "فندق الأنوار",
        location: "مكة – السعودية",
        work: "تصميم",
      },
      {
        name: "فندق الحارثي",
        location: "مكة – السعودية",
        work: "تصميم",
      },
      {
        name: "فندق المنصور",
        location: "مكة – السعودية",
        work: "تصميم",
      },
      {
        name: "فندق عريف",
        location: "مكة – السعودية",
        work: "تصميم",
      },
      {
        name: "فندق أم القرى",
        location: "مكة – السعودية",
        work: "تصميم",
      },
    ],
  },

  {
    id: "healthcare",
    label: "03",
    title: "المستشفيات والمراكز الصحية",
    subtitle: "Healthcare Projects",
    description:
      "مشروعات متخصصة في المستشفيات والمراكز الصحية، مع تنفيذ أعمال التصميم والاستشارات والرسومات التنفيذية.",
    modelLabel: "3D HEALTHCARE MODEL",
    projects: [
      {
        name: "مركز الكلى",
        location: "الباحة – السعودية",
        work: "تصميم",
      },
      {
        name: "مبنى الخطيب للعلاج الطبيعي",
        location: "مدينة الرحاب",
        work: "تصميم وإشراف",
      },
      {
        name: "مستشفى عبد الرحمن",
        location: "المعادي الجديدة",
        work: "رسومات تنفيذية وإشراف",
      },
      {
        name: "مستشفى دار الحكمة",
        location: "مدينة نصر – القاهرة",
        work: "إشراف",
      },
      {
        name: "مستشفى دميّاط الدولي",
        location: "دمياط الجديدة",
        work: "تصميم",
      },
      {
        name: "مستشفى النور",
        location: "الجماهيرية الليبية",
        work: "تصميم",
      },
      {
        name: "مستشفى معهد بحوث الكبد",
        location: "الدقهلية",
        work: "تصميم ورسومات تنفيذية",
      },
      {
        name: "مستشفى الصفا",
        location: "كفر الدوار – الإسكندرية",
        work: "تصميم",
      },
      {
        name: "مستشفى العناية العامة",
        location: "الدمام – السعودية",
        work: "تصميم وإشراف",
      },
      {
        name: "مستشفى العجمي",
        location: "الإسكندرية",
        work: "رسومات تنفيذية",
      },
      {
        name: "مستشفى الرياض",
        location: "كفر الشيخ",
        work: "تصميم",
      },
      {
        name: "مستشفى قطور",
        location: "الغربية",
        work: "تصميم",
      },
      {
        name: "مستشفى العرب",
        location: "المنصورة",
        work: "تصميم وإشراف",
      },
      {
        name: "مستشفى الصحة النفسية",
        location: "بورسعيد",
        work: "تصميم وإشراف",
      },
      {
        name: "مستشفى بور فؤاد العام",
        location: "بور فؤاد – مصر",
        work: "رسومات تنفيذية",
      },
    ],
  },

  {
    id: "education",
    label: "04",
    title: "المدارس والكليات والجامعات",
    subtitle: "Education Projects",
    description:
      "مشروعات تعليمية متنوعة شملت المدارس والكليات والمنشآت الجامعية.",
    modelLabel: "3D EDUCATION MODEL",
    projects: [
      {
        name: "المدرسة البريطانية",
        location: "مدينة الرحاب",
        work: "تصميم وإشراف",
      },
      {
        name: "مدرسة جلوري الأمريكية",
        location: "المحلة الكبرى",
        work: "تصميم وإشراف ورسومات تنفيذية",
      },
      {
        name: "مدرسة جلوري الأمريكية",
        location: "التجمع الخامس",
        work: "تصميم ورسومات تنفيذية",
      },
      {
        name: "كلية المجتمع",
        location: "حائل – السعودية",
        work: "تصميم ورسومات تنفيذية",
      },
      {
        name: "كلية العلوم",
        location: "الجوف – السعودية",
        work: "تصميم ورسومات تنفيذية",
      },
      {
        name: "كلية العلوم الطبية",
        location: "الجوف – السعودية",
        work: "تصميم ورسومات تنفيذية",
      },
      {
        name: "كلية التربية النوعية",
        location: "المنصورة",
        work: "تصميم",
      },
      {
        name: "كلية الألسن – جامعة عين شمس",
        location: "القاهرة",
        work: "تطوير جزء من المدرجات",
      },
      {
        name: "مركز الإبصار – كلية الآداب",
        location: "جامعة عين شمس",
        work: "تطوير",
      },
    ],
  },

  {
    id: "factories",
    label: "05",
    title: "المصانع والمنشآت الصناعية",
    subtitle: "Industrial Projects",
    description:
      "مشروعات صناعية شملت المصانع وخطوط الإنتاج والمنشآت والخدمات الميكانيكية والكهروميكانيكية.",
    modelLabel: "3D INDUSTRIAL MODEL",
    projects: [
      {
        name: "مصنع النعا والخميرة",
        location: "الإسكندرية",
        work: "تصميم",
      },
      {
        name: "مصنع الصياد للملابس الجاهزة",
        location: "المحلة الكبرى",
        work: "تصميم وإشراف",
      },
      {
        name: "مصنع كورموباك",
        location: "أبو رجبل – القاهرة",
        work: "تصميم وإشراف",
      },
      {
        name: "مصنع البتروكيماويات",
        location: "شركة سابريا مصر",
        work: "تصميم وإشراف ورسومات تنفيذية",
      },
      {
        name: "مصنع بدر للمنتجات الغذائية",
        location: "مدينة بدر – القاهرة",
        work: "تصميم ورسومات تنفيذية",
      },
      {
        name: "مصنع الراعد للأسمنت",
        location: "الرياض – السعودية",
        work: "تصميم",
      },
    ],
  },

  {
    id: "residential",
    label: "06",
    title: "الأبراج والمجمعات السكنية والإدارية",
    subtitle: "Residential & Administrative",
    description:
      "مجموعة من الأبراج والمجمعات السكنية والإدارية والمشروعات متعددة الاستخدامات.",
    modelLabel: "3D RESIDENTIAL MODEL",
    projects: [
      {
        name: "أبراج المقاولون العرب",
        location: "دمياط",
        work: "تصميم ورسومات تنفيذية",
      },
      {
        name: "أبراج نبيه بن عبدالرحمن سليمان البجر – 720",
        location: "السعودية",
        work: "تصميم",
      },
      {
        name: "أبراج نبيه بن عبدالرحمن سليمان البجر – 780",
        location: "السعودية",
        work: "تصميم",
      },
      {
        name: "برج سكني وفيلات",
        location: "جدة – السعودية",
        work: "تصميم ورسومات تنفيذية",
      },
      {
        name: "برج الأورمان السكني",
        location: "القاهرة",
        work: "تصميم",
      },
      {
        name: "المبنى الإداري لمدينة مدينتي",
        location: "القاهرة",
        work: "تصميم ورسومات تنفيذية",
      },
      {
        name: "المبنى الإداري لمدينة الرحاب",
        location: "القاهرة",
        work: "تصميم ورسومات تنفيذية",
      },
      {
        name: "عمارة تجارية مكتبية",
        location: "حي الربوة – الرياض",
        work: "تصميم وتنفيذ",
      },
      {
        name: "عمارة فتاح الإحساء",
        location: "الإحساء – السعودية",
        work: "تصميم",
      },
      {
        name: "عمارة عبدالله موسى",
        location: "الدمام – السعودية",
        work: "تصميم",
      },
      {
        name: "برج خالد العريف",
        location: "الدمام – السعودية",
        work: "تصميم",
      },
      {
        name: "مجمع سكني شامل",
        location: "الدمام – السعودية",
        work: "تصميم ورسومات تنفيذية",
      },
      {
        name: "مجمع سكني وإداري تجاري",
        location: "الخبر – السعودية",
        work: "تصميم",
      },
      {
        name: "مجمع سكني وإداري تجاري",
        location: "القطيف – السعودية",
        work: "تصميم",
      },
    ],
  },

  {
    id: "villas",
    label: "07",
    title: "الفيلات والمنتجعات السكنية",
    subtitle: "Villas & Residences",
    description:
      "مشروعات سكنية خاصة شملت التصميم والاستشارات والرسومات التنفيذية والإشراف على التنفيذ.",
    modelLabel: "3D VILLA MODEL",
    projects: [
      {
        name: "فيلا الحاج محمد أبو حمامة",
        location: "المنصورة",
        work: "تصميم وإشراف ورسومات تنفيذية",
      },
      {
        name: "فيلات A17 / A18 / A21",
        location: "ماي فير – العبور",
        work: "تصميم وإشراف ورسومات تنفيذية",
      },
      {
        name: "فيلا محمد بك قاسم",
        location: "ماي فير – العبور",
        work: "تصميم وإشراف ورسومات تنفيذية",
      },
      {
        name: "فيلا 295",
        location: "منتجع درة العروس – جدة",
        work: "تصميم وإشراف ورسومات تنفيذية",
      },
      {
        name: "مجموعة فيلات سكنية",
        location: "الرحاب ومدينتي والتجمع الخامس",
        work: "تصميم وإشراف ورسومات تنفيذية",
      },
      {
        name: "فيلا درة العروس",
        location: "جدة – السعودية",
        work: "تصميم وإشراف ورسومات تنفيذية",
      },
      {
        name: "فيلا محمد عبد الحق",
        location: "جدة – السعودية",
        work: "تصميم وإشراف ورسومات تنفيذية",
      },
      {
        name: "فيلا فاطمة محمد",
        location: "جدة – السعودية",
        work: "تصميم وإشراف ورسومات تنفيذية",
      },
    ],
  },

  {
    id: "misc",
    label: "08",
    title: "مشروعات هندسية متنوعة",
    subtitle: "Other Projects",
    description:
      "مشروعات متنوعة في مجالات الضيافة والبنوك والمطاعم والمرافق والمنشآت العامة.",
    modelLabel: "3D PROJECT MODEL",
    projects: [
      {
        name: "مجزر الدواجن",
        location: "المنوفية",
        work: "تصميم",
      },
      {
        name: "فرع البنك الدولي",
        location: "المحلة الكبرى",
        work: "تصميم وإشراف ورسومات تنفيذية",
      },
      {
        name: "دار الضيافة",
        location: "جامعة المنصورة",
        work: "تصميم",
      },
      {
        name: "مطعم كوك دور",
        location: "المنصورة",
        work: "تصميم وإشراف ورسومات تنفيذية",
      },
      {
        name: "مطعم العجراوي",
        location: "الرحاب",
        work: "تصميم",
      },
      {
        name: "مطعم فطيرة هدى",
        location: "المنصورة",
        work: "تصميم وإشراف ورسومات تنفيذية",
      },
      {
        name: "مبنى الكروكية",
        location: "نادي الرحاب",
        work: "تصميم وإشراف ورسومات تنفيذية",
      },
      {
        name: "قاعة الاحتفالات",
        location: "مدينة الرحاب",
        work: "تصميم وإشراف ورسومات تنفيذية",
      },
      {
        name: "قاعة احتفالات جراند بابليون",
        location: "المحلة الكبرى",
        work: "تصميم وإشراف ورسومات تنفيذية",
      },
      {
        name: "سينما الجوهرة",
        location: "المحلة الكبرى",
        work: "تصميم وإشراف ورسومات تنفيذية",
      },
      {
        name: "مكتبة مبارك",
        location: "المنصورة",
        work: "تصميم وإشراف ورسومات تنفيذية",
      },
      {
        name: "مسرح الكلية الأمريكية",
        location: "المعادي – القاهرة",
        work: "تصميم وإشراف ورسومات تنفيذية",
      },
      {
        name: "البنك الأهلي المصري",
        location: "الرحاب",
        work: "تصميم وإشراف ورسومات تنفيذية",
      },
      {
        name: "بنك مصر",
        location: "الرحاب",
        work: "تصميم وإشراف ورسومات تنفيذية",
      },
      {
        name: "البنك العقاري العربي",
        location: "العروق",
        work: "تصميم وإشراف ورسومات تنفيذية",
      },
      {
        name: "محطة مياه الرزعة الجديدة",
        location: "بورسعيد",
        work: "تصميم وإشراف ورسومات تنفيذية",
      },
      {
        name: "موقع الشركة المصرية الصينية",
        location: "العين السخنة",
        work: "تصميم وإشراف",
      },
      {
        name: "موقع الشركة المصرية الهندسية",
        location: "العين السخنة",
        work: "تصميم وإشراف",
      },
      {
        name: "مجموعة مساجد",
        location: "مدينة الرحاب – القاهرة",
        work: "تصميم ورسومات تنفيذية",
      },
    ],
  },

  {
    id: "fire-protection",
    label: "09",
    title: "أنظمة مكافحة الحريق",
    subtitle: "Fire Protection Systems",
    description:
      "أعمال الاستشارات الهندسية والتصميم والتطوير لأنظمة مكافحة الحريق والحماية الميكانيكية للمنشآت.",
    modelLabel: "3D FIRE PROTECTION MODEL",
    projects: [
      {
        name: "رفع كفاءة محطة الوقود ضد مخاطر الحريق",
        location: "ميناء دمياط",
        work: "مكافحة الحريق",
      },
      {
        name: "أنظمة الحماية المدنية",
        location: "مشروعات متنوعة",
        work: "تصميم واستشارات",
      },
      {
        name: "أنظمة إنذار الحريق",
        location: "مشروعات متنوعة",
        work: "تصميم واستشارات",
      },
      {
        name: "أنظمة إطفاء الحريق",
        location: "مشروعات متنوعة",
        work: "تصميم واستشارات",
      },
    ],
  },
];

const Projects = () => {
  return (
    <main className="min-h-screen  [background-image:linear-gradient(#e2e8f0_1px,transparent_1px),linear-gradient(90deg,#e2e8f0_1px,transparent_1px)]
            [background-size:60px_60px] text-slate-900">

      {/* =========================
          HERO
      ========================== */}
      <section className="relative overflow-hidden border-b border-slate-200">

        {/* Decorative grid */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.35]
    
          "
        />

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
              والاستشارات، والرسومات التنفيذية، والإشراف على التنفيذ
              في مصر والمملكة العربية السعودية.
            </p>

            <div className="mt-12 flex flex-wrap gap-10">

              <div>
                <p className="text-4xl font-bold text-slate-950">
                  30+
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  عامًا من الخبرة
                </p>
              </div>

              <div className="h-14 w-px bg-slate-200" />

              <div>
                <p className="text-4xl font-bold text-slate-950">
                  09
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  قطاعات هندسية
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================
          PROJECT SECTIONS
      ========================== */}

      {projectSections.map((section) => (

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
                3D MODEL PLACEHOLDER
            ========================== */}

            <div
              className="
                relative
                mb-20
                flex
                h-[420px]
                w-full
                items-center
                justify-center
                overflow-hidden
                rounded-[2rem]
                border
                border-slate-200
                bg-slate-50
                sm:h-[500px]
                lg:h-[620px]
              "
            >

              {/* Decorative corners */}
              <div className="absolute left-6 top-6 h-8 w-8 border-l border-t border-emerald-400/60" />
              <div className="absolute right-6 top-6 h-8 w-8 border-r border-t border-emerald-400/60" />
              <div className="absolute bottom-6 left-6 h-8 w-8 border-b border-l border-emerald-400/60" />
              <div className="absolute bottom-6 right-6 h-8 w-8 border-b border-r border-emerald-400/60" />

              {/* Replace this div with your 3D model */}
              <div className="text-center">

                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">

                  <svg
                    className="h-8 w-8 text-emerald-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 7.5 12 3 3 7.5m18 0v9L12 21l-9-4.5v-9m18 0-9 4.5m0 9v-9m0 0L3 7.5"
                    />
                  </svg>

                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  {section.modelLabel}
                </p>

                <p className="mt-3 text-sm text-slate-400">
                  ضع نموذج الـ 3D هنا
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
                  key={`${section.id}-${index}`}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-7
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-emerald-200
                    hover:shadow-xl
                    hover:shadow-slate-200/50
                  "
                >

                  {/* Number */}
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


                  {/* Hover line */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full" />

                </article>

              ))}

            </div>

          </div>

        </section>

      ))}


      {/* =========================
          FINAL CTA
      ========================== */}



    </main>
  );
};

export default Projects;

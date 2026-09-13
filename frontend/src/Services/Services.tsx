
type Service = {
  title: string;
  description: string;
  number: string;
};

const mechanicalServices: Service[] = [
  {
    title: "أنظمة التكييف والتهوية والتبريد",
    description:
      "تصميم والإشراف على أنظمة التكييف والتهوية والتبريد للمباني والمنشآت المختلفة.",
    number: "01",
  },
  {
    title: "أنظمة مكافحة الحريق",
    description:
      "تصميم والإشراف على أنظمة مكافحة الحريق بما يتناسب مع طبيعة ومتطلبات كل مشروع.",
    number: "02",
  },
  {
    title: "أنظمة الهواء المضغوط",
    description:
      "تصميم شبكات وأنظمة الهواء المضغوط للمشروعات والمنشآت الصناعية.",
    number: "03",
  },
  {
    title: "أنظمة البخار والمياه الساخنة",
    description:
      "تصميم والإشراف على أنظمة البخار والمياه الساخنة وشبكات التوزيع الخاصة بها.",
    number: "04",
  },
  {
    title: "أنظمة المغاسل",
    description:
      "تصميم الأنظمة الميكانيكية الخاصة بالمغاسل وتجهيزاتها.",
    number: "05",
  },
  {
    title: "الأعمال الصحية",
    description:
      "تصميم شبكات الصرف الصحي وشبكات تغذية المياه للمباني والمنشآت.",
    number: "06",
  },
  {
    title: "الأعمال الميكانيكية لحمامات السباحة",
    description:
      "تصميم والإشراف على الأنظمة الميكانيكية الخاصة بحمامات السباحة.",
    number: "07",
  },
  {
    title: "الغازات الطبية",
    description:
      "تصميم أنظمة الغازات الطبية للمستشفيات والمنشآت الطبية المتخصصة.",
    number: "08",
  },
  {
    title: "أنظمة إطفاء الحريق للمباني",
    description:
      "تصميم شبكات وأنظمة إطفاء الحريق للمباني وفقًا لمتطلبات المشروع.",
    number: "09",
  },
  {
    title: "شبكات الري",
    description:
      "تصميم شبكات الري وتوزيع المياه للمساحات والمشروعات المختلفة.",
    number: "10",
  },
];

const electricalServices: Service[] = [
  {
    title: "شبكات الكهرباء للمباني",
    description:
      "تصميم والإشراف على شبكات الكهرباء وأنظمة توزيع الطاقة داخل المباني.",
    number: "01",
  },
  {
    title: "أنظمة إنذار الحريق للمباني",
    description:
      "تصميم أنظمة الكشف والإنذار المبكر عن الحرائق للمباني والمنشآت.",
    number: "02",
  },
  {
    title: "شبكات التليفونات",
    description:
      "تصميم وتنفيذ شبكات الاتصالات الهاتفية داخل المباني والمنشآت.",
    number: "03",
  },
  {
    title: "شبكات الحاسب",
    description:
      "تصميم شبكات الحاسب والبنية التحتية اللازمة للاتصالات والبيانات.",
    number: "04",
  },
  {
    title: "كاميرات المراقبة",
    description:
      "تصميم أنظمة المراقبة بالكاميرات وتوزيعها بما يحقق أفضل تغطية للموقع.",
    number: "05",
  },
  {
    title: "الأنظمة الصوتية",
    description:
      "تصميم الأنظمة الصوتية وأنظمة توزيع الصوت للمباني والمنشآت.",
    number: "06",
  },
  {
    title: "أنظمة الدش المركزي",
    description:
      "تصميم وتنفيذ شبكات وأنظمة استقبال وتوزيع الإشارات التلفزيونية المركزية.",
    number: "07",
  },
];

const ServiceCard = ({
  service,
}: {
  service: Service;
}) => {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-600/10">
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3v18" />
            <path d="M3 12h18" />
            <circle cx="12" cy="12" r="8" />
          </svg>
        </div>

        <span className="text-sm font-medium text-black/20">
          {service.number}
        </span>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-bold leading-8 text-black">
          {service.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-blue-600/70">
          {service.description}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full" />
    </article>
  );
};

const Services = () => {
  return (
    <main className="bg-white text-black">
      {/* Hero */}
      <section className="px-6 pb-24 pt-36 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Our Services
            </p>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
              الحلول الهندسية
              <br />
              <span className="text-blue-600">المتكاملة.</span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-blue-600/70 md:text-xl">
              التصميم والإشراف على الأنظمة الهندسية الكهروميكانيكية،
              والدعم الفني، وإعداد المخططات التنفيذية والاختبارات واختبارات
              الجودة لمختلف المشروعات.
            </p>
          </div>

          <div className="mt-16 h-px bg-black/10" />
        </div>
      </section>

      {/* Mechanical Services */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 grid gap-8 md:grid-cols-[0.8fr_2fr]">
            <div>
              <span className="text-sm font-semibold tracking-[0.2em] text-blue-600">
                01
              </span>

              <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                الأعمال
                <br />
                الميكانيكية
              </h2>
            </div>

            <p className="max-w-2xl self-end text-lg leading-8 text-blue-600/70">
              نقدم حلولًا متكاملة للأعمال والأنظمة الميكانيكية بداية من
              التصميم والدراسات الهندسية وحتى الإشراف والتنفيذ والاختبارات
              وضمان الجودة.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {mechanicalServices.map((service) => (
  <ServiceCard
    key={service.title}
    service={service}
   
  />
))}
          </div>
        </div>
      </section>

      {/* Electrical Services */}
      <section className="bg-gray-50 px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 grid gap-8 md:grid-cols-[0.8fr_2fr]">
            <div>
              <span className="text-sm font-semibold tracking-[0.2em] text-blue-600">
                02
              </span>

              <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                الأعمال
                <br />
                الكهربائية
              </h2>
            </div>

            <p className="max-w-2xl self-end text-lg leading-8 text-blue-600/70">
              تصميم والإشراف على شبكات الكهرباء وأنظمة التيار الخفيف
              والاتصالات وأنظمة الحماية والمراقبة للمباني والمنشآت.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {electricalServices.map((service) => (
              <ServiceCard
                key={service.title}
                service={service}
         
              />
            ))}
          </div>
        </div>
      </section>

      {/* Consultation */}
      <section className="px-6 py-28 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-black px-8 py-16 text-white md:px-16 md:py-20">
            <div className="relative z-10 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                Consultations & Project Management
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
                خبرة هندسية
                <br />
                <span className="text-blue-500">في خدمة مشروعك.</span>
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
                يتم تنفيذ الأعمال بالاستعانة بمهندسين ذوي خبرات كبيرة، مع
                إمكانية التعاون مع المكاتب الاستشارية المتخصصة خارج المكتب
                في بعض المشروعات العملاقة إذا لزم الأمر.
              </p>

              <a
                href="/contact"
                className="mt-9 inline-flex rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                تواصل معنا
              </a>
            </div>

            <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
            <div className="absolute -bottom-40 left-1/2 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
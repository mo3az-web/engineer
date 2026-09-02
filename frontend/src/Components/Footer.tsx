
const Footer = () => {
  return (
    <footer
      id="contact"
      dir="rtl"
      className="relative overflow-hidden bg-slate-950 text-white"
    >
      {/* Decorative Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(#fff 1px, transparent 1px),
            linear-gradient(90deg, #fff 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">

            <div className="mb-6 flex items-center gap-4">

              {/* Logo */}
              <div className="flex h-14 w-34 shrink-0 items-center justify-center rounded-xl ">
                <img src="logo1.png" className="text-2xl font-bold text-emerald-400">
                  
                </img>
              </div>

              <div>
                <h2 className="text-xl font-bold tracking-wide">
                  مركز الاستشارات الهندسية
                </h2>

                <p className="mt-1 text-xs tracking-[0.18em] text-slate-500">
                  ELEC. MEC. ENGINEERING CENTER
                </p>
              </div>

            </div>

            <p className="max-w-xl text-sm leading-8 text-slate-400">
              مركز للاستشارات الهندسية وإدارة المشروعات، يقدم حلولًا هندسية
              متكاملة في مجالات الكهرباء والميكانيكا، مع الالتزام بالدقة
              والجودة وأعلى المعايير الهندسية في تنفيذ وإدارة المشروعات.
            </p>

            {/* Social */}
            <div className="mt-7 flex items-center gap-3">

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-slate-400 transition hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-emerald-400"
              >
                in
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-slate-400 transition hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-emerald-400"
              >
                f
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-slate-400 transition hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-emerald-400"
              >
                IG
              </a>

            </div>
          </div>

          {/* Navigation */}
     

          {/* Services */}
          <div>
            <h3 className="mb-6 text-sm font-semibold tracking-widest text-white">
              خدماتنا
            </h3>

            <ul className="space-y-4 text-sm leading-6 text-slate-400">
              <li>الاستشارات الهندسية</li>
              <li>إدارة المشروعات</li>
              <li>الأعمال الكهربائية</li>
              <li>الأعمال الميكانيكية</li>
              <li>التصميم والإشراف الهندسي</li>
            </ul>
          </div>

        </div>

        {/* Contact Information */}
        <div className="mt-16 border-t border-white/10 pt-10">

          <h3 className="mb-8 text-lg font-semibold text-white">
            بيانات التواصل
          </h3>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

            {/* Consultant */}
            <div>
              <p className="mb-2 text-xs tracking-widest text-slate-500">
                الاستشاري
              </p>

              <p className="text-sm leading-7 text-slate-300">
                م / أشرف عبد الحميد طه
              </p>

              <p className="text-xs text-slate-500">
                استشاري هندسي
              </p>
            </div>

            {/* Phone 1 */}
            <div>
              <p className="mb-2 text-xs tracking-widest text-slate-500">
                الهاتف
              </p>

              <a
                href="tel:01228008588"
                dir="ltr"
                className="block text-sm text-slate-300 transition hover:text-emerald-400"
              >
                01228008588
              </a>

              <a
                href="tel:0502705046"
                dir="ltr"
                className="mt-1 block text-sm text-slate-300 transition hover:text-emerald-400"
              >
                050 2705046
              </a>
            </div>

            {/* Address */}
            <div>
              <p className="mb-2 text-xs tracking-widest text-slate-500">
                العنوان
              </p>

              <p className="text-sm leading-7 text-slate-300">
                شارع الجيش
                <br />
                مدينة المنصورة
              </p>
            </div>

            {/* Fax */}
            <div>
              <p className="mb-2 text-xs tracking-widest text-slate-500">
                الفاكس
              </p>

              <p
                dir="ltr"
                className="text-sm text-slate-300"
              >
                050 2705046
              </p>
            </div>

          </div>

          {/* Emails */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">

            <p className="mb-4 text-xs tracking-widest text-slate-500">
              البريد الإلكتروني
            </p>

            <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:gap-x-8">

              <a
                href="mailto:elec_mech_center10@yahoo.com"
                dir="ltr"
                className="text-sm text-slate-300 transition hover:text-emerald-400"
              >
                elec_mech_center10@yahoo.com
              </a>

              <a
                href="mailto:at_1965@yahoo.com"
                dir="ltr"
                className="text-sm text-slate-300 transition hover:text-emerald-400"
              >
                at_1965@yahoo.com
              </a>

              <a
                href="mailto:ahmedelsheemy2@gmail.com"
                dir="ltr"
                className="text-sm text-slate-300 transition hover:text-emerald-400"
              >
                ahmedelsheemy2@gmail.com
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} مركز الاستشارات الهندسية.
            جميع الحقوق محفوظة.
          </p>

          <p>
            تصميم وتطوير الموقع بدقة واحترافية.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;

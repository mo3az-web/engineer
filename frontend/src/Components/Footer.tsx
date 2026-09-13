
const Footer = () => {
  return (
    <footer
      id="contact"
      dir="rtl"
      className="relative overflow-hidden border-t border-blue-100 bg-white text-black"
    >
      {/* Decorative Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(#2563eb 1px, transparent 1px),
            linear-gradient(90deg, #2563eb 1px, transparent 1px)
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
                <img src="logo1.png" className="text-2xl font-bold text-blue-600">
                  
                </img>
              </div>

              <div>
                <h2 className="text-xl font-bold tracking-wide">
                  مركز الاستشارات الهندسية
                </h2>

                <p className="mt-1 text-xs tracking-[0.18em] text-blue-600">
                  ELEC. MEC. ENGINEERING CENTER
                </p>
              </div>

            </div>

            <p className="max-w-xl text-sm leading-8 text-blue-700">
              مركز للاستشارات الهندسية وإدارة المشروعات، يقدم حلولًا هندسية
              متكاملة في مجالات الكهرباء والميكانيكا، مع الالتزام بالدقة
              والجودة وأعلى المعايير الهندسية في تنفيذ وإدارة المشروعات.
            </p>

        
          </div>

          {/* Navigation */}
     

          {/* Services */}
          <div>
            <h3 className="mb-6 text-sm font-semibold tracking-widest text-black">
              خدماتنا
            </h3>

            <ul className="space-y-4 text-sm leading-6 text-blue-700">
              <li>الاستشارات الهندسية</li>
              <li>إدارة المشروعات</li>
              <li>الأعمال الكهربائية</li>
              <li>الأعمال الميكانيكية</li>
              <li>التصميم والإشراف الهندسي</li>
            </ul>
          </div>

        </div>

        {/* Contact Information */}
        <div className="mt-16 border-t border-blue-100 pt-10">

          <h3 className="mb-8 text-lg font-semibold text-black">
            بيانات التواصل
          </h3>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

            {/* Consultant */}
            <div>
              <p className="mb-2 text-xs tracking-widest text-blue-600">
                الاستشاري
              </p>

              <p className="text-sm leading-7 text-blue-700">
                م / أشرف عبد الحميد طه
              </p>

              <p className="text-xs text-blue-600">
                استشاري هندسي
              </p>
            </div>

            {/* Phone 1 */}
            <div>
              <p className="mb-2 text-xs tracking-widest text-blue-600">
                الهاتف
              </p>

              <a
                href="tel:01228008588"
                dir="ltr"
                className="block text-sm text-blue-700 transition hover:text-blue-600"
              >
                01228008588
              </a>

              <a
                href="tel:0502705046"
                dir="ltr"
                className="mt-1 block text-sm text-blue-700 transition hover:text-blue-600"
              >
                050 2705046
              </a>
            </div>

            {/* Address */}
            <div>
              <p className="mb-2 text-xs tracking-widest text-blue-600">
                العنوان
              </p>

              <p className="text-sm leading-7 text-blue-700">
            شقة 5- عمارة 446 - الهرم - مجمع نصر الدين- القاهرة- جمهورية مصر
العربية.
              </p>
            </div>

            {/* Fax */}
            <div>
              <p className="mb-2 text-xs tracking-widest text-blue-600">
                الفاكس
              </p>

              <p
                dir="ltr"
                className="text-sm text-blue-700"
              >
                050 2705046
              </p>
            </div>

          </div>

          {/* Emails */}
          <div className="mt-8 rounded-2xl border border-blue-100 bg-white p-6">

            <p className="mb-4 text-xs tracking-widest text-blue-600">
              البريد الإلكتروني
            </p>

            <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:gap-x-8">

              <a
                href="mailto:elec_mech_center10@yahoo.com"
                dir="ltr"
                className="text-sm text-blue-700 transition hover:text-blue-600"
              >
                at196518@gmail.com
              </a>

              <a
                href="mailto:at_1965@yahoo.com"
                dir="ltr"
                className="text-sm text-blue-700 transition hover:text-blue-600"
              >
                at_1965@yahoo.com
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-blue-100 pt-6 text-xs text-blue-600 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} مركز الاستشارات الهندسية.
            جميع الحقوق محفوظة.
          </p>

         

        </div>

      </div>
    </footer>
  );
};

export default Footer;

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'

import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'

import { useEffect,useState } from 'react'
const services = [
  {
    name: 'أنظمة مكافحة الحرائق',
    href: '#services',
  },
  {
    name: 'أنظمة إنذار الحريق',
    href: '#services',
  },
  {
    name: 'شبكات مكافحة الحريق',
    href: '#services',
  },
  {
    name: 'أنظمة الإطفاء',
    href: '#services',
  },
]

const navigation = [
  { name: 'الرئيسية', href: '/' },
  { name: 'عن المكتب', href: '/about' },
  { name: 'مشاريعنا', href: '/projects' },
  { name: 'تواصل معنا', href: '/contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
 
  const [scrollY, setScrollY] = useState(0)

useEffect(() => {
  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  window.addEventListener('scroll', handleScroll)

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
}, [])
  return (
   <header
  dir="rtl"
  className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-gray-950/90 text-white backdrop-blur-md"
>
      {/* ================= Announcement Bar ================= */}
      {/* ================= Main Navbar ================= */}
      <nav
        aria-label="التنقل الرئيسي"
        className="relative mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >

        {/* Right Side - Navigation */}
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-start lg:gap-x-8">

          <a
            href="/"
            className="text-sm font-semibold text-white transition hover:text-red-400"
          >
            الرئيسية
          </a>

          {/* Services Dropdown */}
          <div className="relative group">

            <button
              type="button"
              className="flex items-center gap-1.5 text-sm font-semibold text-gray-300 transition hover:text-white"
            >
              خدماتنا

              <ChevronDownIcon className="size-4 transition group-hover:rotate-180" />
            </button>

            <div className="invisible absolute right-0 top-full z-50 mt-4 w-64 translate-y-2 rounded-2xl border border-white/10 bg-gray-900 p-2 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

              {services.map((service) => (
                <a
                  key={service.name}
                  href={service.href}
                  className="block rounded-xl px-4 py-3 text-sm text-gray-300 transition hover:bg-white/5 hover:text-white"
                >
                  {service.name}
                </a>
              ))}

            </div>

          </div>

          <a
            href="about"
            className="text-sm font-semibold text-gray-300 transition hover:text-white"
          >
            عن المكتب
          </a>

          <a
            href="projects"
            className="text-sm font-semibold text-gray-300 transition hover:text-white"
          >
            مشاريعنا
          </a>

        </div>


        {/* ================= Center Logo ================= */}
<a
  href="/"
  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
>
  <div className="relative w-40 h-32">

    {/* الترس */}
    <img
      src="/gear.png"
      alt=""
      className="
        absolute
        right-6/39
        top-4/15
        z-1000
        w-27

        md:w-27
        md:top-3/12
        md:right-2/13
         lg:w-27
        lg:top-4/15
        lg:right-2/13
      "
      style={{
        transform: `rotate(${scrollY * 0.8}deg)`,
      }}
    />

    {/* اللوجو */}
    <img
      src="/logo.png"
      alt="المركز الهندسي للكهروميكانيكا"
      className="relative top-6    z-10 w-50 object-contain "
    />

  </div>
</a>


        {/* ================= Left Side ================= */}
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-x-6">

          <a
            href="/contact"
            className="rounded-full bg-red-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-500 hover:shadow-red-600/30"
          >
            تواصل معنا
          </a>

        </div>


        {/* ================= Mobile Button ================= */}
        <div className="flex lg:hidden">

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="rounded-lg p-2.5 text-gray-300 transition hover:bg-white/10 hover:text-white"
            aria-label="فتح القائمة"
          >
            <Bars3Icon className="size-7" />
          </button>

        </div>

      </nav>


      {/* ================= Mobile Menu ================= */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="relative z-50 lg:hidden"
      >

        {/* Overlay */}
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          aria-hidden="true"
        />

        <DialogPanel className="fixed inset-y-0 right-0 w-full max-w-sm overflow-y-auto border-l border-white/10 bg-gray-950 px-6 py-6 shadow-2xl">

          {/* Mobile Header */}
          <div className="flex items-center justify-between">

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg p-2 text-gray-400 transition hover:bg-white/10 hover:text-white"
              aria-label="إغلاق القائمة"
            >
              <XMarkIcon className="size-7" />
            </button>

            <img
              src="/logo.png"
              alt="المركز الهندسي للكهروميكانيكا"
              className="w-20"
            />

          </div>


          {/* Mobile Links */}
          <div className="mt-10">

            <div className="space-y-2">

              {navigation.slice(0, 1).map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-xl px-4 py-3.5 text-base font-semibold text-white transition hover:bg-white/5"
                >
                  {item.name}
                </a>
              ))}


              {/* Services */}
              <Disclosure>

                {({ open }) => (
                  <div>

                    <DisclosureButton className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold text-white transition hover:bg-white/5">

                      <span>خدماتنا</span>

                      <ChevronDownIcon
                        className={`size-5 transition-transform ${
                          open ? 'rotate-180' : ''
                        }`}
                      />

                    </DisclosureButton>


                    <DisclosurePanel className="mt-1 space-y-1 pr-4">

                      {navigation .map((navigationItem) => (
                        <a
                          key={navigationItem.name}
                          href={navigationItem.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block rounded-lg px-4 py-3 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
                        >
                          {navigationItem.name}
                        </a>
                      ))}

                    </DisclosurePanel>

                  </div>
                )}

              </Disclosure>


              {navigation.slice(1).map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-xl px-4 py-3.5 text-base font-semibold text-white transition hover:bg-white/5"
                >
                  {item.name}
                </a>
              ))}

            </div>


            {/* Mobile CTA */}
            <div className="mt-8 border-t border-white/10 pt-8">

              <a
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-xl bg-red-600 px-5 py-3.5 text-center text-sm font-bold text-white transition hover:bg-red-500"
              >
                تواصل معنا
              </a>

            </div>

          </div>

        </DialogPanel>

      </Dialog>

    </header>
  )
}


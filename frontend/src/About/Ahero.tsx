
const Ahero = () => {
  return (
    <section className="relative min-h-screen pt-24 overflow-hidden flex items-center justify-center">

      {/* ================= BACKGROUND DESIGN ================= */}

      {/* Grid */}
      <div
        className="
          absolute inset-0
          opacity-[0.055]
          bg-[linear-gradient(to_right,rgba(255,255,255,0.7)_1px,transparent_1px),
              linear-gradient(to_bottom,rgba(255,255,255,0.7)_1px,transparent_1px)]
          bg-[size:65px_65px]
        "
      />

      {/* Soft blue glow */}
      <div
        className="
          absolute
          top-1/3
          left-1/2
          -translate-x-1/2
          w-[600px]
          h-[600px]
          rounded-full
          bg-blue-700/20
          blur-[120px]
        "
      />

      {/* Large decorative circle */}
      <div
        className="
          absolute
          -right-40
          -top-40
          w-[550px]
          h-[550px]
          rounded-full
          border
          border-blue-300/10
        "
      />

      <div
        className="
          absolute
          -right-20
          -top-20
          w-[390px]
          h-[390px]
          rounded-full
          border
          border-blue-200/[0.07]
        "
      />

      {/* Left vertical engineering line */}
      <div className="absolute left-8 md:left-14 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center">

        <div className="h-28 w-px bg-blue-200/20" />

        <div className="my-4 w-2 h-2 border border-blue-200/40 rotate-45" />

        <div className="h-24 w-px bg-blue-200/20" />

      </div>


      {/* Right decorative line */}
      <div className="absolute right-8 md:right-14 top-1/3 hidden md:block">

        <div className="flex items-center gap-3">
          <span className="w-10 h-px bg-blue-200/20" />

          <span className="text-[9px] tracking-[0.4em] text-blue-200/40">
            ABOUT
          </span>
        </div>

        <div className="mt-3 ml-14 w-px h-20 bg-blue-200/10" />

      </div>


      {/* ================= CONTENT ================= */}

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 text-center">

        {/* Office name */}

        <div className="relative z-30">

          <div className="flex items-center justify-center gap-4 mb-5">

            <span className="w-12 h-px bg-blue-300/30" />

            <p className="text-sm md:text-base tracking-[0.4em] text-blue-200 uppercase font-medium">
              Engineering Office
            </p>

            <span className="w-12 h-px bg-blue-300/30" />

          </div>


          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            المكتب الهندسي للكهروميكانيكا
          </h1>


          <p  className="mt-5 text-blue-100/75 text-lg md:text-xl font-light">
            للاستشارات الهندسية وأعمال الكهروميكانيكا
          </p>

        </div>


        {/* ================= ENGINEER ================= */}

        <div className="relative mt-8 md:mt-12 h-[550px] md:h-[640px] flex items-end justify-center">


          {/* Technical circle behind engineer */}

          <div
            className="
              absolute
              bottom-8
              left-1/2
              -translate-x-1/2
              w-[350px]
              h-[350px]
              md:w-[480px]
              md:h-[480px]
              rounded-full
              border
              border-blue-200/10
            "
          />


          {/* Dashed circle */}

          <div
            className="
              absolute
              bottom-20
              left-1/2
              -translate-x-1/2
              w-[290px]
              h-[290px]
              md:w-[410px]
              md:h-[410px]
              rounded-full
              border
              border-dashed
              border-blue-300/10
            "
          />


          {/* Horizontal technical line */}

          <div
            className="
              absolute
              bottom-[48%]
              left-1/2
              -translate-x-1/2
              w-[600px]
              max-w-[85%]
              h-px
              bg-blue-200/[0.07]
            "
          />


          {/* Vertical technical line */}

          <div
            className="
              absolute
              bottom-0
              left-1/2
              -translate-x-1/2
              h-full
              w-px
              bg-blue-200/[0.045]
            "
          />


          {/* Corner markers */}

          <div className="absolute bottom-32 left-[15%] md:left-[25%] w-6 h-6 border-l border-b border-blue-200/20" />

          <div className="absolute bottom-32 right-[15%] md:right-[25%] w-6 h-6 border-r border-b border-blue-200/20" />


          {/* Small technical points */}

          <div className="absolute bottom-[48%] left-[18%] md:left-[27%] w-1.5 h-1.5 rounded-full bg-blue-300/50" />

          <div className="absolute bottom-[40%] right-[18%] md:right-[27%] w-1.5 h-1.5 rounded-full bg-blue-300/50" />


          {/* Engineer */}

          <div
            className="
              relative
              z-10
              h-[560px]
              md:h-[660px]
              flex
              items-end
            "
          >

            <img
              src="/engineer.png"
              alt="Engineer"
              className="
                h-full
                w-auto
                object-contain
                drop-shadow-[0_25px_35px_rgba(0,0,0,0.45)]
              "
            />

          </div>


          {/* Bottom technical information */}

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 opacity-40">

            <span className="text-[8px] tracking-[0.3em] text-blue-100">
              MEP
            </span>

            <span className="w-8 h-px bg-blue-200/40" />

            <span className="text-[8px] tracking-[0.3em] text-blue-100">
              ENGINEERING
            </span>

            <span className="w-8 h-px bg-blue-200/40" />

            <span className="text-[8px] tracking-[0.3em] text-blue-100">
              CONSULTING
            </span>

          </div>

        </div>

      </div>


      {/* Bottom fade */}

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-900 to-transparent pointer-events-none" />

    </section>
  );
};

export default Ahero;

import { motion, useTransform, type MotionValue } from "framer-motion";
type ServiceCardProps = {
  title: string;
  description: string | string[];
  scrollYProgress: MotionValue<number>;
  start: number;
  end: number;
};

export default function ServiceCard({
  title,
  description,
  scrollYProgress,
  start,
  end,
}: ServiceCardProps) {
  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.1, end - 0.1, end],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [start, start + 0.1, end],
    [30, 0, -30]
  );

  return (
<motion.div
  style={{ opacity, y }}
  className="absolute inset-0 flex items-center justify-center px-6 md:px-16 lg:px-24"
>
  <div className="w-full max-w-7xl">

    <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-8 md:gap-16 items-start">

      {/* Number */}
      <div className="hidden md:block">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[#00a859]" />
          <span className="text-xs font-bold tracking-[0.25em] text-slate-400">
            01
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl border-r-2 border-[#00a859] pr-6 md:pr-10">

        <span className="mb-5 block text-xs md:text-sm font-bold tracking-[0.2em] text-[#00a859]">
          ENGINEERING SERVICES
        </span>

        <h2 className="text-5xl font-black leading-[0.95] tracking-tight text-[#1a365d] md:text-7xl lg:text-8xl">
          {title}
        </h2>

        <div className="mt-8 flex max-w-2xl items-start gap-5">
          <span className="mt-2 h-10 w-1 shrink-0 rounded-full bg-[#8b1538]" />

          <p className="text-base font-medium leading-8 text-slate-500 md:text-lg">
            {description}
          </p>
        </div>

      </div>
    </div>
  </div>
</motion.div>
  );
}
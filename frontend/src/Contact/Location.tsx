import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const TOTAL_FRAMES = 366;
const FRAME_PATH = (i: number) =>
  `frames/frame_${String(i).padStart(4, "0")}.webp`;

const Location = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const framesRef = useRef<HTMLImageElement[]>([]);
  const lastScrollY = useRef(0);
  const targetFrame = useRef(0);
  const displayFrame = useRef(0);
  const isActive = useRef(false);
  const rafId = useRef<number | null>(null);

  const [loaded, setLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [showCard, setShowCard] = useState(false);

  // ============= PRELOAD FRAMES =============
  useEffect(() => {
    let cancelled = false;
    const images: HTMLImageElement[] = [];
    let settledCount = 0; // نجح أو فشل، المهم إنه "خلص"
    let errorCount = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const src = FRAME_PATH(i);
      img.src = src;

      const onSettled = () => {
        settledCount++;
        setLoadProgress(settledCount);

        if (settledCount === TOTAL_FRAMES && !cancelled) {
          console.log(
            `تم تحميل ${TOTAL_FRAMES - errorCount}/${TOTAL_FRAMES} صورة (فشل: ${errorCount})`
          );
          setLoaded(true);
        }
      };

      img.onload = onSettled;
      img.onerror = () => {
        errorCount++;
        console.error(`فشل تحميل الصورة: ${src}`);
        onSettled();
      };

      images.push(img);
    }

    framesRef.current = images;

    return () => {
      cancelled = true;
    };
  }, []);

  // ============= DRAW HELPER =============
  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    const img = framesRef.current[index];
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;

    if (w === 0 || h === 0) {
      console.warn("canvas width/height = 0, تأكد إن الكونتينر له ارتفاع محدد");
      return;
    }

    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = w * dpr;
      canvas.height = h * dpr;
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const canvasRatio = w / h;
    const imgRatio = img.width / img.height;

    let drawW = w;
    let drawH = h;
    let offsetX = 0;
    let offsetY = 0;

    if (imgRatio > canvasRatio) {
      drawH = h;
      drawW = h * imgRatio;
      offsetX = (w - drawW) / 2;
    } else {
      drawW = w;
      drawH = w / imgRatio;
      offsetY = (h - drawH) / 2;
    }

    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
  };

  // ============= SCROLL + RENDER LOOP =============
  useEffect(() => {
    if (!loaded) return;

    const container = containerRef.current;
    if (!container) return;

    const END_THRESHOLD = 0.94;
    const SMOOTHING = 0.12;
    const maxIndex = TOTAL_FRAMES - 1;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const componentCenter = rect.top + rect.height / 2;
      const distance = Math.abs(componentCenter - viewportCenter);

      isActive.current = distance < window.innerHeight * 0.35;

      if (!isActive.current) {
        lastScrollY.current = window.scrollY;
        return;
      }

      const scrollY = window.scrollY;
      const delta = scrollY - lastScrollY.current;
      lastScrollY.current = scrollY;

      const speed = 0.5;

      targetFrame.current += delta * speed;
      targetFrame.current = Math.max(0, Math.min(targetFrame.current, maxIndex));
    };

    const handleResize = () => drawFrame(Math.round(displayFrame.current));

    const tick = () => {
      const diff = targetFrame.current - displayFrame.current;

      if (Math.abs(diff) > 0.01) {
        displayFrame.current += diff * SMOOTHING;
      } else {
        displayFrame.current = targetFrame.current;
      }

      const index = Math.round(displayFrame.current);
      drawFrame(index);

      const progress = displayFrame.current / maxIndex;
      setShowCard((prev) => {
        const shouldShow = progress >= END_THRESHOLD;
        return prev === shouldShow ? prev : shouldShow;
      });

      rafId.current = requestAnimationFrame(tick);
    };

    lastScrollY.current = window.scrollY;
    drawFrame(0);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [loaded]);

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-hidden bg-black"
    >
      <canvas ref={canvasRef} className="h-full w-full" />

      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-white/80" />
          <p className="text-xs text-white/50">
            {loadProgress}/{TOTAL_FRAMES}
          </p>
        </div>
      )}

      {/* ================= LOCATION CARD ================= */}

      <AnimatePresence>
        {showCard && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
              absolute inset-0 z-20
              flex items-center justify-center
              bg-black/40
              backdrop-blur-[2px]
            "
          >
            <div
              className="
                w-[90%] max-w-3xl
                rounded-2xl
                border border-white/10
                bg-white/[0.04]
                backdrop-blur-xl
                p-8 md:p-12
                text-center
                shadow-[0_0_60px_rgba(59,130,246,0.15)]
              "
            >
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-300">
                Our Location
              </p>

              <div className="mt-4 text-2xl md:text-4xl font-bold text-white">
             شقة 5- عمارة 446 - الهرم - مجمع نصر الدين- القاهرة- جمهورية مصر
العربية.
</div>
       

         
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Location;
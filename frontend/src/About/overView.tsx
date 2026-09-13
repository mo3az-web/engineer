import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ServiceCard from "./Components/ServiceCard";

const OfficeOverview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={sectionRef} className="relative h-[300vh] bg-slate-50 dir-rtl text-right font-sans">
      <div className="sticky top-15 flex h-screen flex-col justify-between overflow-hidden py-10 px-6 md:px-16">
        
        {/* الهيدر العلوي - بيانات المكتب */}
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0.9]),
          }}
          className="z-50 text-center border-b border-slate-200 pb-4"
        >
          <p className="text-xs md:text-sm font-semibold text-[#8b1538] tracking-wide">
            ترخيص مكتب استشاري نوعي بتاريخ 2016/4/13 رقم 844
          </p>
          <h1 className="mt-1 text-2xl md:text-4xl font-extrabold text-[#1a365d]">
            المركز الهندسي للكهروميكا
          </h1>
          <p className="mt-1 text-sm font-bold text-[#00a859]">
            استشارات وإدارة مشروعات — م. استشاري / أشرف عبد الحميد طه
          </p>
        </motion.div>

        {/* المحتوى الأوسط - النبذة والمجالات */}

<ServiceCard
  title="أولاً : الأعمال الميكانيكية :"
  description={[
    "أنظمة التكييف والتهوية والتبريد .",
    "أنظمة مكافحة الحريق .",
    "أنظمة الهواء المضغوط .",
    "أنظمة البخار والمياه الساخنة .",
    "أنظمة المغاسل .",
    "الأعمال الصحية (الصرف الصحي – تغذية المياه) .",
    "الأعمال الميكانيكية لحمامات السباحة .",
    "الغازات الطبية .",
    "أنظمة إطفاء الحريق للمباني .",
    "شبكات الري ."
  ]}
  scrollYProgress={scrollYProgress}
  start={0}
  end={0.33}
/>

<ServiceCard
  title="ثانياً : الأعمال والأنظمة الكهربائية :"
  description={[
    "شبكات الكهرباء للمباني .",
    "أنظمة إنذار الحريق للمباني .",
    "أنظمة التيار الخفيف الأخرى (التليفونات – الحاسب – كاميرات المراقبة – الصوتيات– أنظمة الدش والاريال المركزي) ."
  ]}
  scrollYProgress={scrollYProgress}
  start={0.33}
  end={0.66}

/>

<ServiceCard
  title="النشاط الهندسي للمكتب"
  description="التصميم والإشراف على الأنظمة الهندسية الكهروميكانيكية والدعم الفنى و عمل المخططات التنفيذية و الاختبارات و اختبارات الجودة وذلك بالاستعانة بالمهندسين ذو الخبرات الكبيرة أو التعاون مع المكاتب الاستشارية المتخصصة خارج المكتب في بعض المشروعات العملاقة إذا لزم الأمر ."
  scrollYProgress={scrollYProgress}
  start={0.66}
  end={1}
 

/>
        {/* مؤشر التمرير السفلي */}
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]),
          }}
          className="z-50 text-center pt-2"
        >
          <p className="text-xs font-bold text-slate-400 tracking-wider">
            قم بالتمرير للأسفل لقرائة باقي التفاصيل
          </p>
          <motion.div
            className="mx-auto mt-2 h-6 w-1 bg-[#00a859] rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default OfficeOverview;
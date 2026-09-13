import Location from "./Location";
import { PhoneNumber } from "./PhoneNumber";

const Contact = () => {
  return (
    <section className="z-20 min-h-screen bg-black">
      <PhoneNumber />
       {/* Location */}
      <section className="relative z-20 h-[300vh] bg-black">
        <div className="sticky top-0 h-screen">
          <Location />
        </div>
      </section>
    </section>
  );
};

export default Contact;
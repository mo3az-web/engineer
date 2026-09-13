
const WhatsAppFloat = () => {
  const phoneNumber = "201XXXXXXXXX"; // اكتب رقمك بصيغة دولية بدون +

  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:scale-110
        hover:shadow-xl
      "
    >
      {/* WhatsApp Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-8 w-8"
      >
        <path d="M20.52 3.48A11.82 11.82 0 0 0 12.06 0C5.53 0 .22 5.31.22 11.84c0 2.09.55 4.13 1.59 5.93L.12 24l6.39-1.67a11.84 11.84 0 0 0 5.55 1.41h.01c6.53 0 11.84-5.31 11.84-11.84 0-3.17-1.23-6.15-3.39-8.42ZM12.07 21.7a9.84 9.84 0 0 1-5.02-1.37l-.36-.21-3.79.99 1.01-3.69-.23-.38a9.84 9.84 0 0 1-1.51-5.2c0-5.42 4.41-9.83 9.84-9.83 2.63 0 5.1 1.03 6.96 2.89a9.77 9.77 0 0 1 2.88 6.96c0 5.42-4.41 9.84-9.83 9.84Zm5.39-7.37c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.65.15-.19.29-.74.95-.91 1.15-.17.19-.34.22-.63.07-.29-.15-1.2-.44-2.28-1.4-.84-.75-1.41-1.67-1.58-1.96-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.89-2.15-.23-.56-.47-.48-.65-.49h-.55c-.19 0-.51.07-.77.36-.27.29-1.02 1-1.02 2.43s1.04 2.82 1.18 3.01c.15.19 2.05 3.13 4.97 4.39.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.19-.56-.34Z" />
      </svg>
    </a>
  );
};

export default WhatsAppFloat;

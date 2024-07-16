// import  from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    const phoneNumber = "+919838208697";
    const message = "Hello, I'm interested in connecting with you!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed right-4 bottom-4 bg-green-500 text-white p-4 rounded-full flex items-center justify-center space-x-2 hover:bg-green-600"
    >
      <FaWhatsapp className="text-2xl" />
      <span className="font-semibold">connect via WhatsApp</span>
    </button>
  );
};

export default WhatsAppButton;

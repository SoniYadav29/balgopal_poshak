import { WHATSAPP_NUMBER, PHONE_NUMBER } from "@/lib/config";

export function getWhatsAppUrl(message: string): string {
  const number = WHATSAPP_NUMBER.replace(/\D/g, "");

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function getProductMessage(productName: string): string {
  return `Hello, I am interested in ordering the ${productName}. Please share the available sizes, current availability and details.`;
}

export function getSizeHelpMessage(): string {
  return "Hello, I need help selecting the correct Laddu Gopal dress size. Please guide me.";
}

export function getGeneralMessage(): string {
  return "Hello, I would like to know more about your Laddu Gopal dresses, poshak and shringar collection.";
}

export function getCallUrl(): string {
  return `tel:${PHONE_NUMBER.replace(/[^\d+]/g, "")}`;
}

import { WA_NUMBER } from "@/constants/products";

export interface OrderForm {
  service: string;
  material: string;
  quantity: string;
  timeline: string;
  name: string;
  email: string;
  phone: string;
  description: string;
  itemType?: string;
  dimensions?: string;
  recipient?: string;
}

export function openOrderWhatsApp(form: OrderForm) {
  const msg = [
    "*NEW CUSTOM ORDER*",
    "",
    "*Customer Details:*",
    `• Name: ${form.name}`,
    `• Email: ${form.email}`,
    form.phone ? `• Phone: ${form.phone}` : undefined,
    "",
    "*Order Requirements:*",
    `• Service: ${form.service}`,
    form.itemType ? `• Item Type: ${form.itemType}` : undefined,
    form.recipient ? `• Recipient/Occasion: ${form.recipient}` : undefined,
    form.dimensions ? `• Dimensions: ${form.dimensions}` : undefined,
    form.material ? `• Material: ${form.material}` : undefined,
    `• Quantity: ${form.quantity}`,
    `• Timeline: ${form.timeline}`,
    "",
    "*Design Details:*",
    form.description,
  ].filter((l) => l !== undefined).join("\n").trim();
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
}


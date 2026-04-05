export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#book", label: "Book" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

export function getBookingEmbeds() {
  const inPerson =
    process.env.NEXT_PUBLIC_CAL_EMBED_INPERSON?.trim() || "";
  const online = process.env.NEXT_PUBLIC_CAL_EMBED_ONLINE?.trim() || "";
  return { inPerson, online };
}

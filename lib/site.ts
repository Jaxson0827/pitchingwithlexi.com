export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#waitlist", label: "Waitlist" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

/** Google Apps Script Web App URL (or other form endpoint). POST fields: email, name, phone. */
export function getWaitlistFormAction() {
  return process.env.NEXT_PUBLIC_WAITLIST_FORM_ACTION?.trim() || "";
}

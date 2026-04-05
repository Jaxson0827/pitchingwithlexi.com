export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#waitlist", label: "Waitlist" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

export type WaitlistSubmitMode = "builtin" | "external" | "unset";

export function getWaitlistSubmitMode(): WaitlistSubmitMode {
  const json = process.env.GOOGLE_SERVICE_ACCOUNT_JSON?.trim();
  const sheetId = process.env.WAITLIST_GOOGLE_SHEET_ID?.trim();
  if (json && sheetId) return "builtin";

  const external = process.env.NEXT_PUBLIC_WAITLIST_FORM_ACTION?.trim();
  if (external) return "external";

  return "unset";
}

/** Used when {@link getWaitlistSubmitMode} is `"external"`. */
export function getWaitlistFormAction() {
  return process.env.NEXT_PUBLIC_WAITLIST_FORM_ACTION?.trim() || "";
}

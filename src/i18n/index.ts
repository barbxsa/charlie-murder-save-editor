import { en, type Messages } from "./en";
import { es } from "./es";
import { ptBR } from "./pt-BR";

export type Locale = "en" | "es" | "pt-BR";

export const LOCALES: { code: Locale; label: string }[] = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "pt-BR", label: "Português (BR)" },
];

const MESSAGES: Record<Locale, Messages> = { en, es, "pt-BR": ptBR };
const STORAGE_KEY = "cmse.locale";
export const DEFAULT_LOCALE: Locale = "en";

const isLocale = (v: unknown): v is Locale => typeof v === "string" && v in MESSAGES;

let current: Locale = DEFAULT_LOCALE;
const listeners = new Set<() => void>();

/** `?lang=es` in the URL wins, then the last choice saved in this browser, then English. */
export function initLocale(): Locale {
  let next: Locale = DEFAULT_LOCALE;
  try {
    const fromUrl = new URLSearchParams(location.search).get("lang");
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLocale(fromUrl)) next = fromUrl;
    else if (isLocale(saved)) next = saved;
  } catch {
    /* storage can be blocked; fall back to the default */
  }
  current = next;
  document.documentElement.lang = current;
  return current;
}

export function getLocale(): Locale {
  return current;
}

export function setLocale(locale: Locale): void {
  if (!isLocale(locale) || locale === current) return;
  current = locale;
  if (typeof document !== "undefined") document.documentElement.lang = locale;
  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    /* ignore */
  }
  listeners.forEach((fn) => fn());
}

export function onLocaleChange(fn: () => void): void {
  listeners.add(fn);
}

/** The full message tree for the active locale. */
export function m(): Messages {
  return MESSAGES[current];
}

/** Replace `{name}` placeholders. */
export function fmt(template: string, vars: Record<string, string | number> = {}): string {
  return template.replace(/\{(\w+)\}/g, (_, k: string) => (k in vars ? String(vars[k]) : `{${k}}`));
}

export function formatNumber(n: number): string {
  return new Intl.NumberFormat(current).format(n);
}

export { MESSAGES };

/** A message with singular and plural forms. */
export interface Plural {
  readonly one: string;
  readonly other: string;
}

/**
 * Pick the plural form for `n` and fill placeholders (`{n}` included).
 * Zero always uses the plural form ("0 items"), which reads naturally in EN, ES and PT.
 */
export function plural(p: Plural, n: number, vars: Record<string, string | number> = {}): string {
  const form = n !== 0 && new Intl.PluralRules(current).select(n) === "one" ? p.one : p.other;
  return fmt(form, { n: formatNumber(n), ...vars });
}

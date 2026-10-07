// Fonts are bundled (no requests to third-party font hosts).
import "@fontsource/permanent-marker/latin-400.css";
import "@fontsource/patrick-hand/latin-400.css";
import "@fontsource/patrick-hand/latin-ext-400.css";
import "./style.css";
import {
  buildSave,
  characterFields,
  coerce,
  isChanged,
  itemFields,
  parseSave,
  SaveFormatError,
  SPECIAL_TYPE_COUNT,
  type ClothingItem,
  type Field,
  type FoodItem,
  type RosterCharacter,
  type SaveFile,
} from "./save/format";
import { icons, star } from "./ui/icons";
import { AUTHOR_NAME, AUTHOR_URL, REPO_URL } from "./config";
import { fmt, formatNumber, getLocale, initLocale, LOCALES, m, onLocaleChange, plural, setLocale, type Locale } from "./i18n";
import { collectChanges } from "./ui/changes";

const SAVE_PATH = "%APPDATA%\\CharlieMurder\\game.sav";

type Note =
  | { kind: "boosted" }
  | { kind: "saved"; n: number; backup: boolean }
  | { kind: "verify"; error: unknown };

interface State {
  save: SaveFile | null;
  fileName: string;
  current: number;
  showAll: boolean;
  /** Kept as data (not text) so it re-renders in the newly picked language. */
  error: unknown;
  note: Note | null;
  confirmOther: boolean;
  /** The review panel shown before downloading. */
  review: boolean;
  /** Also download the untouched original as game.sav.bak. */
  backup: boolean;
}

const state: State = { save: null, fileName: "game.sav", current: 0, showAll: false, error: null, note: null, confirmOther: false, review: false, backup: true };

const app = document.querySelector<HTMLDivElement>("#app")!;
const fieldRegistry = new Map<string, { field: Field; min: number; max: number }>();
let uid = 0;

const esc = (s: string | number) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

// ---------- field widgets ----------

/** Paint color behind each band member's name (Charlie, Lester, Tommy, Rex, Kelly). */
const CHARACTER_COLORS = ["#8fd400", "#ff3d8b", "#4fae4a", "#f2cf1d", "#ff6a3d"];
const charColor = (c: RosterCharacter) => CHARACTER_COLORS[c.index % CHARACTER_COLORS.length];

type FieldOpts = { min?: number; max?: number; hint?: string; icon?: string };

function numberInput(f: Field, label: string, opts: FieldOpts = {}): string {
  const id = `f${++uid}`;
  const min = opts.min ?? 0;
  const max = opts.max ?? 2147483647;
  fieldRegistry.set(id, { field: f, min, max });
  const shown = f.kind === "f32" ? Math.round(f.value * 100) / 100 : f.value;
  return `<div class="fld${isChanged(f) ? " changed" : ""}">
    <label for="${id}">${opts.icon ?? ""}${esc(label)}</label>
    <input id="${id}" data-field="${id}" type="number" inputmode="${f.kind === "f32" ? "decimal" : "numeric"}"
      step="${f.kind === "f32" ? "0.01" : "1"}" min="${min}" max="${max}" value="${shown}">
    ${opts.hint ? `<small>${esc(opts.hint)}</small>` : ""}
  </div>`;
}

function specialRow(type: Field, power: Field, n: number): string {
  const t = m();
  const tid = `f${++uid}`;
  const pid = `f${++uid}`;
  fieldRegistry.set(tid, { field: type, min: 0, max: SPECIAL_TYPE_COUNT - 1 });
  fieldRegistry.set(pid, { field: power, min: 0, max: 2147483647 });
  const options = t.specials
    .map((name, k) => `<option value="${k}"${k === type.value ? " selected" : ""}>${esc(name)}</option>`)
    .join("");
  const unknown = type.value >= SPECIAL_TYPE_COUNT ? `<option value="${type.value}" selected>#${type.value}</option>` : "";
  return `<div class="sp${power.value === 0 ? " off" : ""}">
    <div class="fld${isChanged(type) ? " changed" : ""}">
      <select id="${tid}" data-field="${tid}" aria-label="${esc(fmt(t.items.bonusType, { n }))}">${unknown}${options}</select>
    </div>
    <div class="fld${isChanged(power) ? " changed" : ""}">
      <input id="${pid}" data-field="${pid}" type="number" step="1" min="0" value="${power.value}" aria-label="${esc(fmt(t.items.bonusValue, { n }))}">
    </div>
  </div>`;
}

function rarityStars(r: number): string {
  const level = Math.max(0, Math.min(4, r));
  return `<span class="stars" style="--rc:var(--r${level})" title="${esc(m().items.rarity)}: ${r}">${[0, 1, 2, 3, 4]
    .map((k) => star(k <= level))
    .join("")}</span>`;
}

/** Round colored "controller" button with an icon and a marker label. */
function bubble(opts: { id?: string; data?: string; color: "green" | "red" | "blue" | "yellow"; icon: string; label: string; disabled?: boolean; small?: boolean }): string {
  return `<button type="button" class="bub ${opts.color}${opts.small ? " small" : ""}"${opts.id ? ` id="${opts.id}"` : ""}${opts.data ?? ""}${opts.disabled ? " disabled" : ""}>
    <span class="orb">${opts.icon}</span><span class="lbl">${esc(opts.label)}</span>
  </button>`;
}

const SPLAT = `<svg class="splat" viewBox="0 0 170 140" aria-hidden="true"><g fill="currentColor">
  <path d="M96 22c14-6 30 2 33 16 2 9-3 15 4 22 9 9 25 3 27 15 2 10-11 13-20 12-11-1-15 8-13 17 3 12-3 26-15 23-9-2-8-13-15-17-8-5-18 5-27 0-10-6-4-19-12-25-8-7-23-2-25-14-2-11 12-14 20-14 10 0 13-9 12-17-1-12 9-21 20-16 6 3 6 2 11-2z"/>
  <circle cx="22" cy="30" r="6"/><circle cx="150" cy="18" r="4"/><circle cx="160" cy="112" r="7"/><circle cx="40" cy="118" r="3.5"/>
  <path d="M84 104c3 8 3 22-1 30-2 4-6 4-7 0-2-8 1-21 8-30z"/><path d="M128 96c2 6 2 14-1 19-2 3-5 2-5-1 0-6 2-12 6-18z"/>
</g></svg>`;

const anyChanged = (fields: Field[]) => fields.some(isChanged);

// ---------- views ----------

function header(): string {
  const t = m();
  const chips = state.save
    ? `<div class="chips">
        <span class="chip ok">${esc(t.header.formatOk)}</span>
        <span class="chip">${esc(t.header.profile)} <b>${esc(state.save.profileName || "—")}</b></span>
        <span class="chip">${esc(state.fileName)} · <b>${(state.save.bytes.length / 1024).toFixed(1)} KB</b></span>
      </div>`
    : "";
  const langOptions = LOCALES.map(
    (l) => `<option value="${l.code}"${l.code === getLocale() ? " selected" : ""}>${esc(l.label)}</option>`,
  ).join("");
  return `<header class="top">
    <div>
      <div class="logo">${SPLAT}<h1>Charlie Murder</h1><span class="sub">save editor</span></div>
      <p class="lede">${esc(t.header.lede)}</p>
    </div>
    <div class="top-right">
      <label class="lang">${esc(t.meta.language)}
        <select id="lang">${langOptions}</select>
      </label>
      ${chips}
    </div>
  </header>`;
}

function startView(): string {
  const t = m();
  const steps = t.start.steps.map(([title, body]) => `<li><div><b>${esc(title)}</b><span>${esc(body)}</span></div></li>`).join("");
  const error = state.error
    ? `<div class="err paper" role="alert"><b>${esc(t.errors.title)}</b><br>${esc(errorMessage(state.error))}<br><span>${esc(t.errors.hint)}</span></div>`
    : "";
  return `<section class="start">
    <div>
      <label class="drop chalkbox" id="drop" for="file">
        <svg class="ico big-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 27V9M9 16l7-7 7 7M5.5 5h21"/></svg>
        <span class="big">${esc(t.start.drop)}</span>
        <span class="or">${esc(t.start.or)}</span>
        <input id="file" type="file" hidden>
        <span class="path"><span id="pathTxt">${esc(SAVE_PATH)}</span><button type="button" id="copyPath">${esc(t.start.copy)}</button></span>
      </label>
      ${error}
    </div>
    <ol class="steps">${steps}</ol>
  </section>`;
}

function rosterView(save: SaveFile): string {
  const t = m();
  let html = "";
  let band = 0;
  for (const c of save.roster.filter((c) => state.showAll || c.hasProgress || c.index === state.current)) {
    if (c.band !== band) {
      band = c.band;
      html += `<div class="band">${esc(fmt(t.roster.band, { n: band }))}</div>`;
    }
    const clothes = c.items.filter((i) => i.kind === "clothing").length;
    const dot = anyChanged(characterFields(c)) ? `<span class="d" title="${esc(t.roster.changed)}"></span>` : "<span></span>";
    html += `<button class="char" type="button" data-char="${c.index}" aria-current="${c.index === state.current}" style="--char:${charColor(c)}">
      <span class="n">${esc(c.name)}</span>${dot}
      <span class="m">${esc(fmt(t.roster.summary, { clothes: plural(t.roster.clothes, clothes), cash: formatNumber(Math.round(c.cash.value)) }))}</span>
    </button>`;
  }
  html += `<label class="toggle"><input type="checkbox" id="showAll"${state.showAll ? " checked" : ""}> ${esc(t.roster.showAll)}</label>`;
  return `<nav class="roster" aria-label="${esc(t.roster.label)}">${html}</nav>`;
}

function statInputs(fields: { strength: Field; speed: Field; defense: Field; anarchi: Field }): string {
  const s = m().stats;
  return `${numberInput(fields.strength, s.strength, { icon: icons.strength })}${numberInput(fields.speed, s.speed, { icon: icons.speed })}
    ${numberInput(fields.defense, s.defense, { icon: icons.defense })}${numberInput(fields.anarchi, s.anarchi, { icon: icons.anarchi })}`;
}

const SLOT_ICONS = [icons.shirt, icons.head, icons.gloves, icons.accessory];

function clothingCard(it: ClothingItem, c: RosterCharacter): string {
  const t = m();
  const dirty = anyChanged(itemFields(it));
  const equipped = c.equipped.includes(it.slot);
  const typeName = t.items.clothingTypes[it.clothingType] ?? `#${it.clothingType}`;
  return `<article class="item paper${dirty ? " dirty" : ""}">
    <div class="item-head">
      <span class="slot-badge" title="${esc(typeName)}">${SLOT_ICONS[it.clothingType] ?? icons.accessory}</span>
      <div>
        <h3>${esc(it.name)}</h3>
        <div class="tags"><span>${esc(typeName)}</span>${rarityStars(it.rarity.value)}${equipped ? `<span class="stamp">${esc(t.items.equipped)}</span>` : ""}</div>
      </div>
    </div>
    <div class="g4">${statInputs(it)}</div>
    <div class="g3">
      ${numberInput(it.level, t.items.level)}${numberInput(it.rarity, t.items.rarity, { max: 4 })}${numberInput(it.price, t.items.price, { icon: icons.cash })}
    </div>
    <div class="specials">
      <div class="sub">${esc(t.items.specials)} <small>· ${esc(t.items.specialsHint)}</small></div>
      ${it.specials.map((s, i) => specialRow(s.type, s.power, i + 1)).join("")}
    </div>
    <div class="actions">
      ${bubble({ color: "yellow", icon: icons.boost, label: t.items.boost, data: ` data-boost="${it.slot}"`, small: true })}
      ${bubble({ color: "blue", icon: icons.undo, label: t.items.undo, data: ` data-undo="${it.slot}"`, small: true, disabled: !dirty })}
    </div>
  </article>`;
}

function foodCard(it: FoodItem): string {
  const t = m();
  const dirty = anyChanged(itemFields(it));
  return `<article class="item paper${dirty ? " dirty" : ""}">
    <div class="item-head">
      <span class="slot-badge">${icons.food}</span>
      <div><h3>${esc(it.name)}</h3><div class="tags"><span>${esc(t.items.foodTag)}</span></div></div>
    </div>
    <div class="g3">${numberInput(it.count, t.items.quantity, { min: 1, max: 99 })}${numberInput(it.level, t.items.level)}${numberInput(it.price, t.items.price, { icon: icons.cash })}</div>
    <div class="g4">${statInputs(it)}</div>
    <div class="g4">${numberInput(it.hp, t.items.hp)}${numberInput(it.mp, t.items.mp)}</div>
    <div class="actions">${bubble({ color: "blue", icon: icons.undo, label: t.items.undo, data: ` data-undo="${it.slot}"`, small: true, disabled: !dirty })}</div>
  </article>`;
}

function characterView(c: RosterCharacter): string {
  const t = m();
  const clothes = c.items
    .filter((i): i is ClothingItem => i.kind === "clothing")
    .sort((a, b) => Number(c.equipped.includes(b.slot)) - Number(c.equipped.includes(a.slot)) || a.clothingType - b.clothingType);
  const foods = c.items.filter((i): i is FoodItem => i.kind === "food");
  const relics = c.items.reduce((n, i) => (i.kind === "relic" ? n + i.count.value : n), 0);
  const misc = c.items.reduce((n, i) => (i.kind === "misc" ? n + i.count.value : n), 0);

  let html = `<div class="sheet paper" style="--char:${charColor(c)}">
    <div class="sheet-head">
      <h2><span class="name-swatch">${esc(c.name)}</span> <span class="bandname">${esc(fmt(t.sheet.band, { n: c.band }))}</span></h2>
      <span class="slotno">${esc(fmt(t.sheet.slot, { n: c.index + 1 }))}</span>
    </div>
    <div class="sub">${esc(t.sheet.baseStats)}</div>
    <div class="grid">
      ${numberInput(c.stats[0], t.stats.strength, { icon: icons.strength })}${numberInput(c.stats[1], t.stats.defense, { icon: icons.defense })}
      ${numberInput(c.stats[2], t.stats.speed, { icon: icons.speed })}${numberInput(c.stats[3], t.stats.anarchi, { icon: icons.anarchi })}
    </div>
    <div class="sub">${esc(t.sheet.progress)}</div>
    <div class="grid">
      ${numberInput(c.cash, t.sheet.cash, { icon: icons.cash })}${numberInput(c.followers, t.sheet.followers, { icon: icons.followers })}
      ${numberInput(c.levelPoints, t.sheet.levelPoints, { icon: icons.levelUp, hint: t.sheet.levelPointsHint })}${numberInput(c.skillPoints, t.sheet.skillPoints, { icon: icons.skill })}
    </div>
  </div>`;

  html += `<div class="section-title"><h2>${esc(t.items.clothes)}</h2><span class="c">${esc(plural(t.items.count, clothes.length))}</span></div>`;
  html += clothes.length
    ? `<div class="items">${clothes.map((it) => clothingCard(it, c)).join("")}</div>`
    : `<p class="note">${esc(t.items.noClothes)}</p>`;
  if (foods.length) {
    html += `<div class="section-title"><h2>${esc(t.items.food)}</h2><span class="c">${esc(plural(t.items.count, foods.length))}</span></div>`;
    html += `<div class="items">${foods.map(foodCard).join("")}</div>`;
  }
  if (relics || misc) {
    html += `<div class="section-title"><h2>${esc(t.items.other)}</h2></div>
      <div class="others"><span class="tag paper">${esc(plural(t.items.relics, relics))}</span><span class="tag paper">${esc(plural(t.items.misc, misc))}</span></div>
      <p class="note">${esc(t.items.otherNote)}</p>`;
  }
  return html;
}

function bar(): string {
  if (!state.save) return "";
  const t = m();
  const n = state.save.fields.filter(isChanged).length;
  const msg = state.note ? noteText(state.note) : n ? plural(t.bar.some, n) : t.bar.none;
  return `<div class="bar">
    <span class="msg" role="status">${esc(msg)}</span>
    ${bubble({ id: "reset", color: "red", icon: icons.discard, label: t.bar.discard, disabled: !n })}
    ${bubble({ id: "other", color: "blue", icon: icons.open, label: state.confirmOther ? t.bar.confirmOther : t.bar.openOther })}
    ${bubble({ id: "download", color: "green", icon: icons.download, label: t.bar.download, disabled: !n })}
  </div>`;
}

function reviewView(save: SaveFile): string {
  const t = m();
  const groups = collectChanges(save, t, getLocale());
  const total = save.fields.filter(isChanged).length;
  const body = groups
    .map(
      (cc) => `<section class="rv-char" style="--char:${charColor(cc.character)}">
        <h3><span class="name-swatch">${esc(fmt(t.review.character, { name: cc.character.name, band: cc.character.band }))}</span></h3>
        ${cc.groups
          .map(
            (g) => `<div class="rv-group"><h4>${esc(g.title)}</h4><ul>${g.lines
              .map((l) => `<li><span class="rv-label">${esc(l.label)}</span><span class="rv-from">${esc(l.from)}</span><span class="rv-arrow" aria-hidden="true">→</span><span class="rv-to">${esc(l.to)}</span></li>`)
              .join("")}</ul></div>`,
          )
          .join("")}
      </section>`,
    )
    .join("");
  return `<div class="overlay" id="overlay">
    <div class="review paper" role="dialog" aria-modal="true" aria-labelledby="rv-title">
      <div class="rv-head">
        <h2 id="rv-title">${esc(t.review.title)}</h2>
        <span class="rv-total">${esc(plural(t.review.total, total))}</span>
      </div>
      <p class="rv-intro">${esc(t.review.intro)}</p>
      <div class="rv-list">${body}</div>
      <label class="rv-backup"><input type="checkbox" id="backup"${state.backup ? " checked" : ""}>
        <span><b>${esc(t.review.backup)}</b><small>${esc(t.review.backupHint)}</small><small>${esc(t.review.blocked)}</small></span>
      </label>
      <div class="rv-actions">
        ${bubble({ id: "rv-back", color: "blue", icon: icons.undo, label: t.review.back })}
        ${bubble({ id: "rv-confirm", color: "green", icon: icons.download, label: t.review.confirm })}
      </div>
    </div>
  </div>`;
}

function noteText(note: Note): string {
  const t = m();
  switch (note.kind) {
    case "boosted":
      return t.bar.boosted;
    case "saved":
      return plural(note.backup ? t.bar.savedBackup : t.bar.saved, note.n);
    case "verify":
      return fmt(t.errors.verify, { message: errorMessage(note.error) });
  }
}

function footer(): string {
  const t = m();
  const author = `<a href="${esc(AUTHOR_URL)}" target="_blank" rel="noopener">@${esc(AUTHOR_NAME)}</a>`;
  return `<footer class="site-foot">
    <span>${fmt(esc(t.footer.madeBy), { author })}</span>
    <a href="${esc(REPO_URL)}" target="_blank" rel="noopener">${esc(t.footer.source)}</a>
    <span class="disclaimer">${esc(t.footer.disclaimer)}</span>
  </footer>`;
}

function render(): void {
  const active = document.activeElement as HTMLElement | null;
  const focusId = active?.id;
  uid = 0;
  fieldRegistry.clear();
  document.title = m().meta.title;
  const s = state.save;
  const body = s
    ? `<section class="app">${rosterView(s)}<div>${characterView(s.roster[state.current])}</div></section>`
    : startView();
  app.innerHTML = `<div class="wrap">${header()}${body}${footer()}</div>${bar()}${s && state.review ? reviewView(s) : ""}`;
  document.body.classList.toggle("locked", Boolean(s && state.review));
  if (focusId) document.getElementById(focusId)?.focus({ preventScroll: true });
}

// ---------- actions ----------

function errorMessage(e: unknown): string {
  const t = m().errors;
  if (e instanceof SaveFormatError) return fmt(t[e.code], e.details);
  return fmt(t.unexpected, { message: e instanceof Error ? e.message : String(e) });
}

async function loadFile(file: File): Promise<void> {
  try {
    const save = parseSave(await file.arrayBuffer());
    state.save = save;
    state.fileName = file.name || "game.sav";
    state.current = save.roster.find((c) => c.hasProgress)?.index ?? 0;
    state.error = null;
    state.note = null;
    window.scrollTo(0, 0);
  } catch (e) {
    state.error = e;
  }
  render();
}

function saveBlob(bytes: Uint8Array, name: string): void {
  const url = URL.createObjectURL(new Blob([bytes as BlobPart], { type: "application/octet-stream" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10000);
}

function download(): void {
  const s = state.save;
  if (!s) return;
  const { bytes, changes } = buildSave(s);
  try {
    parseSave(bytes); // never hand out a file the editor itself can't read back
  } catch (e) {
    state.review = false;
    state.note = { kind: "verify", error: e };
    render();
    return;
  }
  saveBlob(bytes, "game.sav");
  // A short gap keeps browsers from merging or dropping the second download.
  if (state.backup) setTimeout(() => saveBlob(s.bytes, "game.sav.bak"), 600);
  state.review = false;
  state.note = { kind: "saved", n: changes, backup: state.backup };
  render();
}

function findItem(slot: number) {
  return state.save?.roster[state.current].items.find((i) => i.slot === slot);
}

app.addEventListener("change", (e) => {
  const el = e.target as HTMLInputElement | HTMLSelectElement;
  if (el.id === "lang") {
    setLocale(el.value as Locale);
    return;
  }
  if (el.id === "file" && el instanceof HTMLInputElement) {
    const f = el.files?.[0];
    if (f) void loadFile(f);
    el.value = "";
    return;
  }
  if (el.id === "backup" && el instanceof HTMLInputElement) {
    state.backup = el.checked;
    return;
  }
  if (el.id === "showAll" && el instanceof HTMLInputElement) {
    state.showAll = el.checked;
    render();
    return;
  }
  const entry = el.dataset.field ? fieldRegistry.get(el.dataset.field) : undefined;
  if (!entry) return;
  entry.field.value = coerce(entry.field, Number(el.value), entry.min, entry.max);
  state.note = null;
  render();
});

app.addEventListener("click", (e) => {
  const btn = (e.target as HTMLElement).closest("button");
  if (!btn) return;
  const t = m();
  if (btn.id === "copyPath") {
    e.preventDefault();
    navigator.clipboard
      ?.writeText(SAVE_PATH)
      .then(() => {
        btn.textContent = t.start.copied;
        setTimeout(() => (btn.textContent = m().start.copy), 1500);
      })
      .catch(() => {
        const range = document.createRange();
        range.selectNodeContents(document.getElementById("pathTxt")!);
        getSelection()?.removeAllRanges();
        getSelection()?.addRange(range);
      });
    return;
  }
  if (btn.dataset.char !== undefined) {
    state.current = Number(btn.dataset.char);
    state.note = null;
    render();
    return;
  }
  if (btn.dataset.boost !== undefined) {
    const it = findItem(Number(btn.dataset.boost));
    if (it?.kind === "clothing") {
      it.strength.value = 9999;
      it.defense.value = 9999;
      it.anarchi.value = 9999;
      it.speed.value = Math.max(it.speed.value, 300);
      it.rarity.value = 4;
      state.note = { kind: "boosted" };
      render();
    }
    return;
  }
  if (btn.dataset.undo !== undefined) {
    const it = findItem(Number(btn.dataset.undo));
    if (it) itemFields(it).forEach((f) => (f.value = f.original));
    state.note = null;
    render();
    return;
  }
  switch (btn.id) {
    case "reset":
      state.save?.fields.forEach((f) => (f.value = f.original));
      state.note = null;
      render();
      break;
    case "download":
      state.review = true;
      render();
      document.getElementById("rv-confirm")?.focus();
      break;
    case "rv-back":
      state.review = false;
      render();
      document.getElementById("download")?.focus();
      break;
    case "rv-confirm":
      download();
      break;
    case "other": {
      const dirty = state.save?.fields.some(isChanged);
      if (dirty && !state.confirmOther) {
        state.confirmOther = true;
        render();
        setTimeout(() => {
          state.confirmOther = false;
          render();
        }, 4000);
        return;
      }
      state.confirmOther = false;
      state.save = null;
      state.note = null;
      render();
      document.getElementById("file")?.click();
      break;
    }
  }
});

// Drag and drop on the start screen.
app.addEventListener("dragover", (e) => {
  if (!(e.target as HTMLElement).closest("#drop")) return;
  e.preventDefault();
  document.getElementById("drop")?.classList.add("over");
});
app.addEventListener("dragleave", (e) => {
  if ((e.target as HTMLElement).closest("#drop")) document.getElementById("drop")?.classList.remove("over");
});
app.addEventListener("drop", (e) => {
  if (!(e.target as HTMLElement).closest("#drop")) return;
  e.preventDefault();
  const f = e.dataTransfer?.files[0];
  if (f) void loadFile(f);
});

// Escape or a click on the dimmed backdrop closes the review panel.
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && state.review) {
    state.review = false;
    render();
  }
});
app.addEventListener("mousedown", (e) => {
  if ((e.target as HTMLElement).id === "overlay") {
    state.review = false;
    render();
  }
});

// Leaving with unsaved edits asks for confirmation.
window.addEventListener("beforeunload", (e) => {
  if (state.save?.fields.some(isChanged)) e.preventDefault();
});

initLocale();
onLocaleChange(render);
render();

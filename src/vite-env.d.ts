/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Optional link to the repository, shown in the footer. */
  readonly VITE_REPO_URL?: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}

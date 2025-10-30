/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WORDPRESS_CONTACT_ENDPOINT?: string;
  readonly VITE_WORDPRESS_AUTH_USER?: string;
  readonly VITE_WORDPRESS_AUTH_PASSWORD?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

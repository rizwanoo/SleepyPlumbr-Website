import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig, type Plugin } from 'vite';

function resolvePublicOrigin(): string {
  const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProd) return `https://${vercelProd.replace(/^https?:\/\//, '')}`;
  const vercelUrl = process.env.VERCEL_URL;
  if (vercelUrl) return `https://${vercelUrl.replace(/^https?:\/\//, '')}`;
  const appUrl = process.env.APP_URL;
  if (appUrl && /^https?:\/\//.test(appUrl)) return appUrl.replace(/\/+$/, '');
  return '';
}

function absoluteOgImagePlugin(): Plugin {
  return {
    name: 'sleepyplumbr-absolute-og',
    transformIndexHtml(html) {
      const origin = resolvePublicOrigin();
      if (!origin) return html;
      return html
        .replace(/content="\/assets\/og-sleepyplumbr\.png"/g, `content="${origin}/assets/og-sleepyplumbr.png"`)
        .replace(/<meta property="og:type"/, `<meta property="og:url" content="${origin}/" />\n    <meta property="og:type"`);
    },
  };
}

export default defineConfig(() => {
  return {
    base: '/',
    plugins: [react(), tailwindcss(), absoluteOgImagePlugin()],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

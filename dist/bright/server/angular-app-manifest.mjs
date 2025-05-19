
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/producto"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5083, hash: '18c06a64c24a72763797754e1a42bd82dbfdc261f5e84e9d8d98139c1626ada1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1055, hash: '51fe99e575001734b4a9cf3303752e7abbfd4db9078c533ec159b69bbc2e3cad', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'producto/index.html': {size: 10829, hash: 'fb4a63c1dcc1f13edaaf554ad4a08cbe21fd154c6d8f6876b25cbdb4cf40feb3', text: () => import('./assets-chunks/producto_index_html.mjs').then(m => m.default)},
    'styles-BVJQD57C.css': {size: 230873, hash: 'YU+im7r2LDs', text: () => import('./assets-chunks/styles-BVJQD57C_css.mjs').then(m => m.default)}
  },
};

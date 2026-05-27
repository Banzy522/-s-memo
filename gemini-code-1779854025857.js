self.addEventListener('install', e => {
    self.skipWaiting();
});

self.addEventListener('fetch', () => {
    // 開発、シンプルな運用のためにフェッチはパススルー
});
module.exports = {
  pwa: {
    name: "3k",
    themeColor: "#b91d47",
    msTileColor: "#b91d47",
    manifestPath: "site.webmanifest",
    manifestOptions: {
      description: "Find out when the next movie from the Marvel Cinematic Universe will be released.",
      icons: [
        {
          "src": "/android-chrome-192x192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "/android-chrome-384x384.png",
          "sizes": "384x384",
          "type": "image/png"
        }
      ],
    },
    iconPaths: {
      faviconSVG: null,
      favicon32: 'favicon-32x32.png',
      favicon16: "favicon-16x16.png",
      appleTouchIcon: "apple-touch-icon.png",
      maskIcon: "safari-pinned-tab.svg",
      msTileImage: "mstile-150x150.png",
    },
  },
};

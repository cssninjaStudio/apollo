const demos = [
  {
    name: 'Homepage',
    screenshotLight: '/img/screenshots/home.png',
    screenshotDark: '/img/screenshots/home-dark.png',
    link: '/home.html',
    new: false,
  },
]

export function renderScreenshots() {
  return {
    screenshots: demos,
  }
}

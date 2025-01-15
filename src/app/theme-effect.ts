/**
 * https://github.com/rauchg/blog/blob/main/app/theme-effect.ts
 */
export const themeEffect = function () {
  // `null` preference implies system (auto)
  const pref = localStorage.getItem("theme");

  if (null === pref) {
    document.documentElement.classList.add("theme-system");
  } else {
    document.documentElement.classList.remove("theme-system");
  }

  if (
    pref === "dark" ||
    (!pref && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("pause-transitions");
    document.documentElement.classList.add("dark");
    // document.head.querySelectorAll('link[rel="icon"]').forEach((l) => {
    //   l.setAttribute(
    //     "href",
    //     (l.getAttribute("href") as string).replace("light", "dark")
    //   );
    // });
    // document.head
    //   .querySelectorAll("link[rel='apple-touch-icon']")
    //   .forEach((l) => {
    //     l.setAttribute(
    //       "href",
    //       (l.getAttribute("href") as string).replace("light", "dark")
    //     );
    //   });
    document.head
      .querySelector("meta[name='msapplication-TileColor']")
      ?.setAttribute("content", "#0a0a0a");
    document.head
      .querySelector("meta[name=theme-color]")
      ?.setAttribute("content", "#0a0a0a");

    requestAnimationFrame(() => {
      document.documentElement.classList.remove("pause-transitions");
    });
    return "dark";
  } else {
    document.documentElement.classList.add("pause-transitions");
    document.documentElement.classList.remove("dark");
    document.head
      .querySelector("meta[name=theme-color]")
      ?.setAttribute("content", "#fafaf9");
    // document.head.querySelectorAll('link[rel="icon"]').forEach((l) => {
    //   l.setAttribute(
    //     "href",
    //     (l.getAttribute("href") as string).replace("dark", "light")
    //   );
    // });
    // document.head
    //   .querySelectorAll("link[rel='apple-touch-icon']")
    //   .forEach((l) => {
    //     l.setAttribute(
    //       "href",
    //       (l.getAttribute("href") as string).replace("dark", "light")
    //     );
    //   });

    document.head
      .querySelector("meta[name='msapplication-TileColor']")
      ?.setAttribute("content", "#fafaf9");
    requestAnimationFrame(() => {
      document.documentElement.classList.remove("pause-transitions");
    });
    return "light";
  }
};

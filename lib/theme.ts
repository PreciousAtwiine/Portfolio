export const THEME_STORAGE_KEY = "theme"

/**
 * Runs in <head> before the page paints, so the right theme shows from the first frame.
 * Order: the visitor's saved choice, then their OS preference, then dark.
 */
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.classList.toggle("dark",t==="dark")}catch(e){}})()`

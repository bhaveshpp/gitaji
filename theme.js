function applyTheme(theme = 'sun') {
    css.style.setProperty('--theme-color', ' var(--'+ theme +'-theme-color');
    css.style.setProperty('--theme-primary-color', ' var(--'+ theme +'-theme-primary-color');
    css.style.setProperty('--theme-invert-color', ' var(--'+ theme +'-theme-invert-color');
    css.style.setProperty('--theme-menu-color', ' var(--'+ theme +'-theme-menu-color');
    css.style.setProperty('--theme-menu-font-color', ' var(--'+ theme +'-theme-menu-font-color');
    css.style.setProperty('--theme-walpaper-color', ' var(--'+ theme +'-theme-walpaper-color');
    localStorage.setItem("theme", theme);
}

if(localStorage.getItem("theme")) {
    applyTheme(localStorage.getItem("theme"));
} else {
    applyTheme("moon");
}

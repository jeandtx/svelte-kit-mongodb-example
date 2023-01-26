export const scrollIntoView: svelte.JSX.EventHandler = ({ currentTarget }) => {
    const scrollToElement = document.querySelector(
        currentTarget.getAttribute('href')
    );

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!scrollToElement) return;
    scrollToElement.scrollIntoView({ behavior: mediaQuery.matches ? 'auto' : 'smooth' });
}
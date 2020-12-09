const map = { sm: 576, md: 768, lg: 992, xl: 1200 };

const breakpoints = {
    between(start, end){
        if(map[start] > map[end]) throw "start shoud be less than end";

        return `@media (min-width: ${map[start]}px) and (max-width: ${map[end]}px)`;
    },
    up(breakpoint) {
        return `@media (min-width: ${map[breakpoint] + 1}px)`;
    },
    down(breakpoint){
        return `@media (max-width: ${map[breakpoint] - 1}px)`;
    }
};

const addStyle = (style) => {
    document.head.innerHTML += `<style>${style}</style>`;
}
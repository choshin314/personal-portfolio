const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('hide-until-scroll--revealed');
            observer.unobserve(entry.target);
        }
    })
}

const options = { rootMargin: "-20% 0px -20% 0px" };

export const revealOnScroll = (itemsToReveal) => {
    itemsToReveal.forEach(item => item.classList.add('hide-until-scroll'));
    const observer = new IntersectionObserver(observerCallback, options);
    itemsToReveal.forEach(item => observer.observe(item));
}
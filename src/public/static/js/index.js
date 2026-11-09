setTimeout(() => {
    document.querySelectorAll("details").forEach(details => {details.open = false;});
}, 1000);

document.querySelectorAll("details").forEach(detail => {
    detail.addEventListener("toggle", () => {
        if (detail.open) document.querySelectorAll("details").forEach(other => {if (other !== detail)  other.open = false;});
    });
});

function updateMarquees() {
    document.querySelectorAll(".marquee").forEach(marquee => {

        const text = marquee.dataset.text ||
                     marquee.textContent.trim();

        marquee.dataset.text = text;

        marquee.innerHTML = `
            <span class="marquee-content">${text}</span>
        `;

        const content = marquee.querySelector(".marquee-content");

        if (content.scrollWidth > marquee.clientWidth) {
            marquee.innerHTML = `
                <div class="marquee-track">
                    <span>${text}</span>
                    <span aria-hidden="true">${text}</span>
                </div>
            `;
        }
    });
}

updateMarquees();

new ResizeObserver(updateMarquees).observe(document.body);

document.querySelectorAll("details").forEach(detail => {
    detail.addEventListener("toggle", updateMarquees);
});
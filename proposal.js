document.addEventListener("DOMContentLoaded", () => {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const proposalPage = document.getElementById("proposalPage");
    const yesPage = document.getElementById("yesPage");
    const noPage = document.getElementById("noPage");

    yesBtn.addEventListener("mouseover", () => {
        const maxX = window.innerWidth - yesBtn.offsetWidth;
        const maxY = window.innerHeight - yesBtn.offsetHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        yesBtn.style.position = "absolute";
        yesBtn.style.left = `${randomX}px`;
        yesBtn.style.top = `${randomY}px`;
    });

    yesBtn.addEventListener("click", () => {
        proposalPage.classList.add("hidden");
        yesPage.classList.remove("hidden");
        noPage.classList.add("hidden"); 
    });

    noBtn.addEventListener("click", () => {
        proposalPage.classList.add("hidden");
        noPage.classList.remove("hidden");
        yesPage.classList.add("hidden");
    });
});

function goBack() {
    document.getElementById("proposalPage").classList.remove("hidden");
    document.getElementById("yesPage").classList.add("hidden");
    document.getElementById("noPage").classList.add("hidden");
}

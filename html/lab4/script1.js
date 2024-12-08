console.log("HTTP/2");

document.getElementById("change-size").addEventListener("click", () => {
    const images = document.querySelectorAll("img");
    images.forEach(img => {
        img.style.width = img.style.width === "200px" ? "150px" : "200px";
        img.style.height = img.style.height === "200px" ? "150px" : "200px";
    });
})
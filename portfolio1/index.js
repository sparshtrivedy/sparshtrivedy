const button = document.querySelector("button");
const para = document.getElementById("more-info");
const cafekisokHeading = document.getElementById("cafe-kiosk-heading");
const cafeKioskContent = document.getElementById("cafe-kiosk-content");
const imagePartitionHeading = document.getElementById("image-partition-heading");
const imagePartitionContent = document.getElementById("image-partition-content");
const backgroundGeneratorHeading = document.getElementById("background-generator-heading");
const backgroundGeneratorContent = document.getElementById("background-generator-content");
const imageDetectorHeading = document.getElementById("image-detector-heading");
const imageDetectorContent = document.getElementById("image-detector-content");
const noteMakerHeading = document.getElementById("note-maker-heading");
const noteMakerContent = document.getElementById("note-maker-content");
const cafeKioskIcon = document.getElementsByClassName("ck-icon")[0];
const imagePartitionIcon = document.getElementsByClassName("ip-icon")[0];
const backgroundGeneratorIcon = document.getElementsByClassName("bg-icon")[0];
const imageDetectorIcon = document.getElementsByClassName("id-icon")[0];
const noteMakerIcon = document.getElementsByClassName("nm-icon")[0];
const facts = ["I have played Tabla, a classical Indian percussion instrument for over 9 years", "I have a working knowledge of the Sanskrit language",
                "I enjoy reading mythological books, and have read several regional versions and interpretations of epics like the Mahabharata and Ramayana",
                "My favourite outing is to local cafes around Vancouver, and trying their Lattes and Cold Brews (iced coffee >> hot coffee)", 
                "My first name is a Sanskrit word meaning touch"];

const funFactDisplay = () => {
    if (button.innerHTML === 'Fun Fact') {
        let randomNum = Math.floor(Math.random() * 5);
        para.innerHTML = facts[randomNum];
        para.style.display = 'block';
        button.innerHTML = 'close';
    } else {
        para.style.display = 'none';
        button.innerHTML = 'Fun Fact';
    }
}

cafekisokHeading.addEventListener("click", () => {
    if (cafeKioskIcon.className === "fa-solid fa-angle-down angle-icon ck-icon") {
        cafeKioskContent.style.display = 'block';
        cafeKioskIcon.className = "fa-solid fa-angle-up angle-icon";
    } else if (cafeKioskIcon.className === "fa-solid fa-angle-up angle-icon") {
        cafeKioskContent.style.display = 'none';
        cafeKioskIcon.className = "fa-solid fa-angle-down angle-icon ck-icon";
    }
});

imagePartitionHeading.addEventListener("click", () => {
    if (imagePartitionIcon.className === "fa-solid fa-angle-down angle-icon ip-icon") {
        imagePartitionContent.style.display = 'block';
        imagePartitionIcon.className = "fa-solid fa-angle-up angle-icon";
    } else if (imagePartitionIcon.className === "fa-solid fa-angle-up angle-icon") {
        imagePartitionContent.style.display = 'none';
        imagePartitionIcon.className = "fa-solid fa-angle-down angle-icon ip-icon";
    }
});

backgroundGeneratorHeading.addEventListener("click", () => {
    if (backgroundGeneratorIcon.className === "fa-solid fa-angle-down angle-icon bg-icon") {
        backgroundGeneratorContent.style.display = 'block';
        backgroundGeneratorIcon.className = "fa-solid fa-angle-up angle-icon";
    } else if (backgroundGeneratorIcon.className === "fa-solid fa-angle-up angle-icon") {
        backgroundGeneratorContent.style.display = 'none';
        backgroundGeneratorIcon.className = "fa-solid fa-angle-down angle-icon bg-icon";
    }
});

imageDetectorHeading.addEventListener("click", () => {
    if (imageDetectorIcon.className === "fa-solid fa-angle-down angle-icon id-icon") {
        imageDetectorContent.style.display = 'block';
        imageDetectorIcon.className = "fa-solid fa-angle-up angle-icon";
    } else if (imageDetectorIcon.className === "fa-solid fa-angle-up angle-icon") {
        imageDetectorContent.style.display = 'none';
        imageDetectorIcon.className = "fa-solid fa-angle-down angle-icon id-icon";
    }
});

noteMakerHeading.addEventListener("click", () => {
    if (noteMakerIcon.className === "fa-solid fa-angle-down angle-icon nm-icon") {
        noteMakerContent.style.display = 'block';
        noteMakerIcon.className = "fa-solid fa-angle-up angle-icon";
    } else if (noteMakerIcon.className === "fa-solid fa-angle-up angle-icon") {
        noteMakerContent.style.display = 'none';
        noteMakerIcon.className = "fa-solid fa-angle-down angle-icon nm-icon";
    }
});

button.addEventListener("click", funFactDisplay);
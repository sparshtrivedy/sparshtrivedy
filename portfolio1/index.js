const button = document.querySelector("button");
const para = document.getElementById("more-info");
const cafekisokHeading = document.getElementById("cafe-kiosk-heading");
const cafeKioskContent = document.getElementById("cafe-kiosk-content");
const imagePartitionHeading = document.getElementById("image-partition-heading");
const imagePartitionContent = document.getElementById("image-partition-content");
const vibingHeading = document.getElementById("vibing-heading");
const vibingContent = document.getElementById("vibing-content");
const imageDetectorHeading = document.getElementById("image-detector-heading");
const imageDetectorContent = document.getElementById("image-detector-content");
const personalBudgetHeading = document.getElementById("personal-budget-heading");
const personalBudgetContent = document.getElementById("personal-budget-content");
const noteMakerHeading = document.getElementById("note-maker-heading");
const noteMakerContent = document.getElementById("note-maker-content");
const attrTableHeading = document.getElementById("attr-table-heading");
const attrTableContent = document.getElementById("attr-table-content");
const modalHeading = document.getElementById("modal-heading");
const modalContent = document.getElementById("modal-content");
const refactorHeading = document.getElementById("refactor-heading");
const refactorContent = document.getElementById("refactor-content");
const enableHeading = document.getElementById("enable-heading");
const enableContent = document.getElementById("enable-content");
const cafeKioskIcon = document.getElementsByClassName("ck-icon")[0];
const imagePartitionIcon = document.getElementsByClassName("ip-icon")[0];
const vibingIcon = document.getElementsByClassName("vb-icon")[0];
const imageDetectorIcon = document.getElementsByClassName("id-icon")[0];
const noteMakerIcon = document.getElementsByClassName("nm-icon")[0];
const personalBudgetIcon = document.getElementsByClassName("pb-icon")[0];
const attrTableIcon = document.getElementsByClassName("at-icon")[0];
const modalIcon = document.getElementsByClassName("m-icon")[0];
const enableIcon = document.getElementsByClassName("e-icon")[0];
const refactorIcon = document.getElementsByClassName("r-icon")[0];
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

vibingHeading.addEventListener("click", () => {
    if (vibingIcon.className === "fa-solid fa-angle-down angle-icon vb-icon") {
        vibingContent.style.display = 'block';
        vibingIcon.className = "fa-solid fa-angle-up angle-icon";
    } else if (vibingIcon.className === "fa-solid fa-angle-up angle-icon") {
        vibingContent.style.display = 'none';
        vibingIcon.className = "fa-solid fa-angle-down angle-icon vb-icon";
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

personalBudgetHeading.addEventListener("click", () => {
    if (personalBudgetIcon.className === "fa-solid fa-angle-down angle-icon pb-icon") {
        personalBudgetContent.style.display = 'block';
        personalBudgetIcon.className = "fa-solid fa-angle-up angle-icon";
    } else if (personalBudgetIcon.className === "fa-solid fa-angle-up angle-icon") {
        personalBudgetContent.style.display = 'none';
        personalBudgetIcon.className = "fa-solid fa-angle-down angle-icon pb-icon";
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

attrTableHeading.addEventListener("click", () => {
    if (attrTableIcon.className === "fa-solid fa-angle-down angle-icon at-icon") {
        attrTableContent.style.display = 'block';
        attrTableIcon.className = "fa-solid fa-angle-up angle-icon";
    } else if (attrTableIcon.className === "fa-solid fa-angle-up angle-icon") {
        attrTableContent.style.display = 'none';
        attrTableIcon.className = "fa-solid fa-angle-down angle-icon at-icon";
    }
});

modalHeading.addEventListener("click", () => {
    if (modalIcon.className === "fa-solid fa-angle-down angle-icon m-icon") {
        modalContent.style.display = 'block';
        modalIcon.className = "fa-solid fa-angle-up angle-icon";
    } else if (modalIcon.className === "fa-solid fa-angle-up angle-icon") {
        modalContent.style.display = 'none';
        modalIcon.className = "fa-solid fa-angle-down angle-icon m-icon";
    }
});

enableHeading.addEventListener("click", () => {
    if (enableIcon.className === "fa-solid fa-angle-down angle-icon e-icon") {
        enableContent.style.display = 'block';
        enableIcon.className = "fa-solid fa-angle-up angle-icon";
    } else if (enableIcon.className === "fa-solid fa-angle-up angle-icon") {
        enableContent.style.display = 'none';
        enableIcon.className = "fa-solid fa-angle-down angle-icon e-icon";
    }
});

refactorHeading.addEventListener("click", () => {
    if (refactorIcon.className === "fa-solid fa-angle-down angle-icon r-icon") {
        refactorContent.style.display = 'block';
        refactorIcon.className = "fa-solid fa-angle-up angle-icon";
    } else if (refactorIcon.className === "fa-solid fa-angle-up angle-icon") {
        refactorContent.style.display = 'none';
        refactorIcon.className = "fa-solid fa-angle-down angle-icon r-icon";
    }
});

button.addEventListener("click", funFactDisplay);
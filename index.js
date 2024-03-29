const button = document.getElementById("fun-fact");
const para = document.getElementById("more-info");
const overlay = document.getElementsByClassName("overlay")[0];
const overlaid = document.getElementsByClassName("overlaid")[0];
const woodWorksHeading = document.getElementById("wood-works-heading");
const woodWorksContent = document.getElementById("wood-works-content");
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
const woodWorksIcon = document.getElementsByClassName("ww-icon")[0];
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

woodWorksHeading.addEventListener("click", () => {
    if (woodWorksIcon.className === "fa-solid fa-angle-down angle-icon ww-icon") {
        woodWorksContent.style.display = 'block';
        woodWorksIcon.className = "fa-solid fa-angle-up angle-icon";
    } else if (woodWorksIcon.className === "fa-solid fa-angle-up angle-icon") {
        woodWorksContent.style.display = 'none';
        woodWorksIcon.className = "fa-solid fa-angle-down angle-icon ww-icon";
    }
});

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


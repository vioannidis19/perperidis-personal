let navIcon = document.querySelector('.nav-icon');
navIcon.addEventListener('click', () => {
    document.querySelector('.mobile-nav').classList.toggle('shown');
});

let mobileListItem = document.querySelectorAll('.mobile-list-item');
for(let i = 0; i < mobileListItem.length; i++) {
    mobileListItem[i].addEventListener('click', () => {
        document.querySelector('.mobile-nav').classList.toggle('shown');
    })
}

// let seeMore = document.querySelector('.see-more');
// seeMore.addEventListener('click', () => {
//     let studyInfo = document.querySelector('.study-info');
//     studyInfo.classList.toggle('extended');
//     seeMore.innerHTML = seeMore.innerHTML === "Δείτε Περισσότερα" ? "Δείτε Λιγότερα" : "Δείτε Περισσότερα";
// })
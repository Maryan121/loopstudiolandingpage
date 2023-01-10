let pagesSec = document.getElementById('pages-sec');
let menuIcon = document.getElementById('menuIcon');
let closeIcon = document.getElementById('closeIcon');
let ul = document.querySelector('ul');

menuIcon.addEventListener('click',openMenu);
closeIcon.addEventListener('click',closeMenu);

function openMenu(){
    closeIcon.style.display = 'flex';
    menuIcon.style.display = 'none';
    pagesSec.style.display = 'flex';
    pagesSec.style.height = '100%';
    ul.style.marginTop = '13rem';
}

function closeMenu(){
    menuIcon.style.display = 'flex';
    pagesSec.style.display = 'none';
    closeIcon.style.display = 'none';
    pagesSec.style.height = 'fit-content';
}
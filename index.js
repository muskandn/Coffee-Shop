// let menu=document.querySelector("#menu-btn");
// let navbar=document.querySelector(".header .flex .navbar");

// menu.onclick =()=>{
//     menu.classList.toggle('fa-times');
//     navbar.classList.toggle('active');
// }

// window.onscroll =()=>{
//     menu.classList.remove('fa-times');
//     navbar.classList.remove('active');
// }








// errors
// 1.in mobile shape corner bar is not working means the items in navbar becomes in invisible 
// mainly its on js file may be and may be not as 2nd portion is working perfectly
// 2.last contact us picture is not working--------------SOLVED IN =IMAGE CLASS DIDN'T PUT .
const primayNav=document.querySelector('.primary-navigation');
const navtoggle=document.querySelector('.mobile-nav-toggle');

navtoggle.addEventListener('click',()=>{
    const visibility=primayNav.getAttribute('data-visible');
    
    if(visibility==="false"){
        
        primayNav.setAttribute("data-visible",true);
        navtoggle.setAttribute("aria-expanded",true)
    }
    else if(visibility==="true"){
        primayNav.setAttribute("data-visible",false);
    }
})

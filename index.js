$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('nav').toggleClass('active')
    })
})


// window.addEventListener('scroll', () =>{
//     const header = document.querySelector('header')
//     header.classList.toggle('sticky', window.scrollY > 0)
// })



const cursor = document.querySelector('.cursor')
document.addEventListener('mousemove', (e) =>{
    cursor.style.left = e.pageX + 'px'
    cursor.style.top = e.pageY + 'px'
})
var typed=new Typed(".text",{
    strings:["Dreamer","Hustler","Achiever"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})
 let sections = document.querySelectorAll('section');

 window.onscroll = () => {
    sections.forEach( sec=> {
        let top= window.scrollY;
        let offset =sec.offsetTop;
        let height= sec.offsetHeight;

        if(top >= offset && top < offset + height)
        {
            sec.classList.add('show-animate');

        }
        else {
            sec.classList.remove('show-animate');
        }
    })
 }
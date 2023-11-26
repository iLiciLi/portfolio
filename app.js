document.querySelectorAll('a[href^="."]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting)
        {
            entry.target.classList.add('pustiAnim');
        }
        else
        {
            entry.target.classList.remove('pustiAnim')
        }
    })
})


const sakriveniElementi = document.querySelectorAll("div,h1");
sakriveniElementi.forEach((el)=> observer.observe(el));

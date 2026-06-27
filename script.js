const items=document.querySelectorAll('.reveal');
const io=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.12});
items.forEach(i=>io.observe(i));

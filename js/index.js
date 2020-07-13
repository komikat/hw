var position = window.pageYOffset;
console.log(position);
d = new Date();
d.getHours();

const coverPage = document.getElementById('cover');
var opacity = 1;
var time = d.getHours().toString()+(d.getMinutes()+7).toString();


const timediv = document.getElementById('time')
function changePos() {
    time = (d.getHours().toString()+(d.getMinutes()+7).toString());
    position = window.pageYOffset;
    opacity = 1 - position/250
    
    coverPage.style.opacity = opacity;
    console.log(position);
    timediv.innerHTML = "will reach before "+time +"hrs";
    
}
window.addEventListener('scroll', changePos)

console.log('hello brother')

function scrollToTop() {
  window.scrollTo({
    top: window.outerHeight*9/8,
    behavior: 'smooth'
  });
}


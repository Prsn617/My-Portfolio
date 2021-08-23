const t_on = document.getElementById("t1");
const t_off = document.getElementById("t2");
const body = document.getElementById("body");

t_on.addEventListener('click', ()=>{
    t_on.classList.add('hidden');
    t_off.classList.remove('hidden');
    body.classList.remove('dark');

});

t_off.addEventListener('click', ()=>{
    t_off.classList.add('hidden');
    t_on.classList.remove('hidden');
    body.classList.add('dark');

});
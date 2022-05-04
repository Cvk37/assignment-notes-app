var btn = document.querySelector(".btn");
var Ul = document.querySelector("ul");
btn.addEventListener("click" , ()=>{
var LI = document.createElement("li");
var span=document.createElement("span");
const time = parseInt(prompt("enter time in milliseconds"));
var text = document.querySelector(".text-box").value;
Ul.appendChild(LI);
Ul.appendChild(span);
const options = {weekday : "short", month:"short", day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"};
const today = new Date();
LI.innerHTML+= "Task :"+" "+ text+"<br>"+"<br>";
span.innerHTML+=  "Noted Time:"+today.toLocaleDateString('en-IN',options);
Ul.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

const timer =
    setTimeout(()=>{
        alert( `It's Time For ${text}!!!!`)
    },time);
    timer();
});

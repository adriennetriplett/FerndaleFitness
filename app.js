
let Buttons = document.querySelectorAll("button.selectDay");

for (let button of Buttons) {


 button.addEventListener('click', (e) => {
  
  const et = e.target;
	console.log(et);
	type_of_target  = typeof et
	console.log(type_of_target);
  const active = document.querySelector(".active");
console.log(active);

  if (active) {
    active.classList.remove("active");
   }

	if (et.nodeName === 'SPAN') {
		et.parentElement.classList.add("active");
	}
	else {
		et.classList.add("active");
	}
	let allDays = document.querySelectorAll('.day');
	
  for (let day of allDays) {

    if(day.getAttribute('day-number') === button.getAttribute('day-number')) {
      day.style.display = "block";
     }

     else {
        day.style.display = "none";
      }
    }
 });
}
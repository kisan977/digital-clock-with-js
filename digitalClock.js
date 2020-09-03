const clock=document.querySelector('.clock');




const tick=()=>{
const now = new Date();
const h = now.getHours();
const m = now.getMinutes();
const s = now.getSeconds();
let formatHours = convertFormat(h);

const html=`
<span>${h}</span> :

<span>${m}</span> :
<span>${s}</span> 
<span>${formatHours}</span>
`;

clock.innerHTML=html;



}


function convertFormat(time){


	let format = 'AM';
	if(time>=12){
		format = 'PM';
	}
	return format;
}

setInterval(tick,1000);
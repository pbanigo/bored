const suggestion = document.querySelector('p');
const synth = window.speechSynthesis; //Added Voice synthesis

function suggest(){
	document.querySelector('h2').textContent = 'Still Bored?';
	let activity = document.querySelector('select').value;
	//document.querySelector('h2').style.display = 'none';
	document.querySelector('p').style.display = 'none';	
	document.querySelector('label').textContent	= 'Pick something else';
	const url = `https://www.boredapi.com/api/activity/?type=${activity}&price=0`;
	fetch(url, {mode: 'cors'})
    .then(res => res.json()) // parse response as JSON
    .then(data => {
    	document.querySelector('h1').textContent = `You can ${data.activity}`;
    	synth.speak(new SpeechSynthesisUtterance(document.querySelector('h1').textContent));//This reads any text in that element
    })
    .catch(err => {
    	console.log(`error ${err}`)
    });

//Generate Random Facts
	const url2 = 'https://uselessfacts.jsph.pl/random.json?language=en';
    fetch(url2, {mode: 'cors'})
    .then(res => res.json()) // parse response as JSON
    .then(data => {
    	console.log(data.text);
    	document.getElementById('random').textContent = data.text;
    	//document.querySelector('h1').textContent = `You can ${data.activity}`;
    })
    .catch(err => {
    	console.log(`error ${err}`)
    });
    
}
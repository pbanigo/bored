const suggestion = document.querySelector('p');

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

    	//img.src = data.message;
    	//const base= data.drinks[0];
    	console.log(url);
    	console.log(data)
    	//document.querySelector('title').textContent = `${base.strAlcoholic} Drink: How to make a ${base.strDrink}`;
    	//document.querySelector('h2').textContent = base.strDrink;
    	//document.querySelector('img').src = base.strDrinkThumb;
    	//document.getElementById('instructions').textContent = base.strInstructions;
    })
    .catch(err => {
    	console.log(`error ${err}`)
    });
}
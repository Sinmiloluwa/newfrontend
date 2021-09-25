
function calculate() {
	var input = document.getElementById('amount').value;
	// data to be sent to the POST request
	let _data = {
  	amount: input,
	}

	fetch('http://pennee.herokuapp.com/api/result', {
	  method: "POST",
	  mode: 'cors',
	  body: JSON.stringify(_data),
	  headers: {"Content-type": "application/json; charset=UTF-8",
	  			"Access-Control-Allow-Origin" :"http://pennee.herokuapp.com"
	}
	})
	.then(response => response.json()) 
	.then(json => {
		console.log(json.data)
		document.getElementById('price').innerText = json.data.toFixed(2)
	})
	.catch(err => console.log(err));

}





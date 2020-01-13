document.addEventListener('DOMContentLoaded', () => {
	setInterval (update, 3000)});

var puntaje = 0; 

function update (){
	var reqURL = 'https://io.adafruit.com/api/v2/veintiseis/feeds/score?x-aio-key=aio_cRxP96fQyvHmcrfCQSy5MFZ1tDgn'
	var req = new XMLHttpRequest();
	req.open('GET', reqURL, true);
	req.onreadystatechange = function () {
	if (req.readyState == 4)
		if  (req.status == 200) {
			obj = JSON.parse(req.responseText);
 			puntaje.innerHTML += obj.feeds[0].last_value;
			});
		}
		else {
	  	html.innerHTML+="<p>error "+req.status;
 		}
	};
	req.send(null);

}
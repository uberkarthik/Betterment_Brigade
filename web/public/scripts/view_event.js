
const database = firebase.database();
const ref = database.ref("event");

$(document).ready(function() {
	setData();
})

function clicker(objButton){
	console.log(objButton.value);
	window.location.href = "chat.html?id="+objButton.value ;
}

function setData(){
var event;

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');

ref.once('value').then(function(data){
  if(data.val()!=null)
  {
    for (let [key, value] of Object.entries(data.val())) {
    	if(myParam==key)
    	{
    		// console.log(key);
    		event = value;
			var post = 
			`
			<br>
			<div class="w3-container w3-white">
			  <h2>${event["title"]}</h2>
			  <p>Event Date: <b>8/20/2020</b></p>
			  <p>Event Time: <b>11:30 am</b></p>
			  <p>Hosted By: <b>Org 1</b></p>
			  <p>Event Location: <b>Venice Beach</b></p>
			  <p>Number of Volunteers: <b>80 to 150</b></p>
			  <p>Description: <b>${event["description"]}</b></p>
			  <button type="button" class="w3-button w3-red w3-margin-top">Enroll</button>
			  <button type="button" class="w3-button w3-red w3-margin-top" value=${key} onclick="clicker(this)">Chat</button>
			  <br>
			</br>`


			$('#event').append(post);
    	}
    	// console.log(key);
  }
  }
})

}
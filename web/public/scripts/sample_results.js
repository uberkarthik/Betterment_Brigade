  const database = firebase.database();
  const ref = database.ref("event");



$(document).ready(function() {
	setData();
})

function clicker(objButton){
	console.log(objButton.value);
	window.location.href = "view_event_page.html?id="+objButton.value ;
}

function setData() { 
    ref.once('value').then(function(data){
      if(data.val()!=null)
      {
        for (let [key, value] of Object.entries(data.val())) {
                var entry = 
                  `<div class="w3-container w3-white w3-padding-1">
                    <h4>${value["title"]}</h4>
                    <h>Description: ${value["description"]}</br><h>
                    <h>Zipcode: ${value["zipcode"]}<h>
                    <input type="hidden" class='event' name="event">
                    <div class="w3-container w3-white w3-padding-1">
                                              <div class="w3-row-padding" style="margin:0 -16px;">
                                                <div class="w3-margin-bottom">
                                                        <button class="button" value=${key} onclick="clicker(this)">More Info</button>
                                                    </div>
                                              </div>
                                          </div>
                  </div>`

                  $('#container').append(entry);

      	}
      }
    })
  }
// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.

  // Initialize Firebase


var submitButtonElement = document.getElementById('submit');
// alert("submitted")

$(document).ready(function() {

  $("#navbar").load("navbar.html")

  $("#submit").click(function(){
    firebase.database().ref('/event/').push({
    title: $("#title").val(),
    zipcode: $("#zipcode").val(),
    description: $("#froala-editor").val()
  }).catch(function(error) {
    console.error('Error writing new message to Firebase Database', error);
  });
    alert("click");

  })



var provider = new firebase.auth.GoogleAuthProvider();

console.log("Hello");
provider.addScope('profile');
provider.addScope('email');
 $("#log-in").click(function(){
    firebase.auth().signInWithPopup(provider).then(function(result) {
     // This gives you a Google Access Token.
     var token = result.credential.accessToken;
     // The signed-in user info.
     var user = result.user;
    })
 })




});





// Returns the signed-in user's profile Pic URL.
function getProfilePicUrl() {
  return firebase.auth().currentUser.photoURL || '/images/profile_placeholder.png';
}

// Returns the signed-in user's display name.
function getUserName() {
  return firebase.auth().currentUser.displayName;
}

function signIn() {
  // Sign in Firebase using popup auth and Google as the identity provider.
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
}


// Returns true if a user is signed-in.
function isUserSignedIn() {
  return !!firebase.auth().currentUser;
}

function signOut() {
  console.log("hai");
  // Sign out of Firebase.
  firebase.auth().signOut();
}

function authStateObserver(user) {
  if (user) { 
    var profilePicUrl = getProfilePicUrl();
    var userName = getUserName();
    console.log(getUserName());
    $("#log-in").text(getUserName());
    $("#log-out").removeClass("hide");
    console.log("hia")
  } else { // User is signed out!


  }
}


$( document ).ready(function() {
	firebase.auth().onAuthStateChanged(authStateObserver);

	$("#log-out").click(function(){
		signOut();
	})

});

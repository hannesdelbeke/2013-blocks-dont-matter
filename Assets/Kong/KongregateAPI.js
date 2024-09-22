//#pragma strict

var isKongregate = false;
var userId = 0;
var username = "Guest";
var gameAuthToken = "";
var kongregate;

public var guiSkin : GUISkin;

// Begin the API loading process if it is available
Application.ExternalEval
(
  "if(typeof(kongregateUnitySupport) != 'undefined'){" +
  " kongregateUnitySupport.initAPI('KongregateAPI', 'OnKongregateAPILoaded');" +
  "};"
);
    // Register a sign in handler to let us know if the user signs in to Kongregate. Notice how we are using the
    // Javascript API along with Application.ExternalEval, and then calling back into our app using SendMessage.
    // We deliver the new user information as a simple pipe-delimited string, which we can easily parse using String.Split.
    Application.ExternalEval(
   "kongregate.services.addEventListener('login', function(){" +
    "   var services = kongregate.services;" +
    "   var params=[services.getUserId(), services.getUsername(), services.getGameAuthToken()].join('|');" +
    "   kongregateUnitySupport.getUnityObject().SendMessage('MyUnityObject', 'OnKongregateUserSignedIn', params);" +
    "});"
     );
    
function Awake () {
DontDestroyOnLoad (transform.gameObject);
username = "Guest";
} 

/*
function Start () {

}

function Update () {

}
function LoadAPI ()
{

}*/

function OnKongregateAPILoaded(userInfoString){
	// We now know we're on Kongregate
	print("UNITY function loaded");
	Debug.Log("ON KONG");
	isKongregate = true;
	
	// Split the user info up into tokens
	var params = userInfoString.Split("|"[0]);
	userId = parseInt(params[0]);
	username = params[1];
	gameAuthToken = params[2];
}	     
    // Called when the Kongregate user signs in, parse the tokenized user-info string that we
    // generate below using Javascript.
function OnKongregateUserSignedIn(userInfoString){
    var params = userInfoString.Split("|"[0]);
    userId = parseInt(params[0]);
    username = params[1];
    gameAuthToken = params[2];
}
/*
function SubmitScoreLvl(myScore : int , lvl : int)
{
// Begin the API loading process if it is available
Application.ExternalCall("kongregate.stats.submit","ScoreLvl"+lvl,myScore);
   Debug.Log("score of " +myScore + " submitted");
   
}
function SubmitUnlockLvl(_unlockedLevel : int){
	Application.ExternalCall("kongregate.stats.submit","Unlocked",_unlockedLevel);
}*/
function SubmitCompleteLvl(_completedLevel : int){
	Application.ExternalCall("kongregate.stats.submit","Completed",_completedLevel);
}

/*
// Assuming we have a TextField named "my_txt":
function scoresCallback ( result:Object ):void
{
    my_txt.appendText("High score result, success=" + result.success );
    for ( var i:int = 0; i < result.list.length; i++ ){
        var position:int = i + 1;
        my_txt.appendText("\n"+position + ". " + result.list[i].username + " - " + result.list[i].score );
    }
}
// Request the list
kongregate.scores.requestList ( scoresCallback );
*/
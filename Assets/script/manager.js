#pragma strict

var stringToEdit : String = "scene2";
function OnGUI () {
    // Make a text field that modifies stringToEdit.
    stringToEdit = GUI.TextField (Rect (10, 10, 200, 20), stringToEdit, 25);
    
		var currentscene = Application.loadedLevelName ;
		if(currentscene)
   		{
   			if (GUI.Button(Rect(10,40,200,30),"Refresh current: "+currentscene + " (esc)"))
			Application.LoadLevel(currentscene);
    	}
    if (GUI.Button(Rect(10,70,50,30),"Load"))
		Application.LoadLevel(stringToEdit);
}
function Awake () {
   // DontDestroyOnLoad (transform.gameObject);
}

var test : int = 0 ;

function Start () {

}

function Update () {
if (Input.GetKeyUp(KeyCode.Escape)) 
	{
		//reset scene
		var currentscene = Application.loadedLevelName ;
		Application.LoadLevel(currentscene);
	}
}
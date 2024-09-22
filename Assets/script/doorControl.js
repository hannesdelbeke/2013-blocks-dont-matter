#pragma strict

var doors : GameObject[] ;
var swap : boolean = false;
var doorcontrol1 : GameObject;
var doorcontrol2 : GameObject;

function Awake()
{

		if(swap)
		{
			doorcontrol1.active = true ; 
			doorcontrol2.active = false ;
		}
		else
		{
			doorcontrol1.active = false ; 
			doorcontrol2.active = true ;
		}
}
 
function OnTriggerEnter (collid : Collider) {  
	if(collid.tag == "Player")
	{
		Debug.Log("activateDoor");
		for (var doorElement in doors) 
		{
			doorElement.GetComponent(door).activateDoor();
		}
		swap = !swap;
		
		if(swap)
		{
			doorcontrol1.active = true ; 
			doorcontrol2.active = false ;
		}
		else
		{
			doorcontrol1.active = false ; 
			doorcontrol2.active = true ;
		}
	}
}
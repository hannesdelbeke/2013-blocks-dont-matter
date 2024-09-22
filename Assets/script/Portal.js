#pragma strict

var ConnectedPortal : GameObject ;
var JustEntered : boolean = false;

function OnTriggerEnter (collid : Collider) {  
	if(collid.tag == "Player" && JustEntered==false)
	{
		Debug.Log("teleport");
		collid.transform.position = ConnectedPortal.transform.position;
		ConnectedPortal.GetComponent(Portal).Enter();
	}
	else
	JustEntered=false;
}
function Enter()
{
JustEntered = true;
}
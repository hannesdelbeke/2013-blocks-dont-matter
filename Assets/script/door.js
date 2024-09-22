#pragma strict
var up : boolean = false ;
var dist : float = 2 ;
var speed : float = 1;
var storePos : Vector3 ;
var activated : boolean = false;
var useY : boolean = true;

function Start () 
{
	//store down position
	if(up)
		{
			storePos = transform.position ;
			storePos.y -= dist ;
			storePos.x += dist ;
		} 
	else if(!up)
		storePos = transform.position;
}
function Update () 
{
	if(activated && up) //goes down
	transform.Translate(Vector3.up*(-1)*Time.deltaTime) ;
	
	if(useY)
	{
		if(storePos.y > transform.position.y )
		{
			transform.position.y = storePos.y ;
			activated= false;	
			up=false;
		}
		
		if(activated && !up) //goes up
		transform.Translate(Vector3.up*Time.deltaTime) ;
		if(storePos.y + dist < transform.position.y )
		{
			transform.position.y = storePos.y+dist ;
			activated= false;	
			up = true;
		}
	}
	else
	{
		if(storePos.x < transform.position.x )
		{
			transform.position.x = storePos.x;
			activated= false;	
			up=false;
		}
		
		if(activated && !up) //goes up
		transform.Translate(Vector3.up*Time.deltaTime) ;
		if(storePos.x - dist > transform.position.x )
		{
			transform.position.x = storePos.x - dist ;
			activated = false;	
			up = true;
		}
	
	}
}
function activateDoor ()
{
	activated= true;
}
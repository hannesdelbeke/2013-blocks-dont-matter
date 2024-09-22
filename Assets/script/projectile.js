//#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter (collision : Collision) {
	/*
	//check if hit player
	if(collision.transform.tag == "Player")
	{
		collision.transform.GetComponent("2DController").CreatePlatform ();
		Debug.Log("hitplayer");
	}
	
*/
	//destroy prokectile
	Destroy(gameObject);
}


function OnTriggerEnter (collid : Collider) {  

	Destroy(gameObject);
}

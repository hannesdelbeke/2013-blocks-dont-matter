#pragma strict
var projectile : GameObject ;
var interval: float = 1;
var projectile_speed : float = 10; 
private var counter : float = 0;
function Start () {
}
function Update () {
	counter-= Time.deltaTime ;
	if (counter <= 0 )
	{
	//	spawn
		var projectile : GameObject = Instantiate (projectile, transform.position,  transform.rotation );
		projectile.GetComponent(Rigidbody).AddRelativeForce (Vector3.up * projectile_speed );
		counter = interval ;
	}

}


 function OnDrawGizmos () 
 {
 	var target : Vector3 = transform.position ;
 	target += transform.up  * 50 ;
    if(target != null) {
        // Draws a blue line from this transform to the target
        Gizmos.color = Color.red;
        Gizmos.DrawLine (transform.position, target);
    }
}
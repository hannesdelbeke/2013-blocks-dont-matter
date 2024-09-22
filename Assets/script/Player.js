#pragma strict

var platform : GameObject ;
var spawnPoint : GameObject; // The character will spawn here
//var dubblejump : boolean = false;
//var platformDoubleJump : boolean = false;

//public var MoveDirection : Vector3 = Vector3.zero;
var isGrounded : boolean = true;
var respawnNow : boolean = false;
var gravity : float = 20;
var jumpHeight : float = 8;
var walkSpeed : float = 3;
var KongObj : GameObject ;

/*******************************
 * NonSerialized variables
 *******************************/

// The character's current horizontal direction
//@System.NonSerialized
//var horizontalDirection : int;

// The character's current direction (on all planes)
@System.NonSerialized
var direction : Vector3;

// The character's current movement offset
@System.NonSerialized
var offset : Vector3;

function Awake() {
     Spawn();

}
function Start () {

}

function FixedUpdate() {
    // Make sure the character stays in the 2D plane
    transform.position.z = 0;
}

function Update () 
{
     if(!KongObj)
    {
	    KongObj = GameObject.Find("Kongregate");
    }
/*	if (Input.GetAxis("Horizontal") )
	{
		horizontalDirection = Input.GetAxisRaw("Horizontal");
		
	}*/
	//see if grounded
//	isGrounded = true;
	
	MoveCharacter();
}
 
function Spawn() {
    transform.position = spawnPoint.transform.position;
}
function MoveCharacter() {
    ApplyMovement();
    if(!isGrounded)
    ApplyGravity();
    // Move the character (with deltaTime to ensure frame rate independence)
     //Move(offset * Time.deltaTime);
  // 	this.transform.Translate(MoveDirection);
	this.transform.Translate(offset * Time.deltaTime);
}
 
function ApplyJump () {
	isGrounded = false;
     offset.y =  jumpHeight;
}
 
function ApplyGravity () {
     offset.y -=  gravity * Time.deltaTime;
}

function ApplyMovement() {
    switch (isGrounded) 
    {
        // The character is on the ground
        case true:
            // usedExtraJump = false;
            
                 offset = Vector3(Input.GetAxis("Horizontal"), 0, 0) *  walkSpeed;
                if (Input.GetButtonDown("Jump")) 
                ApplyJump();
        break;
 
        // The character is midair
        case false:
            
                 offset.x = Input.GetAxis("Horizontal") *  walkSpeed;
                // Apply an extra jump if the jump input button is pressed a second time
                // The final jump height will be greatest at the apex of the first jump
                //if (Input.GetButtonDown("Jump") && !  usedExtraJump && dubblejump) {
              //  if (Input.GetAxisRaw("Vertical") == 1 && !  usedExtraJump) {
                   //	 usedExtraJump = true;
                   // ApplyJump();
                //}
            
        break;
    }
}
 

function OnTriggerEnter (collid : Collider) {   
	if(collid.tag == "kill")
	{   
		CreatePlatform () ;
	}
	else if(collid.tag == "finish")
	{
		 var nextlvl : String = collid.GetComponent(finish).nextLVL ; 
		  Application.LoadLevel (nextlvl);
		  var _nextlvl : int =  int.Parse(nextlvl);
		  KongObj.GetComponent(KongregateAPI).SubmitCompleteLvl(_nextlvl-1);
	}
	
		//check if hit player
	else if(collid.tag == "killDestroy")
	{
	Debug.Log("hit projectile");
		CreatePlatform ();
		//destroy prokectile
		Destroy(collid);
	}
	if(collid.tag == "platform")
	{
		 isGrounded = true;
	}
}

function CreatePlatform () {
		Debug.Log("createplatformpmayer");
	 	//if(! usedExtraJump&&platformDoubleJump || !platformDoubleJump)
	  	// Instantiate (platform, transform.position, Quaternion.identity);
	 	//first make platform, then move to spawn
	   	Spawn() ;
	   	respawnNow = true;
}


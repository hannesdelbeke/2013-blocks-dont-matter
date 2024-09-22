private var thisParticleSystem : ParticleSystem;

 

function FixedUpdate () {

 

    thisParticleSystem = this.GetComponent(ParticleSystem);

    

    if (!thisParticleSystem.loop) {

        Destroy(this.gameObject, thisParticleSystem.duration);

    }

 

}
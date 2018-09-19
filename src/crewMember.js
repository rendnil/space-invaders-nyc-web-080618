class CrewMember {

  constructor(position){
    this.position = position
    this.currentShip  = "Looking for a Rig"
  }


  engageWarpDrive(){
    if (this.position === "Pilot"){


    if (this.currentShip === "Looking for a Rig"){
      return "had no effect"
    }else{
      this.currentShip.warpDrive = "engaged"
    }
  }

  }
  setsInvisibility(){
    if (this.position === "Defender"){


    if (this.currentShip === "Looking for a Rig"){
      return "had no effect"
    }else{
      this.currentShip.cloaked = true
    }
  }

  }
  chargePhasers(){
    if (this.position === "Gunner"){


    if (this.currentShip === "Looking for a Rig"){
      return "had no effect"
    }else{
      this.currentShip.phasers = "charged"
    }
  }

  }








} // end class

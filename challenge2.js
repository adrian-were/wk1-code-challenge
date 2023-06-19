function detectorOfSpeed(speed){
    const limit = 70
    const pointsabove = 5
    const morepoints = 12
    const extraspeed = speed - limit
    const extrapoints = Math.floor(extraspeed / pointsabove)
    if (speed < limit){
        return "Ok"
    }else if (extrapoints > morepoints){
        return "License suspended" 
    
    }else {
        return "points" + 1
    }
    }
    
        
    
    const speed = parseInt("100") // enter speed of the car
    detectorOfSpeed(speed)
    console.log(detectorOfSpeed(speed))
    
function studentGrade(grades) {
    if (grades >= 0 && grades <=100){
        if (grades > 79){
            return "A"
        }else if (grades >= 60 && grades <= 79){
            return "B"
        }else if (grades >= 50 && grades <= 59){
            return "C"
        }else if (grades >= 40 && grades <= 49){
            return "D"
        }else {return "E"}
    }
        
    
}
let grades = parseInt(20) //grades are input here
let student = studentGrade(grades)
console.log(student)
const printObjectProperties = (obj) =>{
    if(Object.keys(obj).length===0){
        console.log("Object is empty");
    }else{
        for(let property in obj){
            console.log(obj[property]);
        }
    }
}

const person = {
    Name : "Ishan",
    age : 20,
    occupation : "Software Engineer"
}

printObjectProperties(person)
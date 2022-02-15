const human = {
    gender:"Man",
    age:30
    
}

const children = Object.create(human);
children.OwnGender = "Female";
children.OwnAge = "5";


function objects(guy){
    for (let key in guy){
        if (guy.hasOwnProperty(key)) {
            console.log(key + ":" +guy[key]);
        }   
    }
}

objects(children);
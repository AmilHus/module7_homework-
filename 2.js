const human = {
    gender:"Man",
    name:"Amil"
}

flag = true;

function CheckString(string, object){
    for (key in object){
        if (string in object || string == object[key]){
            flag = true;
            break;
        }
        else{
            flag = false;
        }
    }
    console.log(flag);
}
CheckString("name",human);
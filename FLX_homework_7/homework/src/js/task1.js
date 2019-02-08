let login = prompt("Enter your login");
const time = new Date().getHours();
if(login === "" || login === null) {
    alert("Canceled.");
} else if (login.length < 4){
    alert("I don't know any users having name length less than 4 symbols");
} else if (login === "User"){
    let pass = prompt("Enter your pass");
    if (pass === "" || pass === null){
        alert("Canceled.");
    } else if (pass === "UserPass"){
        if(time < 20 ){
            alert("Good day, dear User!");
        } else {
            alert("Good evening, dear User!");
        }
    } else{
        alert("Wrong password");
    }
} else if (login === "Admin"){
    let pass = prompt("Enter your pass");
    if (pass === "" || pass === null){
        alert("Canceled.");
    } else if (pass === "RootPass"){
        if(time < 20 ){
            alert("Good day, dear Admin!");
        } else {
            alert("Good evening, dear Admin!");
        }
    } else{
        alert("Wrong password");
    }
} else {
    alert("I don’t know you");
}
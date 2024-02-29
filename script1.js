let arr1 = [ {
    email : "chanthan@gmail.com",
    password : "Chanthan@123"
},
{
    email : "vamsi@gmail.com",
    password : "Vamsi@123"
},
{
    email : "murali@gmail.com",
    password : "Murali@123"
},
]

// var users = localStorage.setItem("arr2", JSON.stringify(arr1));



var Email = document.getElementById("input1");
var Pass = document.getElementById("input2");

var emailIn = document.getElementById("input-1")
var passIn = document.getElementById("input-2")
var phoneIn = document.getElementById("input-3")

function signup(){
    if(emailIn.value != "" && passIn.value != "" && phoneIn.value != ""){
    var objnew = {
        email : emailIn.value,
        password : passIn.value,
        PhoneIn : phoneIn.value
    }}else{
        return false;
    }
    arr1.push(objnew);
    localStorage.setItem("arr2", JSON.stringify(arr1));
}
var getUsers = JSON.parse(localStorage.getItem("arr2"))


function login(){
   var f_user = getUsers.find((user,i) => {
    if(getUsers[i].email == Email.value){
        return true
    }
   })
   if(f_user){
    console.log(f_user)
    if(f_user.password == Pass.value){
        if (window.confirm("your successfully logged in")) {
            window.open("./index3.html", "Thanks for Visiting!");
          }
          
    }else{
        return window.alert("please enter correct details")
    }
   }else{
    return window.alert("please enter correct details")
   }
}



// var emailIn = document.getElementById("input-1")
// var passIn = document.getElementById("input-2")
// var phoneIn = document.getElementById("input-3")

// function signup(){
//     var objnew = {
//         email : emailIn.value,
//         password : passIn.value,
//         PhoneIn : phoneIn.value
//     }
//     getUsers.push(objnew);
//     localStorage.setItem("arr2", JSON.stringify(getUsers));
// }
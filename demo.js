async function login(){
    let res=await fetch('http://localhost:3000/users');
    let data= await res.json();

    let providedEmail=document.querySelector("#loginForm input[type='email']").value;
    let pass= document.querySelector("#loginForm input[type='password']").value;
    let flag=true;
    data.forEach((element)=>{
        if(element.email==providedEmail && element.password==pass){
            flag=false;
            alert("Login Successful");
            window.location.href="./landingPage.html";
        }
    });
    if(flag){
        alert("Incorrect Login Details");
    }
}
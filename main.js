const {Auth} = require('two-step-auth');

window.signUp=async function(){
    let res= await fetch("http://localhost:3000/users");
    let data=await res.json();
    console.log(data);
    let flag=true;
    let providedEmail=document.querySelector("#form input[type='email']").value;
    let name=document.querySelector("#form input[type='text']").value;
    data.forEach((element)=>{
        if(element.email == providedEmail){
            flag=false;
            console.log("Hello");
            alert("Email already exists");
        }
    })
    if(flag){
        try {
            const res = await Auth(providedEmail, "Masai Quora");
            let otp=res.OTP;

            let body={
                name,
                providedEmail,
                otp
            };
            let post= await fetch('http://localhost:3000/tempdata',{
                method:"POST",
                body:JSON.stringify(body),
                headers:{
                    "Content-Type":"application/json"
                }
            });
            let data = await post.json();
            console.log(data);
            window.location.href="otp.html";
        } catch (error) {
            console.log(error)
        }
    }

}
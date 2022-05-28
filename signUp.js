
async function signUp(){
    let res= await fetch("http://localhost:3000/users");
    let data=await res.json();
    console.log(data);
    let flag=true;
    let providedEmail=document.querySelector("#form input[type='email']").value;
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
            console.log("Hello");
            console.log(res);
            console.log(res.mail);
            console.log(res.OTP);
            console.log(res.success);
        } catch (error) {
            console.log(error)
        }
    }

}
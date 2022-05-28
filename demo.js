async function login(){
    let res=await fetch('http://localhost:3000/users');
    let data= await res.json();

    let providedEmail=document.querySelector("#loginForm input[type='email']").value;
    let pass= document.querySelector("#loginForm input[type='password']").value;
    let flag=true;
    data.forEach((element)=>{
        if(element.email==providedEmail && element.password==pass){
            (async function(){
                let nam=element.name;
            let mail = element.email;
            let pas =  element.password;
            let body={
                nam,
                mail,
                pas
            };
            let post=await fetch('http://localhost:3000/loggedInUser',{
                method:"POST",
                body:JSON.stringify(body),
                headers:{
                    "Content-Type":"application/json"
                }
            });
            let dat=await post.json();
            window.location.href="./landingPage.html";
            alert("Login Successful");
            
            })();

            flag=false;
            
        }
    });
    if(flag){
        alert("Incorrect Login Details");
    }
    
}
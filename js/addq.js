
document.querySelector("#addquestion").addEventListener("click",addQ )
var container=document.querySelector("#addQcontainer")

function addQ(){
    
    container.innerHTML="";

    let div=document.createElement("div");
    div.setAttribute("id", "chhotaBox");
   
    let div1=document.createElement("div");
    div1.style.display="flex";
    div1.style.justifyContent="space-between";
    div1.style.fontSize="20px"
    div1.style.padding="10px";
    let divX=document.createElement("div");
    divX.textContent="X";
    divX.style.cursor="pointer";
    divX.onclick=function(){
      
        div.style.display="none";
    }
    let div2=document.createElement("div");
    div2.textContent="Add question";
    div2.style.cursor="pointer";
    
    let  writtenContent=document.createElement("div");
    writtenContent.style.boxShadow=`rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px`;
    writtenContent.style.backgroundColor="rgb(235,240,255)"
    writtenContent.style.marginTop="1px";
    writtenContent.style.marginLeft="5px"
    writtenContent.style.padding="10px"
    writtenContent.style.paddingLeft="20px"
    let h2=document.createElement("h3");
    h2.textContent=`Tips on getting good answers quickly`;
    h2.style.color="blue";
    let ul=document.createElement("ul");
       
    let li1=document.createElement("li");
    li1.textContent=`Make sure your question has not been asked already`;
    li1.style.color="blue";
    let li2=document.createElement("li");
    li2.textContent=`Keep your question short and to the point`;
    li2.style.color="blue";
    let li3=document.createElement("li");
    li3.textContent=`Double-check grammar and spelling`;
    li3.style.color="blue";
    ul.append(li1,li2,li3);
    writtenContent.append(h2,ul);

    let icondiv=document.createElement("div");
    icondiv.style.display="flex";
    icondiv.style.justifyContent="flex-start";
    icondiv.style.marginLeft="15px";
    
    let usricon=document.createElement("div");
    usricon.style.cursor="pointer";

    let imgicon=document.createElement("img");
   
    imgicon.src="https://qsf.cf2.quoracdn.net/-4-images.new_grid.profile_default.png-26-688c79556f251aa0.png"
    imgicon.style.borderRadius="50%";
    imgicon.style.height="30px";
    imgicon.style.width="30px";
    imgicon.style.padding="1px";


    usricon.append(imgicon);
    usricon.onclick=function(){
        window.location.reload(); //kuch or hoga
    }
     let arrowicon=document.createElement("div");
     arrowicon.style.cursor="pointer"
     let arrowimgicon=document.createElement("i");
     arrowimgicon.className="fa-solid fa-caret-right"
     arrowimgicon.style.fontSize="30px"
     arrowimgicon.style.padding="0px";
     arrowicon.append(arrowimgicon);
     let selectIcon=document.createElement("select");
     selectIcon.style.cursor="pointer";
     selectIcon.marginLeft="7px";
     let option1=document.createElement("option");
     option1.textContent ="public";
     let option2=document.createElement("option");
     option2.textContent ="Limited";
     selectIcon.append(option1,option2);
    icondiv.append(usricon,arrowicon,selectIcon);
     
    let textArea=document.createElement("textarea");
        textArea.style.width="100%";
        textArea.style.minHeight="280PX";
        textArea.placeholder=`Start your question with "WHAT","WHY","HOW" etc....`
        textArea.style.padding="10px";
        textArea.style.fontSize="15px";
    div2.onclick=function(){
        addQ();
    }
   
    let div3=document.createElement("div");
    div3.textContent="Create Post";
    div3.style.cursor="pointer";


    div3.onclick=function(){
        container.innerHTML="";

        let div=document.createElement("div");
        div.setAttribute("id", "chhotaBox");
       
        let div1=document.createElement("div");
        div1.style.display="flex";
        div1.style.justifyContent="space-around";
        div1.style.fontSize="20px"
        div1.style.padding="30px";
        let divX=document.createElement("div");
        divX.textContent="X";
        divX.style.cursor="pointer";
        divX.onclick=function(){
          
            div.style.display="none";
        }
        let div2=document.createElement("div");
        div2.textContent="Add question";
        div2.style.cursor="pointer";
        div2.onclick=function(){
            addQ();
        }
        let div3=document.createElement("div");
        div3.textContent="Create Post";
        div3.style.cursor="pointer";

        div1.append(divX,div2,div3);

        let icondiv=document.createElement("div");
    icondiv.style.display="flex";
    icondiv.style.justifyContent="flex-start";
    icondiv.style.marginLeft="15px";

    let usricon=document.createElement("div");
    usricon.style.cursor="pointer";
    let imgicon=document.createElement("img");
   
    imgicon.src="https://qsf.cf2.quoracdn.net/-4-images.new_grid.profile_default.png-26-688c79556f251aa0.png"
    imgicon.style.borderRadius="50%";
    imgicon.style.height="30px";
    imgicon.style.width="30px";
    imgicon.style.padding="1px";
    usricon.append(imgicon);
    usricon.onclick=function(){
        window.location.reload();//kuch or hoga
    }

     let arrowicon=document.createElement("div");
     arrowicon.style.cursor="pointer";
     let arrowimgicon=document.createElement("i");
     arrowimgicon.className="fa-solid fa-caret-right"
     arrowimgicon.style.fontSize="30px"
     arrowimgicon.style.padding="0px";
     arrowicon.append(arrowimgicon);
     let selectIcon=document.createElement("select");
     selectIcon.style.cursor="pointer";
     selectIcon.marginLeft="7px";
     let option1=document.createElement("option");
     option1.textContent ="Everyone";
     let option2=document.createElement("option");
     option2.textContent ="Some space";
     selectIcon.append(option1,option2);
    icondiv.append(usricon,arrowicon,selectIcon);


        var hrlinefull=document.createElement("hr");
    
        hrlinefull.style.color="blue"
        hrlinefull.style.height="7px";
        hrlinefull.style.border="1px solid blue"
        hrlinefull.style.backgroundColor="blue";
        hrlinefull.style.marginLeft="60%";
        hrlinefull.style.marginRight="3%";
        
        var hrline=document.createElement("hr");

        let textArea=document.createElement("textarea");
        textArea.setAttribute("id","textArea");
        textArea.style.width="100%";

        textArea.style.minHeight="350PX";
        textArea.style.padding="10px";
        // let textSize=someFun()
        // if(textSize===1){
        //     textArea.style.fontSize="bold";
        //     console.log("1");
        // }
        // else if(textSize===2){
        //     textArea.style.fontSize="21px";
        //     console.log("2");
        // }
        
        // textArea.style.fontSize="75px";
        textArea.placeholder="say something...."


        let lastpost=document.createElement("div");
        lastpost.style.display="flex";
        lastpost.style.flexDirection="row";
        lastpost.style.justifyContent="space-between";
        lastpost.style.margin="10px"
        lastpost.style.backgroundColor="red"
        // lastpost.style.justifyContent="flex-start";
        // lastpost.style.marginRight="10px";

        let lastFlexContainer=document.createElement("div");
        lastFlexContainer.style.display="flex";
        lastFlexContainer.style.justifyContent="flex-start";
        let divH=document.createElement("div");
        divH.textContent="H";
        divH.style.backgroundColor="blue"
        divH.style.color="white";
        divH.style.fontSize="35px";
        divH.style.paddingLeft="4px";
        divH.style.paddingRight="4px";
        divH.style.borderRadius="25%";
        divH.style.cursor="pointer";
        divH.style.marginLeft="5px"
        divH.style.marginRight="5px"

        divH.onclick=function(){
            textArea.style.fontSize="50px";
            textArea.style.fontWeight="bold";
            
            console.log("1");
            // function  someFun(){;
            //     return parseInt(1);
            //    }
        }
        let divN=document.createElement("div");
        divN.textContent="N";
        divN.style.backgroundColor="black"
        divN.style.color="white";
        divN.style.fontSize="35px";
        divN.style.paddingLeft="4px";
        divN.style.paddingRight="4px";
        divN.style.borderRadius="25%";
        divN.style.cursor="pointer";
        divN.style.marginLeft="5px"
        divN.style.marginRight="5px"
        divN.onclick=function(){
            textArea.style.fontSize="21px";
            console.log("2");
            // function  someFun(){;
            //     return parseInt(2);
            //    }
        }
        let inputimg=document.createElement("input");
        inputimg.type="file";
        inputimg.style.margin="10px";
        inputimg.style.padding="8px";

        lastFlexContainer.append(divH,divN,inputimg);

        let post=document.createElement("span");
        post.textContent=`post`;
        post.style.borderRadius=`20%`;
        post.style.backgroundColor=`blue`;
        post.style.color="white";
        // post.style.width="50px";
        // post.style.height="40px";
        post.style.padding="15px";
        // post.style.paddingBottom="25px";
        post.style.cursor="pointer";
        post.style.fontSize="19px"
        
        post.onclick=function(){
            let obj={
                "img": "https://qsf.cf2.quoracdn.net/-4-images.new_grid.profile_default.png-26-688c79556f251aa0.png",
                "name": "Pappu Kumar",
                "profileDesc": "Student at Masai School",
                 "date": "5/27/2022",
                "ques": document.querySelector("#textArea").value,
                "answer":".",
                "answerImg": "https://picsum.photos/180/120?random=218",
               "upvotes": 0,
             "share": 0,
            "comments": 0
            }
            let a=JSON.parse(localStorage.getItem("posts"));
            a.unshift(obj);
            localStorage.setItem("posts",JSON.stringify(a));
            console.log(JSON.parse(localStorage.getItem("posts")));
            displaySideNav(JSON.parse(localStorage.getItem("posts")));
            window.location.reload();
           
        }

        lastpost.append(lastFlexContainer,post);
        
        div.append(div1,hrlinefull,hrline,icondiv,textArea,lastpost);
        container.append(div);
    }
    var hrlinefull=document.createElement("hr");
    
    hrlinefull.style.color="blue"
    hrlinefull.style.height="7px";
    hrlinefull.style.border="1px solid blue"
    hrlinefull.style.backgroundColor="blue";
    hrlinefull.style.marginLeft="20%";
    hrlinefull.style.marginRight="40%";
    var hrline=document.createElement("hr");
    div1.append(divX,div2,div3);


     
    let last=document.createElement("div");
    last.style.display="flex";
    last.style.flexDirection="row-reverse";
     let lastCancel=document.createElement("div");
     lastCancel.textContent=`Cancel`;
     lastCancel.style.cursor="pointer";
     lastCancel.style.padding="7px";
     lastCancel.onclick=function(){
        div.style.display="none";
     }

     let lastAddquestion=document.createElement("div");
     lastAddquestion.textContent=`Add question`;
     lastAddquestion.style.backgroundColor=`blue`;
     lastAddquestion.style.color="white";
     lastAddquestion.style.fontSize="19px";
     lastAddquestion.style.cursor="pointer";
     lastAddquestion.style.padding="7px";

     lastAddquestion.onclick=function(){
          //
     }
        

     last.append(lastAddquestion,lastCancel);



    div.append(div1,hrlinefull,hrline,writtenContent, icondiv,textArea,last);
     
  

    container.append(div);
};




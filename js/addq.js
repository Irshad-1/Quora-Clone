document.querySelector("#addquestion").addEventListener("click",addQ )
var container=document.querySelector("#addQcontainer")

function addQ(){
    
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

        let textArea=document.createElement("textarea");
        textArea.style.width="100%";
        textArea.style.minHeight="350PX";
        textArea.style.padding="10px";
        textArea.style.fontSize="15px";
        textArea.placeholder="say something...."

        let post=document.createElement("div");
        post.textContent=`post`;
        post.style.borderRadius=`20%`;
        post.style.backgroundColor=`blue`;
        post.style.color="white";
        post.style.display=`flex`;
        post.style.justifyContent=`flex-start`;
        post.style.flexDirection="row-reverse";
        post.style.width="50px";
        post.style.height="40px";
        post.style.cursor="pointer";

        
        div.append(div1,textArea,post);
        container.append(div);
    }
    let hrline=document.createElement("hr");
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



    div.append(div1,hrline,writtenContent,textArea,last);
     
  

    container.append(div);
};
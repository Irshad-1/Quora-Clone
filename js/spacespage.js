let data;
async function fetchData(){
    let res = await fetch("http://localhost:3000/spaces");
    data = await res.json();
    console.log(data);
    var len = data.length;
    card(data,len);
}
function card(data1,len1){
    for(var i=0;i<len1;i++){    
        var card_cont = document.getElementById("card_cont");
        var div = document.createElement("div");
        div.setAttribute("id","card");
        var img = document.createElement("img");
        img.setAttribute("src",data1[i].url);
        var d = document.createElement("div");
        var title = document.createElement("h5");
        title.textContent = data1[i].tit;
        title.setAttribute("class","card_tit")
        var content = document.createElement("h5");
        content.textContent = data1[i].cont;
        content.setAttribute("style","font-weight:100;");
        d.append(title,content);
        div.append(img,d);
        card_cont.append(div)
    }
}
function btn(){
    var div_b = document.getElementById("out_card");
    var view_btn = document.createElement("button");
    view_btn.setAttribute("class","view_btn");
    view_btn.textContent = "View more";
    view_btn.setAttribute("onclick","fetchData()");
    div_b.append(view_btn);
}
btn();
fetchData();
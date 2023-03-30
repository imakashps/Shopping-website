function add(){
    var parent=document.createElement("tr");
    var col1=document.createElement("td");
    var col2=document.createElement("td");
    var col3=document.createElement("td");

        let del=document.createElement("button");
        del.innerHTML="DELETE";
        del.setAttribute("type","button");
        del.classList.add("btn","btn-danger");
        del.addEventListener("click",function(){
            document.getElementById("table").removeChild(parent);
        });
          


    var e=document.getElementById("grocery").value;
    var f=document.getElementById("Quantity").value;
    var x=document.createTextNode(e);
    var y=document.createTextNode(f);
    col1.appendChild(x);
    col2.appendChild(y);
    col3.appendChild(del);
    

    parent.appendChild(col1);
    parent.appendChild(col2);
    parent.appendChild(col3);


    document.getElementById("table").appendChild(parent);
    document.getElementById("grocery").value="";
    document.getElementById("Quantity").value="";
}
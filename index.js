let title=document.getElementById("inp")
let stat=document.getElementById("sel")
let create=document.getElementById("btn1")
create.addEventListener("click",()=>{
   let x=document.createElement("div")
   let y=document.createElement("p")
   y.innerText=title.value
   x.append(y)
   document.querySelector("second_div").append(x)

})
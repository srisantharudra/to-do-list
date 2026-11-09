let plus=document.querySelector("#plus")
let all=document.querySelector("#all")
let active=document.querySelector("#active")
let completed=document.querySelector("#completed")
let clear=document.querySelector("footer button")
let items=document.querySelector("footer p")
let plans=document.querySelector("#plans")
let remove=document.createElement("button")
let ul=document.querySelector("ul")
let empty=document.getElementById('empty')
let time=document.getElementById('time')
let today=new Date()
m=today.getMonth()
time.innerText=`${days[today.getDay()]} ${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`
empty.style.display='none'
all.type="button"
active.type='button'
completed.type="button"
clear.type='button'
clear.disabled=true
function div(){
    let d1=document.createElement("div")
    return d1
}
function checkbox(){
    let cb1=document.createElement("input")
    cb1.type='checkbox'
    return cb1
}
function label(){
    let l1=document.createElement("label")
    return l1
}
function into(){
     b=document.createElement("button")
     b.style.height="15px"
     b.innerText='X'
     b.style.backgroundColor="white"
     b.style.border="2px solid white"
     b.style.paddingLeft="50px"
     b.type="button"
     b.style.opacity='0'
     return b
}
//adding tasks
plus.addEventListener("click",(evt)=>{
    if(search.value.trim()!=''){
    evt.preventDefault()
    d1=div()
    cb1=checkbox()
    l1=label()
    ul.append(d1)
    d1.append(cb1)
    l1.innerText=search.value
    d1.append(l1)
    ib=into()
    d1.append(ib)
    items.innerText=`${ul.querySelectorAll("input[type=checkbox]:not(:checked)").length} items left`
}
else{
    evt.preventDefault()
}})

//clicking clear
clear.addEventListener("click",(evt)=>{
    evt.preventDefault()
    let divs=ul.querySelectorAll("div")
    divs.forEach((div)=>{
        if(div.style.display!='none'){
            div.remove()
        }
    })
    empty.style.display=''
})
//clicking X
ul.addEventListener("click",(evt)=>{
    let btn=evt.target.closest("button")
    if(btn && ul.contains(btn)){
        evt.preventDefault()
        btn.parentElement.remove()
        items.innerText=`${ul.querySelectorAll("input[type=checkbox]:not(:checked)").length} items left`
    }
})
//hover in X
ul.addEventListener("mouseover",(evt)=>{
    let d=evt.target.closest("div")
    if(d && ul.contains(d)){
        let btn=d.querySelector("button")
        if(btn){
        btn.style.opacity='1'
        }
    }
})
//hover out X
ul.addEventListener("mouseout",(evt)=>{
    let d=evt.target.closest("div")
    if(d && ul.contains(d)){
        let btn=d.querySelector("button")
        if(btn){
        btn.style.opacity='0'
        }
    }
})
//clicking all or completed or active
buttons=document.querySelectorAll(".content")
buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        buttons.forEach((b)=>{
            b.classList.remove("active")
            btn.classList.add("active")
            if(btn.innerText=='Completed'){
                clear.disabled=false
            }
            else{
                clear.disabled=true
            }
        })
    })
})
// clicking all
all.addEventListener("click",()=>{
    d=ul.querySelectorAll("div")
        d.forEach((div)=>{
            div.style.display=''
        })
empty.style.display='none'
})
// clicking active
active.addEventListener("click",()=>{
    d=ul.querySelectorAll("div")
        d.forEach((div)=>{
            checkbutton=div.querySelector("input[type=checkbox]")
            if(checkbutton.checked==false){
                div.style.display=''
            }
            else{
                div.style.display='none'
            }
        })
        empty.style.display='none'    
})
//clicking completed
completed.addEventListener("click",()=>{
    d=ul.querySelectorAll("div")
        d.forEach((div)=>{
            checkbutton=div.querySelector("input[type=checkbox]")
            if(checkbutton.checked==true){
                div.style.display=''
            }
            else{
                div.style.display='none'
            }
      
        })
})
//checkboxes event
ul.addEventListener("change",(evt)=>{
   items.innerText=`${ul.querySelectorAll("input[type=checkbox]:not(:checked)").length} items left`
   divs=ul.querySelectorAll("div")
   divs.forEach((div)=>{
    cb=div.querySelector('input[type=checkbox]')
    l=div.querySelector('label')
    if(cb.checked){
    l.style.textDecoration='line-through'
}
else{
    l.style.textDecoration='none'
}
   })
}
)


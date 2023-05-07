
const register=document.getElementById('btn')
const search=document.getElementById('btn1')
const clear=document.getElementById('btn2')

let arr=[]
let obj={}
register.addEventListener('click',(e)=>{
    e.preventDefault()
    register_details()
})
function register_details(){
    let nam=document.getElementById('name').value
let date=document.getElementById('dob').value
    obj.name=nam
    obj.dob=date
    arr.push(obj)
    console.log(arr)
}
search.addEventListener('click',(e)=>{
    e.preventDefault()
    search_details()
})
function search_details(){
    let nam=document.getElementById('name').value
    let date=document.getElementById('dob').value
    for (let val of arr){
        if(nam===val.name && date===val.dob){
            let dat=new Date()
            let udate=new Date(date)
            let currentyear=dat.getYear()
            let userdate=udate.getYear()
            var age=currentyear-userdate
            let div=document.getElementById('txt')
            const para=document.createElement("p")
            const para1=document.createElement("p")
            const para2=document.createElement("p")
            para.innerHTML=val.name
            div.appendChild(para)
            para1.innerHTML=val.dob
            div.appendChild(para1)
            para2.innerHTML=age
            div.appendChild(para2)
            para.addEventListener('click',()=>{
                div.removeChild(para)
                remove(nam)
            })
            para1.addEventListener('click',()=>{
                div.removeChild(para1)
                remove(date)
            })
        }
        else
        {
            let div=document.getElementById('txt')
            const para=document.createElement("p")
            para.innerHTML="Record Not found"
            div.appendChild(para)
        }
    }
}
clear.addEventListener('click',(e)=>{
    e.preventDefault()
    clear_text()
})
function clear_text(){
    arr.splice(obj,1)
    console.log(arr)
    let div=document.getElementById('txt')
            const para=document.createElement("p")
            para.innerHTML="Record Removed"
            div.appendChild(para)
    
}
function remove(nam){
    let index=arr.indexOf(nam)
    if(index>-1){
        arr.splice(index,1)
    }
}
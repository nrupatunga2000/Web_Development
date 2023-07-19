const large = document.querySelector('.large');
const medium = document.querySelector('.medium');
const small = document.querySelector('.small');

large.addEventListener('click',e =>{
    console.log('hi tanu');
})

setTimeout(()=>{
    large.removeEventListener('click', ()=>{
        console.log('muddu mari');
    },2000)
})


medium.addEventListener('click',e =>{
    console.log('hi pingu');
}
)

small.addEventListener('click',e =>{
    console.log('hi papu');
})
document.addEventListener('click',e=>{
    if(e.target.matches('div')){
        console.log('hi gundamma'); 
    }
    
})

const newDiv = document.createElement("div");
newDiv.style.height = "90px";
newDiv.style.width = "90px";
newDiv.style.backgroundColor = "blue";
document.body.append(newDiv);
newDiv.addEventListener('click',jselv => {
    console.log('hi nrupatunga');
})
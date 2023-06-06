// console.log("Mihir")
// setTimeout(function(){
//     console.log("Timer")
// },5000);
function update(){
    let count=0;
    document.getElementById("clickme").addEventListener("click",function abc(){
        console.log("Button Clicked" ,count++);
    
    });
}
update()

// console.log("hello")
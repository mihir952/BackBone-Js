const radius=[1,2,3,4]
const area=function (){
    const output=[]
    for(let i=0;i<radius.length;i++){
        output.push(Math.PI*radius[i]*radius[i])
    }
    return output
}
console.log("Area of Circle is " +area())
// var object={};
// _.extend(object,Backbone.Events);
// object.on("alert",function(msg){
//     alert("Triggered " +msg)
// })
// object.trigger("alert","an event");
// _.each([1,2,3],alert);


//without keyword 
// arr=[2,4,5,7,8,98]
// arr1=_.without(arr,5)
// console.log(arr1)

// _.each(["Geeks", "for", "Geeks"], prompt);



/*****  Map Function */
// arr1=[1,2,3,4,5]
// arr2=_.map(arr1,function sq(num){
//     return num*num;
// })
// console.log(arr2)

/******* last  */
// console.log(_.map([[1, 2], [3, 4], [5, 6]], _.last));
// console.log(_.map([[1, 2], [3, 4], [5, 6]], _.first));


/*******  Reduce function */
// var arr1=[1,3,4,5,6,7]
// var sum=_.reduce(arr1,function(a1,num){
//     return a1+num
// })
// document.write(sum)

// var arr1=[1,2,3,4,5,6]
// document.write(_.reduce(arr1,function(a1,a2){
//     return a2
// }))


var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
         var isEven = function (value) {
               return value % 2 === 0;
        };
        console.log(_.some(values, isEven));
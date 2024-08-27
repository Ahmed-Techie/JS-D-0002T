//**************************************************************************************/
// var request = new XMLHttpRequest();
// console.log(request);
// request.open("GET", "https://restcountries.com/v3.1/all")
// request.send()
// request.onload = function() {
//     var data = request.response 
//     var result = JSON.parse(data)
//     // console.log(result[0].area)
//     // console.log(result[0].name.common)

//     // for loop
//     for(var i=0; i<result.length; i++) {
//         console.log(result[i].name.common)
//         console.log(result[i].region)
//         console.log(result[i].subregion)
//         console.log(result[i].population)
//         //console.log(result[i].name.common);
//     }
// }

//**************************************************************************************/
const obj1={
    name:"Person 1",
    age: 5
    }
    
const obj2={
    age: 5,
    name:"Person 1"    
    }

_.isEqual(obj1, obj2);
// => true

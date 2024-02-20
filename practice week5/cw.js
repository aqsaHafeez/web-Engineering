var object ={

}
object["1"]=1;
console.log(object)
object["100"]=1;
console.log(object)

object["1"]++;
console.log(object)

if(object["1"]){
    console.log("key found")
}
else{
    console.log("key not found")
}

arr = [{id:1, name: "aqsa"}, {id:2, name: "jazib"}, {id:3, name: "farwa"}, {id:1, name: "aqsa"}]
var object1 ={

}
for(let i=0; i<arr.length; i++){
    var el= arr[i].id
    if(object1[el])
    {

        object1[el]++}
    else{
        object1[el]=1
    }
}
console.log(object1)
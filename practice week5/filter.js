const array2=[1,2,5,6]
temp = array2.filter(function(item){
    //console.log(item)
    return item%2==1
})
console.log(temp)
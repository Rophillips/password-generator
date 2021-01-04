/*a
String
Integers
Boolean

Array
Object
*/
var name = "Roseanne"
var hour = 4
var enjoyed_christmas = true

var fave_teams = ["Bruins","Celts","Pats", "Sox"]
let person = {
    name:"Justin",
    city:"boston"
}

console.log(person.city)
console.log(person.name)


// console.log(fave_teams)
// console.log(fave_teams[fave_teams.length - 1])

//for (where I start; where I end; how fast do i get here){// do this}
for(var i = 0; i < fave_teams.length; i++){
    console.log(fave_teams[i])
}



fave_teams.forEach(team , function(){
    console.log(team)
})
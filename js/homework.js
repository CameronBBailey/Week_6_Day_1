/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]
let dog_names2 = ['hi','owo']

function findWords(){
    let newarry = []
    let lower = dog_string.toLowerCase()
    for(let i = 0; i < dog_names.length; i++){
        if(lower.includes(dog_names[i].toLowerCase())) {
             newarry.push (dog_names[i] + ' Matched')
        } 
        } 
        if(newarry.length == 0){
            return 'No Matches'
        }else {
            return newarry
        }
        }
        
    
         
    

console.log(findWords(dog_string))

//Call method here with parameters






/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i = 0; i < arr.length; i++){
        if(i % 2 == 0) {
            arr.splice(i,1, 'even index')
        }
    }
    return arr
}
console.log(replaceEvens(arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

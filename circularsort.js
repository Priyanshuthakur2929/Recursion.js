// Circular Sort Algorithm in JavaScript
/*let arr = [2,4,5,1,6,3,8,7];

let i = 0;
while(i < arr.length){
    let correctindx = arr[i]-1;
 if(arr[i]!= arr[correctindx]){
    //swap
    let temp = arr[i];
    arr[i] = arr[correctindx];
    arr[correctindx]=temp;
 }
 else{
    i++;
 }
}
console.log(arr);*/

// Search Insert Position
/*let arr = [1,3,7,5,6];
let target = 5;
var searchinsert = function(nums,target){
    let first = 0 , last = nums.length-1;
    while(first<=last){
        let mid = Math.floor((first+last)/2);
        if(nums[first]==target){
            return first;
        }
        else if(nums[last]<target){
            first = mid+1;
        }
        else{
            last = mid-1;
        }
    }
    return first;
}
console.log(searchinsert(arr,target));*/

// Pattern Printing - X Pattern
/*let prompt = require ('prompt-sync')();
let n = Number(prompt("Enter a number"))
for(let i=1;i<=n;i++){
    for(let j=1;j<=n;j++){
        if(i==j || i+j==n+1){
            Process.stdout.write("*")

        }
    }
}*/                            

                              
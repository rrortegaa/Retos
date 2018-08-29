let numeros = [2,7,11,15]
let buscado = 9

function twoSum (nums, target) {
    console.log(nums)
    console.log(target)

    nums.forEach(element => {
        let index1 = nums[0]
        let index2 = nums[0+1]
        let sum = index1 + index2
        
        if(index1<index2 && sum === target) {

            response = [index1,index2] 
        }
    });

    return response
}

console.log(twoSum(numeros, buscado))
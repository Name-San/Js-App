function runningSum(nums) {
    var arr = [];
    nums.reduce((sum, curr) => {
        sum += curr;
        arr.push(sum);
        return sum;
    }, 0)
    return arr;
}

const nums = [3,1,2,10,1];
var output = runningSum(nums);
console.log(output);
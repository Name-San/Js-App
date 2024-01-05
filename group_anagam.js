/* function groupAnagrams(strs) {

    const wordMap = new Map();
    const output = [];
    for(let word of strs) {
        const sortWord = word.split('').sort().join('');
        if(wordMap.has('sortWord')) {
            const existingword = wordMap.get('sortWord');
            existingword.push(word);
        } else {
            wordMap.set(sortWord, [word]);
        }
    }

    for(const value of wordMap.values()) {
        output.push(value);
    }
    return output;
}*/

function groupAnagrams(strs) {
    const wordMap = new Map();
    const result = [];
    for (let word of strs) {
        const sortWord = word.split('').sort().join('');
        if (wordMap.has(sortWord)) {
            wordMap.get(sortWord).push(word);
        }
        else {
            wordMap.set(sortWord, [word]);
        }
    }
    for (const value of wordMap.values()) {
        result.push(value);
    }
    return result;
}

const strs = ["ddddddddddg","dgggggggggg"];
const group = groupAnagrams(strs);
console.log(group);

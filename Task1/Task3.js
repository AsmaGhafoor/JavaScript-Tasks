console.log("TASK 03");
console.log("To Find Common Words from String!");

let str = 'Haris said: asma asma is very slow';
let occur = nthMostCommon(str, 10);

console.log(occur);

function nthMostCommon(str, amount) {
    var stickyWords = [
        "the",
        "the",
        "was",
    ];
    str = str.toLowerCase();
    var splitUp = str.split(/\s/);
    const wordsArray = splitUp.filter(function (x) {
        return !stickyWords.includes(x);
    });
    var wordOccurrences = {}
    for (var i = 0; i < wordsArray.length; i++) {
        wordOccurrences['_' + wordsArray[i]] = (wordOccurrences['_' + wordsArray[i]] || 0) + 1;
    }
    var result = Object.keys(wordOccurrences).reduce(function (acc, currentKey) {
        /* you may want to include a binary search here */
        for (var i = 0; i < amount; i++) {
            if (!acc[i]) {
                acc[i] = { word: currentKey.slice(1, currentKey.length), occurences: wordOccurrences[currentKey] };
                break;
            } else if (acc[i].occurences < wordOccurrences[currentKey]) {
                acc.splice(i, 0, { word: currentKey.slice(1, currentKey.length), occurences: wordOccurrences[currentKey] });
                if (acc.length > amount)
                    acc.pop();
                break;
            }
        }
        return acc;
    }, []);
    return result;
}

// var myString="Asma asma is very slow.";
// var a=myString.length;
// console.log(a);
// console.log(myString.split(' '));
// console.log(myString.slice(' '));
// console.log(myString.slice(0,myString.indexOf("")));
// console.log(myString.slice(myString.indexOf("")+1));
// //console.log(myString);

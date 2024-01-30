let inputElement = document.querySelector("input");
let buttonElement = document.querySelector("button");
let word = document.querySelector("#word");
let vowel = document.querySelector("#vowel");



// buttonElement.addEventListener("click", () => {
//     const userInput = (inputElement.value);


//     let count = 0;
//     function countVowel(userInput) {
//         for (let char of userInput) {

//             if (char === "a" ||

//                 char === "e" ||
//                 char === "i" ||
//                 char === "o" ||
//                 char === "u") {
//                 count++;
               

//             }


//         }

//         return count;

//     }



// vowel.innerText= ``;


// });





// buttonElement.addEventListener("click", () => {
//     const userInput = inputElement.value;

//     let count = countVowel(userInput);
//     word.innerText=`Your word is ${userInput}`;
//     vowel.innerText = `Number of vowels: ${count}`;
// });

// function countVowel(userInput) {
//     let count = 0;
//     for (let char of userInput) {
//         if (char.toLowerCase() === "a" ||
//             char.toLowerCase() === "e" ||
//             char.toLowerCase() === "i" ||
//             char.toLowerCase() === "o" ||
//             char.toLowerCase() === "u") {
//             count++;
//         }
//     }
//     return count;
// }










buttonElement.addEventListener("click", () => {
    const userInput = inputElement.value;

    let count = countVowel(userInput);
    vowel.innerText = `Number of vowels: ${count}`;

    // Generate HTML content with vowels bold and red
    const formattedWord = formatWord(userInput);
    word.innerHTML = formattedWord;
});

function countVowel(userInput) {
    let count = 0;
    for (let char of userInput) {
        if (isVowel(char)) {
            count++;
        }
    }
    return count;
}

function formatWord(userInput) {
    let formattedWord = '';
    for (let char of userInput) {
        if (isVowel(char)) {
            // Make vowels red and bold
            formattedWord += `<b style="color: red; font-weight: bold;">${char}</b>`;
        } else {
            formattedWord += char;
        }
    }
    return formattedWord;
}

function isVowel(char) {
    return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
}

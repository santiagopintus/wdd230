const input = document.getElementById('favChap');
const button = document.getElementById('addChapterButton');
const list = document.querySelector('.list');

button.addEventListener('click', function () {
    const item = document.createElement('li');
    const deleteButton = document.createElement('button');

    //If the input element is not empty:
    if (input.value != '') {
        
        //Calls the function that validates the book
        if (checkValidBooks(input.value)) {
            item.innerHTML = input.value;
            deleteButton.innerHTML = "❌";
        
            item.appendChild(deleteButton);
            list.appendChild(item);
        
            input.value = '';
            input.focus();
        
            deleteButton.addEventListener('click', function () {
                list.removeChild(item);
                input.focus();
            })
        } else {
            //If the book is not valid creates the following error.
            const error = document.createElement('li');
            error.innerHTML = "The book is not valid, check for spelling and put spaces between numbers and words.";
            error.style.color = "red";
            list.appendChild(error);

            setTimeout(() => {
                list.removeChild(error);
            }, 6000);
        };
        
    //If the input element is empty shows the following error:
    } else {

        const error = document.createElement('li');
        error.innerHTML = "The chapter cannot be blank";
        error.style.color = "red";
        list.appendChild(error);

        setTimeout(() => {
            list.removeChild(error);
        }, 4000);
    }
});

function checkValidBooks(entry) {
    bomBooks = ["nephi", "jacob", "enos", "jarom", "omni",
        "words of mormon", "mosiah", "alma", "helaman",
        "mormon", "ether", "moroni"];
    validBook = false;

    const userWords = entry.split(" ");

    console.log("userWords", userWords);

    for (word of userWords) {
        word = word.toLowerCase();
        console.log("each word", word);
        if (isNaN(word)) {
            //If the word is not a number check if is in the array
            validBook = bomBooks.includes(word);
            console.log("Result is valid:", validBook);
        }
    }
    return validBook;
}





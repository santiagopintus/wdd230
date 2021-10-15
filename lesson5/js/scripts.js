const input = document.getElementById('favChap');
const button = document.getElementById('addChapterButton');
const list = document.querySelector('.list');

button.addEventListener('click', function () {
    const item = document.createElement('li');
    const deleteButton = document.createElement('button');

    //If the input element is not empty:
    if (input.value != '') {
        
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







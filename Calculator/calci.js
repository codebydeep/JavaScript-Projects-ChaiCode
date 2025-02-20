const inputDisplay = document.getElementById('display');
const btn = document.querySelectorAll('button');
btn.forEach(button => {
    button.addEventListener('click', () => {
        if(button.textContent == 'AC'){
            inputDisplay.value = '';
        }
        else{
            inputDisplay.value += button.textContent;
        }
    })
});

const sol = document.getElementById('ans');
sol.addEventListener('click', () => {
    inputDisplay.value = eval(inputDisplay.value);
})
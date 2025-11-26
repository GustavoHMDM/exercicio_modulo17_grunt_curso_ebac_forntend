document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('button').addEventListener('click', function() {
        let number = document.getElementById('number').value;
        number = parseInt(number);
        alert(`O número digitado é: ${number}`);
    }) 
})    

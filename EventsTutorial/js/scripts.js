let form = document.getElementById('form');

form.addEventListener('submit', e => {

    e.preventDefault(); 
    
    const alert = document.querySelector('.alert');
  
    alert.innerHTML = 'Your message was sent!';
  
    form.reset();
  
    setTimeout(() => {
    
        alert.innerHTML = "";
    
    }, 5000);
  
});
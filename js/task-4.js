const form = document.querySelector(".login-form");

const handleClick = event => {
    event.preventDefault();

 const form = event.target;
 const email = form.elements.email.value;
 const password = form.elements.password.value;
 
 
    if (email === "" || password === "") {
        console.log('Allert: All form fields must be filled in');
    } else {
      console.log({Email:`${email.trim()}`, Password:`${password.trim()}`});
  form.reset();
    }
    
};

form.addEventListener("submit", handleClick);
    
  
  

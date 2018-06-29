let fn = document.querySelector("#full-name");
let em = document.querySelector("#email");
let msg = document.querySelector("#msg");
let btn = document.querySelector("#button");
let form = document.querySelector("form");
let emailFormat = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;


function handleForm() {  
    
    console.clear();
    let errors = [];
    let data = {};
    
    // Full Name
    if (fn.value) {
        data.fullname = fn.value;  
    } else {
        errors.push("Full Name is missing!");
    }
    
    // Email
    if (em.value) {
        
        if (emailFormat.test(em.value)) {
            data.email = em.value;
        } else {
            errors.push("That is not a valid email!");
        }
        
    } else {
        errors.push("Email is missing!");
    }
    
    // Message
    if (msg.value) {
        data.message = msg.value;  
    } else {
        errors.push("Message is missing!");
    }
    
    // Feedback
    if (errors.length > 0 ) {
        console.log(errors);
    } else {
        console.log(data);
        form.reset();
    }
    
}

btn.addEventListener("click", handleForm);
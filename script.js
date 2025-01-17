


const signupForm = document.getElementById('signupForm')
const full_name = document.getElementById('full name')
const farm_name = document.getElementById("farm name")
const farm_location = document.getElementById("farm location")

const phone_number = document.getElementById("phone number")
const email_address = document.getElementById("email address")
const password = document.getElementById("password");



signupForm.addEventListener("submit", (event) => {
    event.preventDefault()
  
   let errors = []
   
   if(full_name){

    errors = getSignupFormErrors(full_name.value, farm_name.value, farm_location.value, phone_number.value, email_address.value, password.value)
   }

   errors = getSigninFormErrors()

   function getSignupFormErrors(){}
})
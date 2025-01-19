document.addEventListener("DOMContentLoaded", () => {
    
    // Farmer Sign-Up Form
      const farmerForm = document.getElementById("signupForm");
      if (farmerForm) {
        farmerForm.addEventListener("submit", async (e) => {
          e.preventDefault();
    
          const formData = new FormData(farmerForm);
          const data = {
            fullName: formData.get("full Name"),
            farmName: formData.get("farm name"),
            farmLocation: formData.get("farm location"),
            produceType: formData.get("type of produce"),
            phoneNumber: formData.get("phone number"),
            email: formData.get("email address"),
            password: formData.get("password"),
          };
    
          
          if (Object.values(data).some(value => !value)) {
            alert("Please fill in all fields.");
            return;
          }
    
          try {
            const response = await fetch("http://localhost:3000/signup/farmer", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data),
            });
    
            const result = await response.json();
    
            if (response.ok) {
              alert("Farmer registered successfully!");
              window.location.href = "sign-in.html";
            } else {
              alert(`Error: ${result.message}`);
            }
          } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong. Please try again later.");
          }
        });
      }
    
      // Buyer Sign-Up Form
      const buyerForm = document.querySelector("form");
      if (buyerForm && window.location.pathname.includes("sign-up_buyer.html")) {
        buyerForm.addEventListener("submit", async (e) => {
          e.preventDefault();
    
          const formData = new FormData(buyerForm);
          const data = {
            fullName: formData.get("Full Name"),
            deliveryAddress: formData.get("Delivery Address"),
            phoneNumber: formData.get("Phone Number"),
            email: formData.get("Email Address"),
            password: formData.get("Password"),
          };
    
         
          if (Object.values(data).some(value => !value)) {
            alert("Please fill in all fields.");
            return;
          }
    
          try {
            const response = await fetch("http://localhost:3000/signup/buyer", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data),
            });
    
            const result = await response.json();
    
            if (response.ok) {
              alert("Buyer registered successfully!");
              window.location.href = "sign-in.html";
            } else {
              alert(`Error: ${result.message}`);
            }
          } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong. Please try again later.");
          }
        });
      }
    });
    
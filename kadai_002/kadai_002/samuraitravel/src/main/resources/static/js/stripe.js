 const stripe = Stripe('pk_test_51OU9oYG3807R4hwqMYu10IqlpmKqdfP3HkbdB6eVjS6rLB7f0y4xGBefyeZerMMksw9efBS0ugXCIGxvkYpq1nyW008CWyxm8f');
 const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });
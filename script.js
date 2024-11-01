document.getElementById('workshopForm').addEventListener('submit', function(e) {
    e.preventDefault();

    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const workshop = document.getElementById('workshop').value;
    const terms = document.getElementById('terms').checked;
	
	const nameRegex = /^[A-Za-z\s]+$/; 
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
	const phoneRegex = /^\d{10}$/;
	
	if (!fullName || !nameRegex.test(fullName)) { 
		alert('Please enter a valid full name.');
		return; 
		} 
	if (!email || !emailRegex.test(email)) {
		alert('Please enter a valid email address.');
		return; 
		}
	if (!phone || !phoneRegex.test(phone)) { 
	alert('Please enter a valid 10-digit phone number.');
	return; 
	} 
	if (!workshop) {
		alert('Please select a workshop.');
		return; 
		} 
	if (!terms) {
		alert('You must agree to the terms and conditions.');
		return;
		}
    
    
    alert(`Thank you, ${fullName}! You have successfully registered for the ${workshop}. We will contact you via email: ${email} for further details.`);

    
    document.getElementById('workshopForm').reset();
});

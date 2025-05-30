const loginForm = document.getElementById('loginForm');
const orderPage = document.getElementById('orderPage');
const userNameDisplay = document.getElementById('userNameDisplay');

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const mobile = document.getElementById('mobile').value.trim();

  if (name && mobile.match(/^[0-9]{10}$/)) {
    userNameDisplay.textContent = name;
    loginForm.parentElement.style.display = 'none';
    orderPage.style.display = 'block';
  } else {
    alert("Please enter a valid name and 10-digit mobile number.");
  }
});

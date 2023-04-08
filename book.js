// get the form and message elements
const form = document.querySelector('form');
const message = document.getElementById('message');

// add event listener to the form submission
form.addEventListener('submit', function(event) {
  // prevent default form submission behavior
  event.preventDefault();

  // get user input
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  // check if all fields are filled
  if (name === '' || email === '' || date === '' || time === '') {
    message.innerHTML = 'Please fill all fields.';
    return;
  }

  // create a date object for the selected date and time
  const selectedDate = new Date(`${date} ${time}`);

  // check if the selected date is in the future
  if (selectedDate <= new Date()) {
    message.innerHTML = 'Please select a date and time in the future.';
    return;
  }

  // make a POST request to the server to book the appointment
  axios.post('https://crudcrud.com/api/b9ea7f92b8514aada438504bbbaf07d4/VAISHU', {
    name: name,
    email: email,
    date: date,
    time: time
})
     window.addEventListener('DOMContentLoaded', () => {
      const userDetailsElement = document.getElementById('user-details');
    
      fetch("https://crudcrud.com/api/b9ea7f92b8514aada438504bbbaf07d4/VAISHU")
        .then(response => response.json())
        .then(data => {
          // Format the user details as HTML
          const html = `
            <p>Name: ${data.name}</p>
            <p>Email: ${data.email}</p>
            <p>Phone: ${data.phone}</p>
          `;
    
          // Update the user details element with the HTML
          userDetailsElement.innerHTML = html;
        })
        .catch(error => {
          console.error(error);
          userDetailsElement.innerHTML = '<p>Failed to load user details.</p>';
        });
    });
    // store the appointment details in local storage
   // localStorage.setItem('name', name);
    //localStorage.setItem('email', email);
    //localStorage.setItem('date', date);
    //localStorage.setItem('time', time);

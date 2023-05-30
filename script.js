// Create an empty array to store users
let userList = [];

// Select the form element and add a submit event listener
document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the values entered in the form fields
    let name = e.target.name.value;
    let img = e.target.img.value;

    // Check if name and img fields are empty
    if (name.trim() === '' || img.trim() === '') {
        alert('Please enter both name and image URL');
        return;
    }

    // Create a new user object
    let newUser = {
        name: name,
        img: img
    };

    // Add the new user to the userList array
    userList.push(newUser);

    // Call a function to handle displaying the users
    displayUsers(userList);

    // Reset the form fields
    e.target.reset();
});

// Function to display the users
function displayUsers(users) {
    // Get the element where the user list will be displayed
    let userListElement = document.getElementById('userList');

    // Clear any existing content
    userListElement.innerHTML = '';

    // Iterate over the users array and generate HTML for each user
    users.forEach(user => {
        let userElement = document.createElement('div');
        userElement.className = 'userElement';
        userElement.innerHTML = `
            <div class='card'>
                <div class='img-list'>
                    <img src="${user.img}" alt="User Image">
                </div>
                <h3>Name: ${user.name}</h3>
            </div>
        `;
        userListElement.appendChild(userElement);
    });
}

// Call the displayUsers function initially to show any existing users
displayUsers(userList);

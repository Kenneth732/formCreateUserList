// Create an empty array to store users
let userList = [];

// Select the form element and add a submit event listener
document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the values entered in the form fields
    let name = e.target.name.value;
    let img = e.target.img.value;

    // Create a new user object
    let newUser = {
        name: name,
        img: img
    };

    // Add the new user to the userList array
    userList.push(newUser);

    // Call a function to handle displaying the users
    displayUsers(userList);
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
        userElement.innerHTML = `
            <h3>Name: ${user.name}</h3>
            <img src="${user.img}" alt="User Image">
        `;
        userListElement.appendChild(userElement);
    });
}

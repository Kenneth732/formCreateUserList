let userList = [];

// Select the form element and add a submit event listener:
document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the values entered in the form fields:
    let name = e.target.name.value;
    let img = e.target.img.value;

    // Create a new user object:
    let newUser = {
        name: name,
        img: img
    }
    // Add the new user to the userList array:
    userList.push(newUser);

    // Call a function to handle displaying the users:
    displayUser(userList);
});

let displayUser = (users) => {
    let userListElement = document.getElementById('userList');
    userListElement.innerHTML = '';
    users.forEach(user => {
        let userElement = document.createElement('div')
        userElement.className = 'userElement';
        userElement.innerHTML = `
        <div class='card'>
          <div class='img-list'>
            <img src="${user.img}" alt="User Image">
          </div>
          <h3>Name: ${user.name}</h3>
        </div>
        `;
        document.querySelector('#userList').appendChild(userElement)
    });
}


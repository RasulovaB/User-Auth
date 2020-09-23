// setup materialize components
document.addEventListener('DOMContentLoaded', function () {

    var modals = document.querySelectorAll('.modal');
    // initialize and pass the modals to the library
    M.Modal.init(modals);

    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);

});

// display to the DOm
const postList = document.querySelector('.guides');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');
const adminItems = document.querySelectorAll('.admin');

const setupUI = (user) => {
    if (user) {
        if (user.admin) {
            adminItems.forEach(item => item.style.display = 'block');
        }
        // account info
        db.collection('users').doc(user.uid).get().then(doc => {

            const html = `
                <div>Logged in as ${user.email}</div>
                <div>${doc.data().bio}</div>
                <div class="pink-text">${user.admin ? 'Admin' : ''}</div>
            `;
            accountDetails.innerHTML = html;
        });

        // toggle UI elements
        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display = 'none');
    } else {
        adminItems.forEach(item => item.style.display = 'none');
        // hide account info
        accountDetails.innerHTML = '';

        // toggle UI elements 
        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'block');
    }
}

// setup chats
const setupPosts = (data) => {

    if (data.length) {
        let html = '';
        data.forEach(doc => {
            const post = doc.data();
            //  console.log(post); 
            const li = `
        <li>
        <div class="collapsible-header grey lighten-4">${post.title}</div>
        <div class="collapsible-body white">${post.message}</div>
       
        </li>
        `;
            html += li;
        });
        postList.innerHTML = html;
    } else {
        postList.innerHTML = '<h5 class="center-align">Please login to view posts</h5>';
    }
}
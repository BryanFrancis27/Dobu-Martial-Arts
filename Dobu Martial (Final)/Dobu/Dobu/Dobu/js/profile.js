// Inside profile.js
$(document).ready(function () {
    const userName = localStorage.getItem('name');
    const userEmail = localStorage.getItem('email');
    const userContact = localStorage.getItem('contact');

    if (userName && userEmail && userContact) {
        $('#full-name').text(userName);
        $('#user-email').text('Email: ' + userEmail);
        $('#contact-number').text('Contact Number: ' + userContact);
        // You can update other parts of the profile with additional information
    } else {
        // If no user information is found, redirect to the login page
        window.location.href = 'login.html';
    }
});

$(document).ready(function () {
    // Handle file input change using event delegation
    $(document).on('change', '#file-input', function () {
        readURL(this);
    });

    // Handle Change Profile button click
    $('#change-profile-btn').click(function () {
        $('#file-input').click();
    });

    // Handle Logout button click
    $('#logout-btn').click(function () {
        logoutUser();
    });

    // Function to display selected image
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                // Save the image data to local storage
                localStorage.setItem('profilePicture', e.target.result);
                $('#profile-picture').attr('src', e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }

    // Check if there is a stored profile picture in local storage
    var storedProfilePicture = localStorage.getItem('profilePicture');
    if (storedProfilePicture) {
        $('#profile-picture').attr('src', storedProfilePicture);
    }

    // Logout function
    function logoutUser() {
        // Clear user information from local storage
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        localStorage.removeItem('profilePicture');
        // Redirect to the login page
        window.location.href = 'login.html';
    }
});

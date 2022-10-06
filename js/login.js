document.getElementById('submit-btn').addEventListener('click', function () {

    //get user email
    const emailFild = document.getElementById('user-email');
    const userEmail = emailFild.value;

    //get user password
    const passwordFild = document.getElementById('user-password');
    const userPassword = passwordFild.value;



    //check email & password
    if (userEmail == 'kanon@gmail.com' && userPassword == 'anita') {
        window.location.href = 'banking.html';
    }

});
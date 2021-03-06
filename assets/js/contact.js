
document.body.style.backgroundImage = "url('images/bgcontact.jpg')";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";


const database = firebase.database();

const submit = document.getElementById('submit');


submit.addEventListener('click', (e) => {
    e.preventDefault();
    var newPostKey = firebase.database().ref().child('users').push().key;
    const contactform = getInputVal('contactform');
    const first = getInputVal('first');
    const last = getInputVal('last');
    const email = getInputVal('email');
    const message = getInputVal('message');
    database.ref('users/' + newPostKey).set({
        first: first,
        last: last,
        email: email,
        message: message

    });

    alert('Your data has been sumbitted');
    document.getElementById('first').value = "";
    document.getElementById('last').value = "";
    document.getElementById('email').value = "";
    document.getElementById('message').value = "";

    // return true;

});

function getInputVal(id) {
    return document.getElementById(id).value;
}



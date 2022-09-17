console.log("Login Form");

function myfunction() {
    var name = document.getElementById('name');
    console.log(name);
    var email = document.getElementById('email');
    console.log(email);
    var city = document.getElementById('city');
    console.log(city);

    if (name.value.trim() == "" || email.value.trim() == '' || city.value.trim() == '') {
        alert("This is alert");
    }
    else {
        alert(name.value, email.value, city.value);
        name.value = '';
        email.value = '';
        city.value = '';
    }
    console.log("Submit Works")
}
//myfunction()
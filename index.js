function toggle(num) {
    var image = document.querySelectorAll('.image')[num];
    var passwordField = document.querySelector('#pass');
    if(num==1){
        passwordField = document.querySelector('#Re-pass');
    }
    console.log(passwordField);

    if (image.getAttribute('src') === 'hide.png') {
        image.setAttribute('src', 'eye.png');
        passwordField.setAttribute('type', 'text');
    } else {
        image.setAttribute('src', 'hide.png');
        passwordField.setAttribute('type', 'password');
    }
}
document.querySelectorAll('.image')[0].addEventListener('click', () => {
    toggle(0);
});

document.querySelectorAll('.image')[1].addEventListener('click', () => {
    toggle(1);
});

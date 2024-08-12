const password_el = document.querySelector('#password');
const length_el = document.querySelector('#length');
const uppercase_el = document.querySelector('#uppercase');
const lowercase_el = document.querySelector('#lowercase');
const number_el = document.querySelector('#number');
const symbols_el = document.querySelector('#symbol');

const generate_btn = document.querySelector("#generate");
generate_btn.addEventListener('click', Generatepassword);

const copy_btn = document.querySelector("#copy");
copy_btn.addEventListener('click', copypassword);

const uppercase_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase_chars = "abcdefghijklmnopqrstuvwxyz";
const number_chars = "0123456789";
const symbols_chars = "!@#$%^&*(){}[]";

function Generatepassword() {
    let password = "";
    let length = length_el.value;  // Corrected to lowercase 'value'
    let chars = "";

    chars += uppercase_el.checked ? uppercase_chars : "";
    chars += lowercase_el.checked ? lowercase_chars : "";
    chars += symbols_el.checked ? symbols_chars : "";
    chars += number_el.checked ? number_chars : "";

    for (let i = 0; i < length; i++) {  // Corrected loop boundary
        let rand = Math.floor(Math.random() * chars.length);  // Corrected 'Math' object
        password += chars.substring(rand, rand + 1);
    }

    password_el.value = password;  // Set the generated password
    console.log(password);  // Log the password to the console
}

async function copypassword() {
    if (navigator.clipboard) {
        await navigator.clipboard.writeText(password_el.value);
        alert("Password copied to clipboard");
    }
}

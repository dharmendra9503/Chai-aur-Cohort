const name_input = document.getElementById("nameInput");
const job_input = document.getElementById("jobInput");
const age_input = document.getElementById("ageInput");
const bio_input = document.getElementById("bioInput");

[name_input, job_input, age_input, bio_input].forEach((inputField) => {
    inputField.addEventListener('input', function () {
        const id = inputField.id;
        const indexofCharI = id.indexOf('I');
        const targetDisplay = id.substring(0, indexofCharI) + "Display";
        document.getElementById(targetDisplay).innerText = inputField.value;
    })
});
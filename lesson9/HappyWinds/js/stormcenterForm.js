document.addEventListener('DOMContentLoaded', () => {
    updateSeverity();
    listenToSubmit();
})


function updateSeverity() {

    const severityInput = document.querySelector('#severity');
    const severityValue = document.querySelector('#severityValue');

    severityInput.addEventListener('change', (event) => {
        severityValue.innerHTML = event.target.value;
    });
    severityInput.addEventListener('input', (event) => {
        severityValue.innerHTML = event.target.value;
    })
}

function listenToSubmit() {
    const form = document.querySelector('#stormCenterForm');
        
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        window.location.href = './thankyou.html';
    })
}
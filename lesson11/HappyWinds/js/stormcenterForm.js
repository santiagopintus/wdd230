document.addEventListener('DOMContentLoaded', () => {
    updateSeverity();
    listenToSubmit();
})


function updateSeverity() {
    // Get the severity value from the form and show it to the user
    const $severityInput = document.querySelector('#severityInput');
    const $severityValue = document.querySelector('#severityValue');

    $severityInput.addEventListener('change', (event) => {
        $severityValue.innerHTML = event.target.value;
    });
    $severityInput.addEventListener('input', (event) => {
        $severityValue.innerHTML = event.target.value;
    })
}

function listenToSubmit() {
    const form = document.querySelector('#stormCenterForm');
        
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        window.location.href = './thankyou.html';
    })
}
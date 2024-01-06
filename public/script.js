document.addEventListener('DOMContentLoaded', function () {
    const acceptButton = document.getElementById('acceptButton');
    const rejectButton = document.getElementById('rejectButton');
    const boyfriendButton = document.getElementById('boyfriendButton');

    // Attach click event listeners to the buttons
    acceptButton.addEventListener('click', function () {
        recordButtonClick('Accepted !');
        acceptProposal();
    });

    rejectButton.addEventListener('click', function () {
        recordButtonClick('Rejected !');
        rejectProposal();
    });

    boyfriendButton.addEventListener('click', function () {
        recordButtonClick('She has a boyfriend !');
        haveBoyfriend();
    });

    // Function to record button clicks and save the information using an API call
    function recordButtonClick(buttonText) {
        // Make an API call to save the response
        fetch(`/saveResponse/${buttonText}`)
            .then(response => response.text())
            .then(data => console.log(data));

        // Log the information to the console (optional)
        console.log(`Julia clicked: ${buttonText}`);
    }

    function acceptProposal() {
        alert('Thank you for giving us a chance. I am a happy minion now ! Please tap the envelop at the bottom of the page to see my cell number and shoot me a text please!');
        hideOtherButtons('acceptButton');
        animateHeart('acceptButton');
    }

    function rejectProposal() {
        alert('I understand. Thank you for being honest. Shoot me a text anyways. Tap the envelop at the bottom of the page to see my cell number.');
        hideOtherButtons('rejectButton');
        animateHeart('rejectButton');
    }

    function haveBoyfriend() {
        alert('Oh! I respect your honesty. If things ever change, you know where to find me.');
        hideOtherButtons('boyfriendButton');
        animateHeart('boyfriendButton');
    }

    function hideOtherButtons(selectedButtonId) {
        const buttons = document.querySelectorAll('button');
        buttons.forEach((button) => {
            if (button.id !== selectedButtonId) {
                button.classList.add('selected');
            }
        });
    }

    function animateHeart(selectedButtonId) {
        const selectedButton = document.getElementById(selectedButtonId);
        const heartImage = selectedButton.querySelector('.heartImage');
        heartImage.style.animation = 'appearPhoto 1s ease-in-out forwards';
    }
});

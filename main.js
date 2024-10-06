let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// dashboard table responsiveness
document.addEventListener('DOMContentLoaded', () => {
    const donorTable = document.getElementById('donorTable');
    const donors = [
        { name: 'Donor 1', pledge: '$1000', date: '2024-07-01', achieved: '$1000' },
        { name: 'Donor 2', pledge: '$2000', date: '2024-07-02', achieved: '$2000' },
        // Add more donor data as needed
    ];

    donors.forEach(donor => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${donor.name}</td>
            <td>${donor.pledge}</td>
            <td>${donor.date}</td>
            <td>${donor.achieved}</td>
        `;
        donorTable.appendChild(row);
    });

    // Generate the invite link based on the user's unique ID or username
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        const inviteLink = `${window.location.origin}/invite.html?user=${loggedInUser.username}`;
        document.getElementById('inviteLink').value = inviteLink;
    }
});

function copyInviteLink() {
    const inviteLinkInput = document.getElementById('inviteLink');
    inviteLinkInput.select();
    inviteLinkInput.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
    alert('Invite link copied to clipboard!');
}

// making the sign in and sign up responsive

const loginButton = document.getElementById('login');
const signUpButton = document.getElementById('signup');
const signUpForm = document.getElementById('signUpForm');
const loginForm = document.getElementById('loginForm');

signUpButton.addEventListener('click', function() {
    signUpForm.style.display() = 'block';
    loginForm.style.display() = 'none';
})

loginButton.addEventListener('click', function (){
    signUpForm.style.display() = 'none';
    loginForm.style.display() = 'block';
})


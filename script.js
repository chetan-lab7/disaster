// script.js
document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Handle signup logic here
            window.location.href = 'dashboard.html';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Handle login logic here
            window.location.href = 'dashboard.html';
        });
    }

    if (document.getElementById('checklist-page')) {
        loadChecklist();
        loadNearbyShops();
    }
});

function viewMoreAlerts() {
    window.location.href = 'alerts.html';
}

function manageChecklist() {
    window.location.href = 'checklist.html';
}

function viewFullMap() {
    window.location.href = 'map.html';
}

function sendSafetyNotification() {
    // Handle sending safety notification logic here
    alert('Safety notification sent!');
}

function browseAllResources() {
    window.location.href = 'resources.html';
}

function loadChecklist() {
    const checklist = [
        { item: 'First Aid Kit', done: false },
        { item: 'Water Bottles', done: false },
        { item: 'Non-perishable Food', done: false },
        { item: 'Flashlight', done: false },
        { item: 'Batteries', done: false }
    ];

    const checklistContainer = document.getElementById('checklist');
    checklistContainer.innerHTML = '';

    checklist.forEach((task, index) => {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.innerHTML = `
            <input type="checkbox" id="task-${index}" ${task.done ? 'checked' : ''} onclick="toggleTask(${index})">
            <label for="task-${index}">${task.item}</label>
        `;
        checklistContainer.appendChild(taskElement);
    });
}

function toggleTask(index) {
    const checklist = [
        { item: 'First Aid Kit', done: false },
        { item: 'Water Bottles', done: false },
        { item: 'Non-perishable Food', done: false },
        { item: 'Flashlight', done: false },
        { item: 'Batteries', done: false }
    ];

    checklist[index].done = !checklist[index].done;
    loadChecklist();
}

function loadNearbyShops() {
    const shops = [
        { name: 'Shop 1', address: '123 Main St' },
        { name: 'Shop 2', address: '456 Elm St' },
        { name: 'Shop 3', address: '789 Oak St' }
    ];

    const shopsContainer = document.getElementById('shops');
    shopsContainer.innerHTML = '';

    shops.forEach((shop) => {
        const shopElement = document.createElement('div');
        shopElement.className = 'shop';
        shopElement.innerHTML = `
            <h4>${shop.name}</h4>
            <p>${shop.address}</p>
        `;
        shopsContainer.appendChild(shopElement);
    });
}
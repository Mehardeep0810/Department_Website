const tableRows = document.querySelectorAll('.events-table tbody tr');

tableRows.forEach(row => {
    row.style.cursor = 'pointer';
    row.addEventListener('click', () => {
        const columns = row.querySelectorAll('td');
        const name = columns[0].textContent.trim();
        const type = columns[1].textContent.trim();
        const date = columns[2].textContent.split('\n')[0].trim();
        const location = columns[3].textContent.trim();
        const organizer = columns[4].textContent.trim();
        alert(
            `Event Details:\n\n` +
            `Name: ${name}\n` +
            `Type: ${type}\n` +
            `Date: ${date}\n` +
            `Location: ${location}\n` +
            `Organizer: ${organizer}\n\n` 
            
        );
    });
});

const eventCards = document.querySelectorAll('.event-card');

eventCards.forEach(card => {
    const registerBtn = document.createElement('button');
    registerBtn.textContent = 'Register Now';
    registerBtn.className = 'btn';
    registerBtn.style.marginTop = '1rem';
    card.querySelector('.event-content').appendChild(registerBtn);

    registerBtn.addEventListener('click', () => {
        const title = card.querySelector('.event-title').textContent;
        const date = card.querySelector('.event-date span').textContent;
        if (confirm(`Register for "${title}" on ${date}?`)) {
            alert(`Successfully registered for "${title}"!`);
            registerBtn.textContent = 'Registered ✓';
            registerBtn.disabled = true;
            registerBtn.style.backgroundColor = '#4CAF50';
        }
    });
});
const heroSection = document.querySelector('.events-hero .container');
const upcomingCount = document.querySelectorAll('.event-card').length;
const ongoingCount = document.querySelectorAll('.events-table tbody tr').length;

const counterDiv = document.createElement('div');
counterDiv.style.marginTop = '2rem';
counterDiv.innerHTML = `
    <div style="display:flex; gap:2rem; color:white; justify-content:center;">
        <div style="text-align:center;">
            <h3>${ongoingCount}</h3>
            <p>Ongoing Events</p>
        </div>
        <div style="text-align:center;">
            <h3>${upcomingCount}</h3>
            <p>Upcoming Events</p>
        </div>
    </div>
`;
heroSection.appendChild(counterDiv);   

document.addEventListener("DOMContentLoaded", () => {

    setTimeout(showOngoingEventPopup, 5000);

    function showOngoingEventPopup() {
        const firstEventRow = document.querySelector(".events-table tbody tr");

        if (!firstEventRow) return;

        const eventName = firstEventRow.children[0].innerText;
        const eventType = firstEventRow.children[1].innerText;
        const eventDate = firstEventRow.children[2].innerText;
        const eventLocation = firstEventRow.children[3].innerText;
        const eventOrganizer = firstEventRow.children[4].innerText;
        const eventImage = "images/WebDevelopmentBootcamp.png";

        
        const overlay = document.createElement("div");
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        `;

        const popup = document.createElement("div");
        popup.style.cssText = `
            background: #fff;
            padding: 25px;
            width: 350px;
            border-radius: 10px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.3);
            text-align: center;
            position: relative;
            animation: fadeIn 0.5s ease-in-out;
        `;

        popup.innerHTML = `
            <img src="${eventImage}" alt="${eventName}"
         style="width:100%; height:180px; object-fit:cover; border-radius:8px; margin-bottom:10px;">
            <h2 style="margin-bottom:10px;">📢 Ongoing Event</h2>
            <p><strong>${eventName}</strong></p>
            <p>Type: ${eventType}</p>
            <p>Date & Time:<br>${eventDate}</p>
            <p>Location: ${eventLocation}</p>
            <p>Organizer: ${eventOrganizer}</p>
            <button id="closePopup" style="
                margin-top: 15px;
                padding: 8px 16px;
                border: none;
                background: #e63946;
                color: white;
                border-radius: 5px;
                cursor: pointer;
            ">Close</button>
        `;

        overlay.appendChild(popup);
        document.body.appendChild(overlay);

        document.getElementById("closePopup").addEventListener("click", () => {
            overlay.remove();
        });

        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) {
                overlay.remove();
            }
        });
    }
});

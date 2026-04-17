// events.js - Handles dynamic rendering of events

// Array of event objects (JSON-like structure for easy management)
const eventsData = [
    {
        id: "e1",
        title: "Introduction to Data Analytics",
        date: "October 12, 2026",
        time: "5:00 PM - 6:30 PM",
        location: "LSBE 118",
        description: "Join us for an introductory workshop on data analytics using Tableau. Perfect for beginners looking to build their resume skills.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        rsvpLink: "contact-us.html"
    },
    {
        id: "e2",
        title: "Alumni Networking Panel",
        date: "October 26, 2026",
        time: "6:00 PM - 8:00 PM",
        location: "Kirby Ballroom",
        description: "Network with UMD MIS alumni working at top tech and business firms across the Twin Cities. Business casual attire is recommended.",
        image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        rsvpLink: "contact-us.html"
    },
    {
        id: "e3",
        title: "Tech Case Competition Prep",
        date: "November 5, 2026",
        time: "4:00 PM - 6:00 PM",
        location: "LSBE 234",
        description: "Learn frameworks for cracking technology consulting cases. We will be walking through a real-world digital transformation case study.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        rsvpLink: "contact-us.html"
    }
];

// Function to render events
document.addEventListener('DOMContentLoaded', () => {
    const eventsContainer = document.getElementById('events-container');
    
    if (eventsContainer) {
        // Clear a possible loading state
        eventsContainer.innerHTML = '';
        
        // Loop through the events data and generate HTML for each card
        eventsData.forEach(event => {
            const cardHTML = `
                <div class="card" id="${event.id}">
                    <img src="${event.image}" alt="${event.title}" class="card-img" loading="lazy">
                    <div class="card-body">
                        <h3 class="card-title">${event.title}</h3>
                        <div class="card-meta">
                            <span><svg style="width:16px;height:16px;vertical-align:middle;margin-right:4px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> ${event.date}</span>
                            <span><svg style="width:16px;height:16px;vertical-align:middle;margin-right:4px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> ${event.time}</span>
                            <span><svg style="width:16px;height:16px;vertical-align:middle;margin-right:4px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> ${event.location}</span>
                        </div>
                        <p>${event.description}</p>
                        <a href="${event.rsvpLink}" class="btn btn-outline" style="margin-top: 1rem; width: 100%;">Learn More/Contact Us</a>
                    </div>
                </div>
            `;
            // Append the card to the container
            eventsContainer.insertAdjacentHTML('beforeend', cardHTML);
        });
    }
});

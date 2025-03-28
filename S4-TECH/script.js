// Restaurant Details Data
const restaurantDetails = {
    chefJessie: {
        image: "images/chef.png",
        content: `
            <h2>Chef Jessie Rockwell Club</h2>
            <p><strong>Address:</strong> Amorsolo Square, Amorsolo Drive, Rockwell Center, Makati City</p>
            <p><strong>Contact:</strong> (02) 8890-7630</p>
            <p><strong>Category:</strong> Mediterranean Fusion and French Cuisine</p>
            <p><strong>Price Range:</strong> ₱₱₱₱ (High-end)</p>
            <p><strong>Operating Hours:</strong> 11:00 AM - 11:00 PM</p>
        `
    },
    rockysCafe: {
        image: "images/rocky.jpg",
        content: `
            <h2>Rocky's Café and Bar</h2>
            <p><strong>Address:</strong> The Rockwell Club, Rockwell Drive, Makati City</p>
            <p><strong>Contact:</strong> (02) 7798-1712</p>
            <p><strong>Category:</strong> Filipino, Western, and Spanish Staples</p>
            <p><strong>Price Range:</strong> ₱₱₱ (Moderate to High)</p>
            <p><strong>Operating Hours:</strong> Sun-Wed: 7:00 AM - 9:00 PM | Thu-Sat: 7:00 AM - 10:00 PM</p>
        `
    },
    loungeRockwell: {
        image: "images/lounge.jpg",
        content: `
            <h2>The Lounge at The Rockwell Club</h2>
            <p><strong>Address:</strong> The Rockwell Club, Rockwell Drive, Makati City</p>
            <p><strong>Contact:</strong> 0945-163-1787</p>
            <p><strong>Category:</strong> Outdoor Dining with Neapolitan Pizzeria</p>
            <p><strong>Price Range:</strong> ₱₱₱ (Moderate to High)</p>
            <p><strong>Operating Hours:</strong> Mon-Thu: 11:00 AM - 10:00 PM | Fri-Sat: 10:00 AM - 11:00 PM | Sun: 10:00 AM - 10:00 PM</p>
        `
    },
    pepperLunch: {
        image: "images/pepper.jpeg",
        content: `
            <h2>Pepper Lunch</h2>
            <p><strong>Address:</strong> Lower Ground Floor, Power Plant Mall, Rockwell Drive, Makati City</p>
            <p><strong>Contact:</strong> Not specified</p>
            <p><strong>Category:</strong> Japanese</p>
            <p><strong>Price Range:</strong> ₱₱₱ (Moderate)</p>
            <p><strong>Operating Hours:</strong> 11:00 AM - 10:00 PM</p>
        `
    }
};

// Show Details in Modal
function showDetails(restaurant) {
    document.getElementById("details-image").src = restaurantDetails[restaurant].image;
    document.getElementById("details-content").innerHTML = restaurantDetails[restaurant].content;
    document.getElementById("details-modal").style.display = "flex";
}

// Close Details When Clicking Close Button
function closeDetails() {
    document.getElementById("details-modal").style.display = "none";
}

// Close Modal When Clicking Outside Content
window.onclick = function(event) {
    let modal = document.getElementById("details-modal");
    if (event.target === modal) {
        closeDetails();
    }
};

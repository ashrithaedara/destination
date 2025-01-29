// Function to display dynamic content based on the selected option
function showContent() {
    let selectedOption = document.getElementById("destinationType").value;
    let content = document.getElementById("destinationContent");

    // Clear previous content
    content.innerHTML = "";

    if (selectedOption === "beach") {
        content.innerHTML = `
            <h2>Beach Destinations</h2>
            <p>Explore the beautiful beaches of Bali, known for crystal-clear waters and scenic views.</p>
            <img src="beach-image1.jpg" alt="Beach Image 1" class="destination-image">
            <img src="beach-image2.jpg" alt="Beach Image 2" class="destination-image">
        `;
    } else if (selectedOption === "temple") {
        content.innerHTML = `
            <h2>Temple Destinations</h2>
            <p>Visit the ancient temples of Angkor Wat in Cambodia, one of the largest religious monuments in the world.</p>
            <div class="temple-images">
                <img src="temple-image1.jpeg" alt="Temple Image 1" class="temple-image">
                <img src="temple-image1.jpg" alt="Temple Image 2" class="temple-image">
                <img src="temple-image3.jpg" alt="Temple Image 3" class="temple-image">
                <img src="temple-image4.jpg" alt="Temple Image 4" class="temple-image">
            </div>
            <h3>Related Pages:</h3>
            <ul>
                <li><a href="angkor-wat.html">Angkor Wat</a></li>
                <li><a href="borobudur.html">Borobudur</a></li>
                <li><a href="taj-mahal.html">Taj Mahal</a></li>
            </ul>
        `;
    } else if (selectedOption === "country") {
        content.innerHTML = `
            <h2>Country Destinations</h2>
            <p>Discover the vibrant culture and breathtaking landscapes of Japan.</p>
            <img src="country-image1.jpg" alt="Country Image 1" class="destination-image">
            <img src="country-image2.jpg" alt="Country Image 2" class="destination-image">
        `;
    }
}

// Add event listener to the dropdown
document.getElementById("destinationType").addEventListener("change", showContent);

// Call the function on page load
showContent();

// Get references to the HTML elements
const sessionDuration = document.getElementById('sessionDuration');
const preferredMentor = document.getElementById('preferredMentor');
const totalCostElement = document.getElementById('totalCost');
const payButton = document.getElementById('payButton');

// Pricing details
const prices = {
    '30': 2000,
    '45': 3000,
    '60': 4000
};

// Update the total cost based on user selections
function updateTotalCost() {
    const durationCost = prices[sessionDuration.value];
    let totalCost = durationCost;

    // Add a premium charge if a preferred mentor is selected
    if (preferredMentor.value !== 'none') {
        totalCost += 1000;  // Example premium charge
    }

    // Update the displayed total cost
    totalCostElement.textContent = `₹${totalCost}`;
}

// Event listeners to update the cost when selections change
sessionDuration.addEventListener('change', updateTotalCost);
preferredMentor.addEventListener('change', updateTotalCost);

// Simulate payment process
payButton.addEventListener('click', function() {
    alert(`Proceeding to payment of ${totalCostElement.textContent}`);
});

document.addEventListener('DOMContentLoaded', function () {
    const cardDetails = JSON.parse(localStorage.getItem('selectedCard'));
        const cardDetailsContainer = document.getElementById('cardDetailsContainer');
        const cardDetailsHTML = `
            <div class="product-card" style="display: flex; align-items:center ; justify-content:center ;margin-top: 5%">
            <img src="${cardDetails.image}" alt="${cardDetails.name}" style="width: 30%; height: 30%">
            <div class="product-info" style="margin-top: 5%; padding:20px ">
            <h2 style="color: white; font-size: 24px;">${cardDetails.name}</h2>
            <p style="color: red; font-size: 18px;">${cardDetails.price}</p>
            <p style="color: white; font-size: 18px;">${cardDetails.label}</p>
            <p style="color: white; font-size: 18px;">${cardDetails.kargo}</p>
            <button style="background-color: #4CAF50; color: white; padding: 10px 15px; border: none; border-radius: 5px; cursor: pointer;margin-left: -5px;">Səbətə At</button>
            </div>
            </div>
        `;
        cardDetailsContainer.innerHTML = cardDetailsHTML;

        
    } 
);



document.addEventListener('DOMContentLoaded', function () {
    const cardInnovation = JSON.parse(localStorage.getItem('selectedInnovation'));

        const cardDetailContainer = document.getElementById('cardDetailsContainer');
        const cardDetailHTML = `
            <div class="product-cards" style="display: flex; align-items:center ; justify-content:center ;margin-top: 5%">
            <img src="${cardInnovation.image}" alt="${cardInnovation.name}" style="width: 30%; height: 30%">
            <div class="product-info" style="margin-top: 5%; padding:20px ">
            <h2 style="color: white; font-size: 24px;">${cardInnovation.name}</h2>
            <p style="color: red; font-size: 18px;">${cardInnovation.price}</p>
            <p style="color: white; font-size: 18px;">${cardInnovation.label}</p>
            <p style="color: white; font-size: 18px;">${cardInnovation.kargo}</p>
            <button style="background-color: #4CAF50; color: white; padding: 10px 15px; border: none; border-radius: 5px; cursor: pointer;margin-left: -5px;">Səbətə At</button>
            </div>
            </div>
        `;
        cardDetailContainer.innerHTML = cardDetailHTML;
    } 
);

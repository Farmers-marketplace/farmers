// Array of 10 random products (farmers' crops)
const sampleProducts = [
    { name: "Organic Tomatoes", description: "Fresh, juicy tomatoes grown with organic fertilizers.", soil: "Loamy Soil", price: 2.5, stock: 100, image: "https://via.placeholder.com/300x200?text=Tomatoes" },
    { name: "Red Bell Peppers", description: "Sweet and crunchy bell peppers, perfect for salads.", soil: "Clay Soil", price: 3.0, stock: 150, image: "https://via.placeholder.com/300x200?text=Bell+Peppers" },
    { name: "Carrots", description: "Fresh carrots harvested from nutrient-rich soil.", soil: "Sandy Soil", price: 1.2, stock: 200, image: "https://via.placeholder.com/300x200?text=Carrots" },
    { name: "Cucumbers", description: "Crisp and refreshing cucumbers, grown in the greenhouse.", soil: "Silty Soil", price: 1.8, stock: 120, image: "https://via.placeholder.com/300x200?text=Cucumbers" },
    { name: "Lettuce", description: "Leafy lettuce with a mild, sweet flavor. Ideal for salads.", soil: "Loamy Soil", price: 2.0, stock: 180, image: "https://via.placeholder.com/300x200?text=Lettuce" },
    { name: "Strawberries", description: "Sweet, ripe strawberries harvested at peak freshness.", soil: "Peaty Soil", price: 4.0, stock: 50, image: "https://via.placeholder.com/300x200?text=Strawberries" },
    { name: "Broccoli", description: "Healthy and crunchy broccoli packed with vitamins.", soil: "Clay Loam Soil", price: 3.5, stock: 75, image: "https://via.placeholder.com/300x200?text=Broccoli" },
    { name: "Spinach", description: "Tender spinach leaves, perfect for smoothies or salads.", soil: "Silty Soil", price: 2.8, stock: 130, image: "https://via.placeholder.com/300x200?text=Spinach" },
    { name: "Sweet Potatoes", description: "Nutritious and sweet, grown with care in rich, dark soil.", soil: "Loamy Soil", price: 3.0, stock: 60, image: "https://via.placeholder.com/300x200?text=Sweet+Potatoes" },
    { name: "Green Beans", description: "Delicious and crunchy green beans straight from the farm.", soil: "Clay Soil", price: 2.2, stock: 160, image: "https://via.placeholder.com/300x200?text=Green+Beans" }
  ];
  
  // Function to display products on the page
  function displayProducts() {
    const productList = document.getElementById('product-list');
  
    // Loop through the array and display each product
    sampleProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>Soil Type:</strong> ${product.soil}</p>
            <div class="price">$${product.price} per unit</div>
            <p><strong>Stock:</strong> ${product.stock} units available</p>
            <button onclick="preOrderProduct('${product.name}', ${product.price})">Pre-order</button>
        `;
  
        productList.appendChild(productItem);
    });
  }
  
  // Pre-order functionality
  function preOrderProduct(productName, productPrice) {
    const preorderName = prompt("Enter your name:");
    const preorderQuantity = prompt("Enter quantity:");
  
    if (preorderName && preorderQuantity) {
        alert(Thank you for pre-ordering ${preorderQuantity} units of ${productName} for $${productPrice * preorderQuantity});
    }
  }
  
  // Review Submission Functionality
  document.getElementById('review-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const reviewerName = document.getElementById('reviewer-name').value;
    const reviewMessage = document.getElementById('review-message').value;
  
    const reviewsList = document.getElementById('reviews-list');
  
    const reviewItem = document.createElement('div');
    reviewItem.classList.add('review-item');
  
    reviewItem.innerHTML = `
        <h4>${reviewerName}</h4>
        <p>${reviewMessage}</p>
    `;
  
    reviewsList.appendChild(reviewItem);
  
    // Clear the form after submission
    document.getElementById('review-form').reset();
  });
  
  // Initialize products when the page loads
  window.onload = displayProducts;
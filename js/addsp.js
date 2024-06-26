document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const price = document.getElementById('price').value;
    const editordes = document.getElementById('editordes').value;
    const image = document.getElementById('image').files[0];

    const reader = new FileReader();
    reader.onload = function(event) {
        const imageUrl = event.target.result;

        const productItem = document.createElement('li');
        productItem.innerHTML = `
            <div>
                <img src="${imageUrl}" alt="${productName}">
            </div>
            <div>
                <h3>${productName}</h3>
                <p>Giá: ${price}</p>
                <p>${editordes}</p>
            </div>
        `;

        document.getElementById('products').appendChild(productItem);
        document.getElementById('productForm').reset();
    };

    reader.readAsDataURL(image);
});

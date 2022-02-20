let products = ["Sony", "Samsung", "Apple", "Nokia", "Oppo", "Xiaomi"];
function showProducts() {
    let table = document.getElementById("tableProduct");
    let htmls = `<td>Product Name</td>
        <td></td>
        <td>${products.length} products</td>`;
    for (let i = 0; i < products.length; i++) {
    htmls += `<tr>
        <td>${products[i]}</td>
        <td><button onclick="editProduct('${products[i]}')">Edit</button></td>
        <td><button onclick="deleteProduct('${products[i]}')">Delete</button></td>
        </tr>`;
    }
    table.innerHTML = htmls;
}
showProducts();
function addProduct() {
    let newProduct = document.getElementById("newProduct").value;
    products.push(newProduct);
    showProducts();
}

function deleteProduct(product) {
    let pos = products.indexOf(product);
    products.splice(pos, 1);
    showProducts();
}

function editProduct(product) {
    let s = prompt("Nhập tên muốn sửa: ");
    let pos = products.indexOf(product);
    products[pos] = s;
    showProducts();
}
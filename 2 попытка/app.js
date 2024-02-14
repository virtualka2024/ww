document.addEventListener("DOMContentLoaded", function () {
  const productInner = document.getElementById("product-inner");

  const productNumbers = Array.from({ length: 25 }, (_, i) => i + 1);

  displayProducts(productNumbers);

  function displayProducts(productNumbers) {
    productInner.innerHTML = "";

    productNumbers.forEach(productNumber => {
      const productDiv = document.createElement("div");
      productDiv.className = "item";
      productDiv.innerHTML = 
        <img src="images/${productNumber}.png" alt="����� ${productNumber}" class="img">
        <div class="price-box">
          <p class="price">����: ${getProductPrice(productNumber)} ���.</p>
          <button class="btn" onclick="addToCart(${productNumber})">�������� � �������</button>
        </div>
      ;
      productInner.appendChild(productDiv);
    });
  }

  function getProductPrice(productNumber) {
    // ����� ����� �������� ������ ��� ��������� ���� ������ �� ��� ������
    return (productNumber * 2).toFixed(2);
  }
});

function addToCart(productNumber) {
  console.log(����� ${productNumber} �������� � �������);
}
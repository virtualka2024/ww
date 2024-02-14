const ingredientsData = {
  1: ['����� �����', '����� ���������� � ������������ ��������� � ������-������ �����'],
  2: ['������ �� �����', '������� ������ �� ��� �� Stray Kids, � �������� �� ������ ������ ����, �������� ������� � ���������'],
  3: ['������', '���� ����, ������ ���� ����, ������, �������, ������ ������, ������ ������� �����, ����� ������, ��������� ��������, ������� � ��������.'],
  4: ['����-��� �����', '������� � ����� ��������� � ��������� �� ������'],
  5: ['����-��� ���', '������� � ����� ��������� � ��������� �� �������� ���'],
  6: ['����-��� ������', '������� � ����� ��������� � ��������� �� �������'],
};

(function () {
  const cart = [];

  function showIngredients(productId) {
    const ingredientsContainer = document.getElementById('ingredients');
    const ingredientsList = document.getElementById('ingredients-list');

    ingredientsList.innerHTML = '';

    if (ingredientsData[productId]) {
      ingredientsData[productId].forEach((ingredient) => {
        const listItem = document.createElement('li');
        listItem.textContent = ingredient;
        ingredientsList.appendChild(listItem);
      });
    } else {
      const listItem = document.createElement('li');
      listItem.textContent = '������ �� ������';
      ingredientsList.appendChild(listItem);
    }

    ingredientsContainer.style.display = 'block';
  }

  function closeIngredients() {
    const ingredientsContainer = document.getElementById('ingredients');
    ingredientsContainer.style.display = 'none';
  }

  function addToCart(productName) {
    const cartItemsContainer = document.getElementById('cartItemsPanel');
    const cartItemElement = document.createElement('li');
    cartItemElement.classList.add('cart-item');
    cartItemElement.textContent = productName;
    cartItemsContainer.appendChild(cartItemElement);
    alert('����� �������� � �������!');
  }

  function openPayment() {
    const phoneNumber = prompt('������� ��� ����� ��������:');
    const userName = prompt('������� ���� ���:');
    
    if (phoneNumber && userName) {
        alert(`${userName}, �� ��� ����� ${phoneNumber} ��������� ���� ��� ������.`);
    } else {
        alert('������� ���������� ������.');
    }
  }

  function openHelp() {
    const userPhoneNumber = prompt('�������� ���� ����� ��������:');
    
    if (userPhoneNumber) {
      alert(`�������! � ������� 5 ����� � ���� �������� ��� ������������� �� ������: ${userPhoneNumber}`);
    } else {
      alert('����������, �������� ���� ����� ��������.');
    }
  }

  // ��� ��� ��������� ����� �� ������ "�������� � �������"
  window.addToCart = addToCart;

  // ��� ��� ��������� ����� �� ������ "������"
  window.showIngredients = showIngredients;

  // ��� ��� ��������� ����� �� ������ "�������" � ���� �������
  window.closeIngredients = closeIngredients;

  // ��� ��� ��������� ����� �� ������ "��������"
  window.openPayment = openPayment;

  // ��� ��� ��������� ����� �� ������ "������"
  window.openHelp = openHelp;
})();

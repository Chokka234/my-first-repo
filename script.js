let total = 0;

function addItem() {
  const item = document.getElementById('item').value;
  const qty = parseInt(document.getElementById('qty').value);
  const price = parseFloat(document.getElementById('price').value);

  if (!item || isNaN(qty) || isNaN(price)) {
    alert("Please enter valid details!");
    return;
  }

  const itemTotal = qty * price;
  total += itemTotal;

  const tableBody = document.getElementById('bill-body');
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${item}</td>
    <td>${qty}</td>
    <td>₹${price.toFixed(2)}</td>
    <td>₹${itemTotal.toFixed(2)}</td>
  `;

  tableBody.appendChild(row);

  document.getElementById('total').innerText = `Total: ₹${total.toFixed(2)}`;

  // Clear inputs
  document.getElementById('item').value = '';
  document.getElementById('qty').value = '';
  document.getElementById('price').value = '';
}

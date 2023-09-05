function sendMoveItemRequest(product_id, quantity, action, url) {
    const product_id = document.getElementById("product").value;
    console.log(product_id);
    const quantity = document.getElementById("quantity").value;
    console.log(quantity);
    const action = document.querySelector('input[name="action"]:checked').value;
    console.log(moveItemURL);

    axios.post(moveItemURL, {
        product_id: product_id,
        quantity: quantity,
        action: action,
    })
    .then(function (response) {
      // Handle the response, e.g., show a success message
      console.log(response.data);
    })
    .catch(function (error) {
      // Handle any errors, e.g., show an error message
      console.error(error);
    });
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("warehouseTransferForm");
    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission
  
        // Get the selected values from the form
        const product_id = document.getElementById("product").value;
        const quantity = document.getElementById("quantity").value;
        const action = document.querySelector('input[name="action"]:checked').value;
  
        // Define the URL to send the POST request to
        const url = "/move_item/"; // Replace with the actual URL
  
        // Call the function to send the POST request
        sendMoveItemRequest(product_id, quantity, action, url);
      });
    }
  });
  
  
  
let btndta = document.getElementById("ourproduct");

console.log(btndta)

// let products = [
//     {
//         Brand: "Fortune",
//         category: "Grocery",
//         Description: "Wheat",
//         Id: "2339H9H",
//         Price: "₹484",
//         stock: "25tonne",
//         Rating: "4",
//     },
//     {
//         Brand: "Fortune",
//         category: "Grocery",
//         Description: "Wheat",
//         Id: "2339H9H",
//         Price: "₹484",
//         stock: "25tonne",
//         Rating: "4",
//     },
//     {
//         Brand: "Fortune",
//         category: "Grocery",
//         Description: "Wheat",
//         Id: "2339H9H",
//         Price: "₹484",
//         stock: "25tonne",
//         Rating: "4",
//     },
//     {
//         Brand: "Fortune",
//         category: "Grocery",
//         Description: "Wheat",
//         Id: "2339H9H",
//         Price: "₹484",
//         stock: "25tonne",
//         Rating: "4",
//     },
//     {
//         Brand: "Fortune",
//         category: "Grocery",
//         Description: "Wheat",
//         Id: "2339H9H",
//         Price: "₹484",
//         stock: "25tonne",
//         Rating: "4",
//     },
//     {
//         Brand: "Fortune",
//         category: "Grocery",
//         Description: "Wheat",
//         Id: "2339H9H",
//         Price: "₹484",
//         stock: "25tonne",
//         Rating: "4",
//     },
//     {
//         Brand: "Fortune",
//         category: "Grocery",
//         Description: "Wheat",
//         Id: "2339H9H",
//         Price: "₹484",
//         stock: "25tonne",
//         Rating: "4",
//     },
//     {
//         Brand: "Fortune",
//         category: "Grocery",
//         Description: "Wheat",
//         Id: "2339H9H",
//         Price: "₹484",
//         stock: "25tonne",
//         Rating: "4",
//     },
//     {
//         Brand: "Fortune",
//         category: "Grocery",
//         Description: "Wheat",
//         Id: "2339H9H",
//         Price: "₹484",
//         stock: "25tonne",
//         Rating: "4",
//     },
//     {
//         Brand: "Fortune",
//         category: "Grocery",
//         Description: "Wheat",
//         Id: "2339H9H",
//         Price: "₹484",
//         stock: "25tonne",
//         Rating: "4",
//     },
//     {
//         Brand: "Fortune",
//         category: "Grocery",
//         Description: "Wheat",
//         Id: "2339H9H",
//         Price: "₹484",
//         stock: "25tonne",
//         Rating: "4",
//     },
//     {
//         Brand: "Fortune",
//         category: "Grocery",
//         Description: "Wheat",
//         Id: "2339H9H",
//         Price: "₹484",
//         stock: "25tonne",
//         Rating: "4",
//     },
//     {
//         Brand: "Fortune",
//         category: "Grocery",
//         Description: "Wheat",
//         Id: "2339H9H",
//         Price: "₹484",
//         stock: "25tonne",
//         Rating: "4",
//     },
//     {
//         Brand: "Fortune",
//         category: "Grocery",
//         Description: "Wheat",
//         Id: "2339H9H",
//         Price: "₹484",
//         stock: "25tonne",
//         Rating: "4",
//     },
//     {
//         Brand: "Fortune",
//         category: "Grocery",
//         Description: "Wheat",
//         Id: "2339H9H",
//         Price: "₹484",
//         stock: "25tonne",
//         Rating: "4",
//     },
//     {
//         Brand: "Fortune",
//         category: "Grocery",
//         Description: "Wheat",
//         Id: "2339H9H",
//         Price: "₹484",
//         stock: "25tonne",
//         Rating: "4",
//     },
// ];


// const data = { username: 'example' };

// let products = ;

fetch('http://192.168.1.26:8080/getProduct', {
  method: 'GET', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
//   body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
    // products = data

    getproducts(data);
   
  })
  .catch((error) => {
    console.error('Error:', error);
  });


//   console.log(data);
// btndta.innerHTML = "<h1>" + "Hello" + "</h1>";

console.log(btndta.innerHTML)
//   data.map((value) => {
//     // console.log(value.name);
//    return btndta.innerHTML = `<li>${value.name}</li> <li>${value.email}</li>`;
//   }).join(' ');


const getproducts = (data) => {
    btndta.innerHTML = data
    .map(function (product, index) {
        return (
            "<ul class='producttable'>" +

            "<li>" + product.brand + "</li>" +
            "<li>" + product.category + "</li>" +
            "<li>" + product.description +"</li>" +
            "<li>" + product.id +"</li>" +
            "<li>" + product.price + "</li>" +
            "<li>" + product.stock + "</li>" +
            "<li>" + product.rating + "</li>" +

            "</ul>"
        );
    })
    .join("");
}
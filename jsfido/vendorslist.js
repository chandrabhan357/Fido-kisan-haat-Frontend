let btndta = document.getElementById("ourdata");

let vendors = [
  {
    name: "Shyam",
    email: "shyamjaiswal@gmail.com",
    mobile: "6479464421",
    Adress: "Patna",
    product: "All Products",
  },
  {
    name: "Bob",
    email: "bob32@gmail.com",
    mobile: "6479464421",
    Adress: "Patna",
    product: "All Products",
  },
  {
    name: "Jai",
    email: "jai87@gmail.com",
    mobile: "6479464421",
    Adress: "Patna",
    product: "All Products",
  },
  {
    name: "Jai",
    email: "jai87@gmail.com",
    mobile: "6479464421",
    Adress: "Patna",
    product: "All Products",
  },
  {
    name: "Jai",
    email: "jai87@gmail.com",
    mobile: "6479464421",
    Adress: "Patna",
    product: "All Products",
  },
  {
    name: "Jai",
    email: "jai87@gmail.com",
    mobile: "6479464421",
    Adress: "Patna",
    product: "All Products",
  },
  {
    name: "Jai",
    email: "jai87@gmail.com",
    mobile: "6479464421",
    Adress: "Patna",
    product: "All Products",
  },
];
fetch('http://192.168.1.26:8080/api/vendors', {
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

    getvendors(data);
   
  })
  .catch((error) => {
    console.error('Error:', error);
  });


  const getvendors = (data) =>{
    btndta.innerHTML = data
    .map(function (vendor, index) {

      var utcDate = vendor.createdAt?.toLocaleString();  // ISO-8601 formatted date returned from server
      // var localDate = new Date(utcDate);


  var mydate = dayjs(utcDate).format("DD-MM-YYYY")

      return (
        "<ul class='vendortable'>" +
        "<li>" +
        mydate +
        "</li>" +
        "<div class='vendoremail'>" +
        "<h2>" +
        vendor.fullName +
        "</h2>" +
        "<p class='email'>" +
        vendor.email +
        "</p>" +
        "</div>" +
        "<li>" +
        vendor.mobile +
        "</li>" +
        "<li class='Addressrow'>" +
        vendor?.address +
        "</li>" +
        "<button class=btnedit onClick=navigateProduct();>" +
        "products" +
        "</button>" +
        //"<div class='btndel'>" +
        //"<button class='btnedits' >" +
        //"Customers" +
        //"</button>" +
        //"<button class='btneditss'>" +
        //"Delete" +
        //"</button>" +
        //"</div>" +
        "</ul>"
      );
    })
    .join("");
  }

//   console.log(data);
//btndta.innerHTML = `<h1>Hello</h1>`;
//   data.map((value) => {
//     // console.log(value.name);
//    return btndta.innerHTML = `<li>${value.name}</li> <li>${value.email}</li>`;
//   }).join(' ');



function navigateProduct() {
  console.log("clicked");
  window.location.href = "http://localhost:5502/allproduct.html";
}

let btndta = document.getElementById("ourdata");

let invoicelists = [
    {
        User_Name: "Shyam",
        Vendor_Name:"Rajesh",
        email: "shyamjaiswal@gmail.com",
        Date: "6479464421",
        Invoice: "Patna",
        Total_Price: "₹4555",
    },
    {
        User_Name: "Shyam",
        Vendor_Name:"Rajesh",
        email: "shyamjaiswal@gmail.com",
        Date: "6479464421",
        Invoice: "Patna",
        Total_Price: "₹4555",
    },
    {
        User_Name: "Shyam",
        Vendor_Name:"Rajesh",
        email: "shyamjaiswal@gmail.com",
        Date: "6479464421",
        Invoice: "Patna",
        Total_Price: "₹4555",
    },
    {
        User_Name: "Shyam",
        Vendor_Name:"Rajesh",
        email: "shyamjaiswal@gmail.com",
        Date: "6479464421",
        Invoice: "Patna",
        Total_Price: "₹4555",
    },
    {
        User_Name: "Shyam",
        Vendor_Name:"Rajesh",
        email: "shyamjaiswal@gmail.com",
        Date: "6479464421",
        Invoice: "Patna",
        Total_Price: "₹4555",
    },
    {
        User_Name: "Shyam",
        Vendor_Name:"Rajesh",
        email: "shyamjaiswal@gmail.com",
        Date: "6479464421",
        Invoice: "Patna",
        Total_Price: "₹4555",
    },
];
//fetch('http://192.168.1.26:8080/api/vendors', {
//method: 'GET', // or 'PUT'
//headers: {
//'Content-Type': 'application/json',
// },
//   body: JSON.stringify(data),
//})
//.then((response) => response.json())
//.then((data) => {
//console.log('Success:', data);
// products = data

//   getvendors(data);

//})
//.catch((error) => {
//console.error('Error:', error);
//});


const invoice = (data) => {
    btndta.innerHTML = invoicelists
        .map(function (invoicelist, index) {

            var utcDate = invoicelist.createdAt?.toLocaleString();  // ISO-8601 formatted date returned from server
            // var localDate = new Date(utcDate);
            var mydate = dayjs(utcDate).format("DD-MM-YYYY")

            return (
                "<ul class='vendortable'>" +
                "<li>" + invoicelist.User_Name + "</li>"
                +
                "<div class='vendoremail'>" +
                "<h2>" +
                invoicelist.Vendor_Name +
                "</h2>" +
                "<p class='email'>" +
                invoicelist.email +
                "</p>" +
                "</div>" +
                "<li>" +
                mydate +
                "</li>" +
               // "<li>" +
                //invoicelist.Invoice +
                //"</li>" +
                "<button class=btnedits onClick=navigateProduct(); >" +
                "Invoice" +
                "</button>" +
                "<li >" +
                invoicelist.Total_Price +
                "</li>" +
                 
                //"<div class='btndel'>" +
                //"<button class='btnedits' >" +
                //"Invoice" +
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

invoice(invoicelists);

//   console.log(data);
//btndta.innerHTML = `<h1>Hello</h1>`;
//   data.map((value) => {
//     // console.log(value.name);
//    return btndta.innerHTML = `<li>${value.name}</li> <li>${value.email}</li>`;
//   }).join(' ');



//function navigateProduct() {
 // console.log("clicked");
//  window.location.href = "http://localhost:5500/ad/allproduct.html";
//}
function navigateProduct() {
    console.log("clicked");
    window.location.href = "http://localhost:5502/Invoice1.html";
  }
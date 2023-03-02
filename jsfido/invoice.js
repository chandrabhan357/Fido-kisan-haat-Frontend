let btndta = document.getElementById("invoice1");

console.log(btndta)

let invoice= [
    {
        
        SiNo: "1",
        Description: "Wheat",
        UnitPrice :"6566",
        Discount: "₹484",
        Qty: "25tonne",
        TaxRate:"5%",
        TaxAmount:"20",
        TotalAmount:"7484",
    },
    {
        SiNo: "2",
        Description: "Wheat",
        UnitPrice :"6566",
        Discount: "₹484",
        Qty: "25tonne",
        TaxRate:"5%",
        TaxAmount:"20",
        TotalAmount:"7484",
    },
    {
        SiNo: "3",
        Description: "Wheat",
        UnitPrice :"6566",
        Discount: "₹484",
        Qty: "25tonne",
        TaxRate:"5%",
        TaxAmount:"20",
        TotalAmount:"7484",
    },
    {
        SiNo: "4",
        Description: "Wheat",
        UnitPrice :"6566",
        Discount: "₹484",
        Qty: "25tonne",
        TaxRate:"5%",
        TaxAmount:"20",
        TotalAmount:"7484",
    },
    {
        SiNo: "5",
        Description: "Wheat",
        UnitPrice :"6566",
        Discount: "₹484",
        Qty: "25tonne",
        TaxRate:"5%",
        TaxAmount:"20",
        TotalAmount:"7484",
    },
];

// var sumalltotle = invoice.map(amount).reduce(sum);


const btntotle = document.getElementById("Totalamount")

btntotle.innerText = invoice.reduce((n, {TotalAmount}) => n + parseInt(TotalAmount), 0);
console.log(invoice.reduce((n, {TotalAmount}) => n + parseInt(TotalAmount), 0));

//  console.log(sumalltotle) 


const getinvoice = (data) => {
    btndta.innerHTML = data
    .map(function (invoice, index) {
  
        // sumalltotle = sumalltotle + parseInt(invoice.TotalAmount);

// console.log(sumalltotle)

        return (
            "<ul class='invoicehead'>" +
            "<li>" +invoice.Date + "</li>" +
            "<li>" +invoice.Description + "</li>" +
            "<li>" +invoice.UnitPrice +"</li>" +
            "<li>" +invoice.Discount +"</li>" +
            "<li>" +invoice.Qty +"</li>" +
            "<li>" +invoice.TaxRate + "</li>" +
            "<li>" +invoice.TaxAmount+ "</li>" +
            "<li>" +invoice.TotalAmount+ "</li>" +
            "</ul>"
        );
    })
    .join("");
}

// console.log(sumalltotle)

getinvoice(invoice);
//var form = document.getElementById('invoice')

//var btnpdf=document.getElementById('btnpdf')

//console.log(form)

//btnpdf.addEventListener('click',function(event) {
   // event.preventDefault()
    // var text = document.getElementById('text').value
    // var fontsize = document.getElementById('fontsize').value
    
   // var doc = new jsPDF()
    // doc.text(text,20,20)
    // doc.setFontSize(fontsize)
    // doc.text(text,20,20)

  //  doc.save("output.pdf")
//});


var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function inWords (num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
    return str;
}

// document.getElementById('number').onkeyup = function () {
    document.getElementById('words').innerHTML = inWords(btntotle.innerText);
// };

function generatePDF(){
//   const element = document.getElementById("invoice");

//   html2pdf()
//   .from(element)
//   .print();

window.print()

}


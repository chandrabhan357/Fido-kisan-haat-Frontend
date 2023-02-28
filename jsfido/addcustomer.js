function handleSubmit(event) {}

const customerForm = document.getElementById("customerForm");

// const log = document.getElementById("log");

customerForm.addEventListener("submit", function (e) {
  //   alert("hello");
  e.preventDefault();

  const name = document.getElementById("name").value;

  const phone = document.getElementById("phone").value;

  const alt_phone = document.getElementById("alt_phone").value;

  const email = document.getElementById("email").value;

  const password = document.getElementById("password").value;

  const address = document.getElementById("address").value;

  const birth = document.getElementById("birthday").value;

  const country = document.getElementById("Country").value;

  const state = document.getElementById("state").value;

  const city = document.getElementById("city").value;

  // const male = document.getElementById("check-male").value;

  // const female = document.getElementById("check-female").value;

  //  const other = document.getElementById("check-other").value;

    const pan = document.getElementById("pancard").files[0];

  const aadhar = document.getElementById("aadhar").files[0];

  const block = document.getElementById("Block").value;

  const pin = document.getElementById("pin").value;

  const formData = {
    fullName: name,
    mobile: phone,
    altmobile: alt_phone,
    email: email,
    password: password,
    address: address,
    dob: birth,
    country: country,
    state: state,
    city: city,
    block: block,
    pincode: pin,
  };

  const radioBtns = document.querySelectorAll('input[type="radio"]:checked');

  for (const btn of radioBtns) {
    formData[btn.name] = btn.value;
  }

  // const data = new FormData(form);

  // let output = "";

  // for(const entry of data) {
  //   output = '${output}${entry[0]}={entry[1]}\r'
  // }

  // log.innerText = output;
  // e.preventDefault();

  console.log(JSON.stringify(formData));

  let arr = [];

  arr.push(formData);
  //   console.log(customer:arr)
  let test = new FormData();
  test.append("customer", JSON.stringify(formData));
  test.append("aadhar", aadhar);
  test.append("pan", pan);

  fetch("http://192.168.1.26:8080/api/addCustomer", {
    method: "POST",
    // headers: {
    //     "Content-Type": "application/json",

    // },
    body: test,
  })
    .then(function (response) {
      console.log(response);
      return response.json();
    })

    .then((data) => {
      localStorage.setItem("token", data.token);
      localStorage.setItem("name", data.name);
      localStorage.setItem("role", data.role);

      console.log("success", data);
    });
});

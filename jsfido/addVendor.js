function handleSubmit(event) {

}

const adminForm = document.getElementById("adminForm");

adminForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    const code = document.getElementById("code").value;

    const phone = document.getElementById("phone").value;

    const alt_phone = document.getElementById("alt_phone").value;

    const address = document.getElementById("address").value;

    const pancard = document.getElementById("pancard").files[0];

    const aadhar = document.getElementById("aadhar").files[0];

    const doc = document.getElementById("doc").files[0];

    const formData = {
        fullName: fullName, email: email, password: password, code: code,
        mobile: phone, altmobile: alt_phone, address:address,
    };

    console.log(JSON.stringify(formData));

    let arr = [];
    
    arr.push(formData);

    let test = new FormData();
    test.append("vendor", JSON.stringify(formData));
    test.append("aadhar", aadhar);
    test.append("pan", pan);
    test.append("", );

    fetch("",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: test,
    })

      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then((data) => {
      localStorage.setItem('token', data.token)
      localStorage.setItem('name', data.name)
      localStorage.setItem('role', data.role)
    

      console.log("success", data);

      });


 
})
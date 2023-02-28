function handleSubmit(event) {
  // event.preventDefault(); // prevent form from submitting and refreshing page
  // const email = document.getElementById("modalusername").value;
  // const password = document.getElementById("current-password").value;
}

const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function (e) {
  e.preventDefault();

  //  const formData = new FormData(this);
  //  formData.append('abc@gmail.com', 'abc');
  //  console.log(formData)

  const email = document.getElementById("email").value;

  const password = document.getElementById("current-password").value;

  const formData = { email: email, password: password };

  console.log(formData);

  fetch("http://192.168.1.26:8080/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      console.log(response);

      if (response?.status === 200) return response.json();
      else throw new Error("Wrong password");
    })
    .then((data) => {
      localStorage.setItem("token", data.token);
      localStorage.setItem("name", data.name);
      localStorage.setItem("role", data.role);
      localStorage.setItem("email", data.email);
      console.log("success", data);
      window.location.href = "http://localhost:5502/index.html";
    })
    .catch(function (error) {
      window.alert("wrong credentials")
      console.error(error);
    });
});

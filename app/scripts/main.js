
  function validateForm() {
      var fname = document.forms["contact"]["firstname"].value;
      var lname = document.forms["contact"]["lastname"].value;
      var message = document.querySelector("textarea").value;

      if (fname == "" || lname=="" || message == "") {
          alert("All form values must be filled out");
          return false;
      }
  }

$(function() {
  $("#contactForm").validate({
  // Specify validation rules
    rules: {
      name: "required",
      email: {
        required: true,
        email: true
        },
      phone: "required",
      comments: "required",

    },
    // Specify validation error messages
    messages: {
      name: "Please enter your name",
      email: "Please enter a valid email address",
      phone: "Please Enter your phone number",
      comments: "Please enter a your comment"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
          //form.submit();
      $.post("SendMail.php", $("#contactForm").serialize(),  function(response){
        $('#success').html(response);
        $('#success').show(0).delay(10000).hide(0);
        $("#contactForm")[0].reset();
      });
      return false;
    }
  });
});
$("#send-fish").on("click", function(event) {
    event.preventDefault();
     
    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const subject = 'PORTFOLIO EMAIL: ' + $("#subject").val().trim();
    const text = 'from '+name +': '+ $("#message").val().trim()
    
      var mailOptions = {
      from: email,
      to: "veliaarizpe@gmail.com",
      subject: subject,
      text: text
    };
    
    

    $.post("/form/emailinfo", mailOptions, function(){ 
        console.log ("Server received Data")

    })
 
    alert("Thank you for your email, "+ name +"!" );
 
    console.log(mailOptions)
 
   // empty each input box by replacing the value with an empty string
   $("#name").val(""),
   $("#email").val(""),
   $("#subject").val(""),
   $("#message").val("")
 
});




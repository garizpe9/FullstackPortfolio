$("#send-fish").on("click", function(event) {
    event.preventDefault();
     
    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const subject = $("#subject").val().trim();
    const text = 'from '+name +': '+ $("#message").val().trim()
    

    var mailOptions = {
        from: email,
        to: "veliaarizpe@gmail.com",
        subject: subject,
        text: text
      };
    

    $.post("/emailinfo", mailOptions, function(){ 
        console.log ("Server received Data")

    })
 
    alert("Thank you for your email, "+ name +"!" );
 
    console.log(name)
 
   // empty each input box by replacing the value with an empty string
   $("#name").val(""),
   $("#email").val(""),
   $("#subject").val(""),
   $("#message").val("")
 
});




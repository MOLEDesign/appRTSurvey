function questionSubmit() {

    var url = "http://mobileapps.moledesign.biz/myquestions/server/post.php"; // the script where you handle the form input.

    $.ajax({
        type: "POST",
        url: url,
        data: $("#postquestion").serialize(), // serializes the form's elements.
        success: function(data)
        {
            alert('Your questionaire has been submitted. Thank you'); // show response from the php script.
            window.location = "index.html";
        },
        error: function(){
            alert('There was an error recording your answers. Please check signal strength and try again');
        }
    });

    return false;

}

function askSubmit() {

    var url = "http://mobileapps.moledesign.biz/myquestions/server/post_ask.php"; // the script where you handle the form input.

    $.ajax({
        type: "POST",
        url: url,
        data: $("#postask").serialize(), // serializes the form's elements.
        success: function(data)
        {
            alert('Your question has been submitted. Thank you'); // show response from the php script.
            window.location = "index.html";
        },
        error: function(){
            alert('There was an error recording your question. Please check signal strength and try again');
        }
    });

    return false;

}
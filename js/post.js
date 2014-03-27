function questionSubmit() {

    var url = "http://apps.gwtrains.co.uk/rtsurvey/server/post.php"; // the script where you handle the form input.

    var data = $('#questionaire').serializeArray();
    // data.push(
    //    {name: 'fullname', value: db_user.getItem('fullname')},
    //    {name: 'mobilenumber', value: db_user.getItem('mobilenumber')},
    //    {name: 'email', value: db_user.getItem('email')}
    //);

    $.ajax({
        type: "POST",
        url: url,
        data:   data, // serializes the form's elements.
        success: function(data)
        {
            alert('Your survey has been submitted. Thank you'); // show response from the php script.
            window.location = "index.html";
        },
        error: function(){
            alert('There was an error recording your survey. Please check signal strength and try again');
        }
    });

    return false;

}

function askSubmit() {

    var url = "http://apps.gwtrains.co.uk/rtsurvey/server/post_ask.php"; // the script where you handle the form input.

    var f = element('postask');

    var data = $('#postask').serializeArray();
    data.push(
        {name: 'fullname', value: db_user.getItem('fullname')},
        {name: 'mobilenumber', value: db_user.getItem('mobilenumber')},
        {name: 'email', value: db_user.getItem('email')},
        {name: 'server', value: db_server.getItem('server')}
    );

    $.ajax({
        type: "POST",
        url: url,
        data:   data, // serializes the form's elements.
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
function password_security(){
    // var password =$("#u_password").val;
    // $("#u_password").val(md5(password));
    // return true;
    var $password = $("#u_password");

    var password = $password.val();

    $password.val(md5(password));

    return true
}


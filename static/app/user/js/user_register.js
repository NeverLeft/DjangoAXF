function check_password() {
    var email_color = $('#u_email_info').css('color');
    console.log(email_color);
    if (email_color === 'rgb(255, 0, 0)'){
        return false
    }
    var u_name_color =$('#u_name_info').css('color');
    if (u_name_color === 'rgb(255, 0, 0'){
        return false
    }

    var password = $("#u_password").val();
    console.log(password);
    if (password.length<6 | password >16){
        return false
    }

    var password_confirm = $("#u_password_confirm").val();
    console.log(password_confirm);

    if (password === password_confirm) {
        $("#u_password").val(md5(password));

        return true
    } else {
        return false
    }

}

$(function(){

    $("#username").change(function () {
        var value=$(this).val();
        console.log(value);

        $.getJSON('/axf/checkuser/',{"u_name":value},function (data) {
            console.log(data);
            if (data['status'] ==='200'){
                console.log('用户名可用');
                $("#u_name_info").html("用户名可用").css('color','green');
            }else{
               console.log('用户名已存在');
               $("#u_name_info").html("用户名已存在").css('color','red');
            }
        })
    })
    $('#u_email').change(function(){
        var u_email =$(this).val();
        console.log(u_email);
        $.getJSON('/axf/checkemail/',{'u_email':u_email},function(data){
            console.log(data);
            if (data['status'] =='200'){
                console.log("邮箱可用");
                $('#u_email_info').html('邮箱可用').css('color','green');
            }else{
                console.log('邮箱已存在');
                $('#u_email_info').html('邮箱已存在').css('color','red');
            }

        })
    })
    $("#u_password_confirm").change(function () {
        var password = $("#u_password").val();
        var password_confirm = $("#u_password_confirm").val();
        if (password === password_confirm){
            $("#u_password_confirm_info").html("密码输入一致").css('color','green')
        }else{
            $("#u_password_confirm_info").html("密码输入不一致").css('color','red')
        }
    })
})

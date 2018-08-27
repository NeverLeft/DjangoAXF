$(function () {

    $("#all_types").click(function () {

        console.log("全部类型");

        $("#all_type_container").show();

        $(this).find("span").find("span").removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up");

        $("#sort_rule_container").hide();

        $("#sort_rule").find("span").find("span").removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down");
    });

    $("#all_type_container").click(function () {
        $(this).hide();
        $("#all_types").find("span").find("span").removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down");

        // $(this).slideUp();
    });

    $("#sort_rule").click(function () {

        console.log("排序规则");

        $("#sort_rule_container").show();

        $(this).find("span").find("span").removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up");

        $("#all_type_container").hide();

        $("#all_types").find("span").find("span").removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down");


    });


    $("#sort_rule_container").click(function () {
        $(this).hide();

        $("#sort_rule").find("span").find("span").removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down");

    });
    $(".addShoping").click(function(){
        var $addShoping = $(this);
         //    获取属性 两种方式   attr    prop
        //    prop 获取自有属性
        //    attr 可以获取所有属性
        console.log("添加到购物车");
        var goodsid = $addShoping.attr("goodsid");
        // console.log($addShoping.attr('goodsid'));

        $.getJSON('/axf/addtocart/',{"goodsid":goodsid},function (data) {
            console.log(data);

            if (data["status"] === '302'){

                window.open('/axf/userlogin/',target='_self');
            }else if(data['status']=='200'){

                $addShoping.prev().html(data['goods_num']);
            }
        })

    })

})
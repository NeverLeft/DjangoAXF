$(function () {
    $(".subShoping").click(function () {
        var $subShoping = $(this);
        var $li = $subShoping.parents("li");
        console.log($li.attr("cartid"));

        var cartid = $li.attr("cartid");
        $.getJSON('/axf/subtocart/', {"cartid": cartid}, function (data) {
            console.log(data);
            if (data['status'] === '200') {
                if (data['goods_num'] === 0) {
                    $li.remove()
                } else {
                    $subShoping.next().html(data['goods_num']);
                }
                $('#total_price').html(data['total_price']);
            }
        })
    });
    $('.confirm').click(function (){
        var $confirm = $(this);
        var $li = $confirm.parents('li');
        var cartid = $li.attr("cartid");
        console.log(cartid);
        $.getJSON('/axf/changecartstatus/',{'cartid':cartid},function (data) {
            console.log(data);
            if (data['status'] == '200'){
                if (data['select']){
                    $confirm.find('span').find('span').html('√');
                    if (data['is_all_select']){
                        $(".all_select").find('span').find('span').html('√');
                    }
                }else{
                    $confirm.find('span').find('span').html('');
                    $(".all_select").find('span').find('span').html('');
                }
                 $('#total_price').html(data['total_price']);
            }
        })
    });
    $('.all_select').click(function(){
    //点击全选的时候
    // 如果全选是选中的，需要将全部变成未选中
    // 如果有未选中的，全选按钮变为选中
    // each  相当于 for item in items
    // items  在这里指的就是$('.confirm')
    //    $('.confirm')是一个集合，python中的列表


        selects = [];
        unselects = [];


        $('.confirm').each(function(){
            var $confirm = $(this);
            //长度为0,表示未选中
            if($(this).find('span').find('span').html().length === 0){
                unselects.push($confirm.parents('li').attr('cartid'));
            }else{
                selects.push($confirm.parents('li').attr('cartid'));
            }
        });
        console.log(selects);
        console.log(unselects);

        if (unselects.length >0){
        //    将未选中的发送给服务器    使用#连接每一个元素
            $.getJSON('/axf/changecartsstatus/',{'carts':unselects.join('#'),"select":true},function (data) {
                console.log(data);
                if (data['status']=='200'){
                    console.log("全部变为选中");
                    $('.confirm > span > span').html("√");
                    $('.all_select > span > span').html('√');
                     $('#total_price').html(data['total_price']);
                }
            })
        }else{
            //将所有选中的变为未选中  将所有选中的发送给服务器
            $.getJSON('/axf/changecartsstatus/',{'carts':selects.join('#'),"select":false},function (data) {

                console.log(data);
                if (data['status']=='200'){
                    $('.confirm > span > span').html('');
                    $('.all_select > span > span').html('');
                    $('#total_price').html(data['total_price']);
                }
            })
        }
    });


    $('#make_order').click(function(){
    //    下单，将所有选中的发送给服务器，
        var selects = [];
        $('.confirm > span > span').each(function(){
            if ($(this).html().length>0){
                selects.push($(this).parents('li').attr('cartid'))

            }
        });
        console.log(selects);
        if (selects.length ===0){
            alert('请选择商品');
        }else{
            $.getJSON('/axf/makeorder/',{'carts':selects.join('#')},function (data) {
                console.log(data);
                if (data['status']==='200'){
                    window.open('/axf/orderdetail/?orderid='+ data['order'],tartget="_self");
                }

            })
        }
    })

});
from django.conf.urls import url

from App import views

urlpatterns = [
    url(r'^home/',views.home,name="home"),
    url(r'^market/',views.market,name="market"),
    url(r'^marketwithparams/(\d+)/(\d+)/(\d+)/',views.market_With_params,name="market_with_params"),
    url(r'^cart/',views.cart,name="cart"),
    url(r'^mine/',views.mine,name="mine"),
    url(r'^userregister/',views.user_Register,name="userregister"),
    url(r'^userlgout/',views.userlgout,name='userlgout'),
    url(r'^checkuser/',views.check_user,name='check_user'),
    url(r'^checkemail/',views.check_email,name='check_email'),
    url(r'^userlogin/',views.user_login,name='userlogin'),
    url('r^activeaccount/',views.active_account,name='activeaccount'),
    url(r'^addtocart/', views.add_to_cart, name='add_to_cart'),
    url(r'^subtocart/', views.sub_to_cart, name='sub_to_cart'),
    url(r'^changecartstatus/',views.change_cart_status,name='change_cart_status'),
    url(r'^changecartsstatus/',views.change_carts_status,name='change_carts_status'),
    url(r'^makeorder/',views.make_order,name='make_order'),
    url(r'^orderdetail/',views.order_detail,name='orderdetail'),
    url(r'^alipaycallback/',views.alipay_callback,name='alipaycallback'),
    url(r'^orderlist/',views.order_list,name='order_list'),



]
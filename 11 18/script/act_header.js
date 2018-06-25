document.write('<table width="780" border="0" cellspacing="0" cellpadding="0" bgcolor="#424142">');
document.write('<tr>');
document.write('<td width="133"><a href="http://www.books.com.tw/exep/ap.php?apid=books&areaid=head_act_logo&url=http://www.books.com.tw/"><img src="http://addons.books.com.tw/G/img2000/act_01.jpg" width=111 height=33 border="0" alt="回博客來"></a></td>');
document.write('<td width="316" id="auto"><a href="http://www.books.com.tw/exep/ap.php?apid=books&areaid=head_act_activty&url=http://www.books.com.tw/activity/guide/24hr.htm"><img src="http://addons.books.com.tw/G/img2000/act_02_08gold.jpg" width=316 height=33 border="0"></a></td>');
document.write('<td width="22"><a href="http://www.books.com.tw/exep/ap.php?apid=books&areaid=head_act_cart&url=https://db.books.com.tw/shopping/cart_list.php"><img src="http://addons.books.com.tw/G/img2000/act_icon01_new.jpg" width=22 height=33 border="0" alt="我的購物車"></a></td>');
document.write('<td width="22" style="text-align:center;vertical-align:middle;"><a href="https://db.books.com.tw/shopping/cart_list.php" style="color: rgb(242, 137, 0); font:13px/1.231 arial,helvetica,clean,sans-serif; font-weight: bold; text-decoration: none;"><span id="small_cart"></span></a></td>');
document.write('<td width="18"><img width="12" height="33" border="0" alt="購物車" src="http://addons.books.com.tw/G/img2000/act_icon02_new.jpg" id="shopping_cart_more" style="display:none"></td>');
document.write('<td width="59"><a href="http://www.books.com.tw/exep/ap.php?apid=books&areaid=head_act_mem&url=https://myaccount.books.com.tw/"><img src="http://addons.books.com.tw/G/img2000/act_05.jpg" width=59 height=33 border="0" alt="會員專區"></a></td>');
document.write('<td width="62"><a href="http://www.books.com.tw/exep/ap.php?apid=books&areaid=head_act_cus&url=http://www.books.com.tw/question/inquiry/"><img src="http://addons.books.com.tw/G/img2000/act_06.jpg" width=62 height=33 border="0" alt="服務信箱"></a></td>');
document.write('<td width="74"><a href="http://www.books.com.tw/exep/ap.php?apid=books&areaid=head_act_qa&url=http://www.books.com.tw/web/qa"><img src="http://addons.books.com.tw/G/img2000/act_07.jpg" width=74 height=33 border="0" alt="Q&amp;A詢問台"></a></td>');
document.write('<td width="74"><a href="#" onmouseout="TWAY.wop();" onmouseover="TWAY.pop();" style="display:block;	width:64px;	height:33px;	border:0;	font-size:12px;	line-height:33px;	cursor:pointer;	position:relative;" title="把這個網頁分享到社群!"><span id="span_bg" style="display:block;	width:64px;	height:33px;	border:0;	font-size:12px;	line-height:33px;	cursor:pointer;	position:absolute;left:0;z-index:2;	background:url(http://addons.books.com.tw/G/img2000/act_tway/twayicon.gif) no-repeat 0 -90px;"></span></a></td>');
document.write('</tr>');
document.write('</table>');
document.write('<script language="javascript" src="/js/weblog/web_log.php"></script>');
document.write('<script language="javascript" src="http://jci.book.com.tw/jss/jquery/jquery-1.8.2.min.js"></script>');
document.write('<script language="javascript" src="/exep/lib/js/namespace.js"></script>');
document.write('<script language="javascript" src="/exep/lib/js/act_ajax.js"></script>');
document.write('<script language="javascript" src="/exep/lib/js/aeil.js"></script>');
document.write('<div id="act_tway" onmouseout="TWAY.wop();" onmouseover="TWAY.pop();" style="position:absolute;z-index:999999 !important;display:none;width:110px !important;font-size:12px;line-height:18px;text-align:left;background:#404040;">')
document.write('<div style="width:110px !important;z-index:999999 !important;"><a id="facebook" style="background-position:3px 5px;display:block;text-indent:23px;line-height:24px;color:#ddd;background-repeat:no-repeat;background-image:url(http://addons.books.com.tw/G/img2000/act_tway/twayicon.gif);text-decoration:none;_width:100%;cursor:pointer;" onclick="TWAY.push(this);" onmouseout="TWAY.hout(this);" onmouseover="TWAY.hover(this);">推到facebook</a></div>')
document.write('<div style="width:110px !important;z-index:999999 !important;"><a id="plurk" style="background-position:3px -25px;display:block;text-indent:23px;line-height:24px;color:#ddd;background-repeat:no-repeat;background-image:url(http://addons.books.com.tw/G/img2000/act_tway/twayicon.gif);text-decoration:none;_width:100%;cursor:pointer;" onclick="TWAY.push(this);" onmouseout="TWAY.hout(this);" onmouseover="TWAY.hover(this);">推到噗浪</a></div>')
document.write('<div style="width:110px !important;z-index:999999 !important;"><a id="twitter" style="background-position:3px -55px;display:block;text-indent:23px;line-height:24px;color:#ddd;background-repeat:no-repeat;background-image:url(http://addons.books.com.tw/G/img2000/act_tway/twayicon.gif);text-decoration:none;_width:100%;cursor:pointer;" onclick="TWAY.push(this);" onmouseout="TWAY.hout(this);" onmouseover="TWAY.hover(this);">推到twitter</a></div>')
document.write('</div>')
var TWAY = {
	'pop' : function() {//下拉滑進
		this.position();
		document.getElementById("span_bg").style.backgroundPosition="0pt -123px";
		document.getElementById("act_tway").style.display="block";
	},
	'wop' : function() {//下拉滑出
		document.getElementById("span_bg").style.backgroundPosition="0pt -90px";
		document.getElementById("act_tway").style.display="none";
	},
	'hover' : function(obj) {//選單滑進
			obj.style.backgroundColor="#555";
			obj.style.color="#bf5";
	},
	'hout' : function(obj) {//選單滑出
		obj.style.backgroundColor="";
		obj.style.color="#ddd";
	},
	'push' : function(obj) {//推到社群網		
		var u_f='http://www.books.com.tw/exep/ap.php?apid=books&areaid=head_act_share_f&url='+location.href;
		var u_p='http://www.books.com.tw/exep/ap.php?apid=books&areaid=head_act_share_p&url='+location.href;
		var u_t='http://www.books.com.tw/exep/ap.php?apid=books&areaid=head_act_share_t&url='+location.href;
		var t=document.title;
		switch (obj.id){
		case "facebook":			
			window.open("http://www.facebook.com/sharer.php?u="+encodeURIComponent(u_f)+"&t="+encodeURIComponent(t));
			break;
		case "plurk":			
			window.open("http://www.plurk.com/?qualifier=shares&status=" .concat(encodeURIComponent(u_p)) .concat(" ") .concat("(") .concat(encodeURIComponent(t)) .concat(")"));
			break;
		case "twitter":			
			window.open("http://twitter.com/home/?status=".concat(encodeURIComponent(t)) .concat(" ") .concat(encodeURIComponent(u_t)));
			break;
		}
	},
	'position' : function() {//設定位置座標
			var new_left = new_top = 0;
			var origin = document.getElementById('span_bg');
			if (origin.offsetParent) {
				do {
					new_left += origin.offsetLeft;
					new_top += origin.offsetTop;
				} while (origin = origin.offsetParent);
			}
			var tway = document.getElementById('act_tway');
			tway.style.left = new_left + 'px';
			tway.style.top = new_top + 33 + 'px';
	}
};
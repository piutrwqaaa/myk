/* 變數初始值 */
var n = $( ".item_frame" ).size();
var flag = 0;
var winWidth = $(window).width();  											//視窗寬
var winHeight = $(window).height();											//視窗寬
var set_width = winWidth / 10 ;												//計算基準數，將寬度分割10等分
var normal_item_width = set_width * 2;										//一般狀態佔2等分	
var click_item_width = set_width * 5;										//被選取狀態佔6等分	
var real_frame_width = normal_item_width * n + normal_item_width * 1.5 ;	//算出實際占寬，單格 x 數量 + 被選取者多佔1.5基數


if(winWidth >= 760){
	$(document).ready(function(){
		chengReversalH();
	}); 

	$(window).load(function(){
		chengReversalH();
	}); 

	$(window).resize(function() {
		chengReversalH();
	});	

	function chengReversalH(){
		/* 變數重重新抓取 */
		winWidth = $(window).width();  											//視窗寬
		winHeight = $(window).height();											//視窗寬
		set_width = winWidth / 12 ;												//計算基準數，將寬度分割10等分
		normal_item_width = set_width * 2;										//一般狀態佔2等分	
		click_item_width = set_width * 7;										//被選取狀態佔6等分	
		real_frame_width = normal_item_width * n + normal_item_width * 2.5 ;	//算出實際占寬，單格 x 數量 + 被選取者多佔1.5基數

		/* set size */
		$('.item_frame').css({ 'width' : normal_item_width }); 						// 套上單格寬度
		$('.real_item_frame').css({ 'width' : real_frame_width }); 					// 套上實際佔寬
		$('.real_item_frame .item_frame:nth-child(1)').css({ 'width' : click_item_width }); 	
	}


	/* 偵聽-click */
	$('.bt_next').on('click', function(){
		flag +=1;
		a = flag;
		b = flag;
		frame_check( a, b );
		return false;
	})

	$('.bt_pre').on('click', function(){
		flag -=1;
		a = flag;
		b = flag;
		frame_check( a, b );
		return false;
	})

	/* 偵聽-鍵盤 */
	$(document).keydown(function(event){
		if(event.keyCode == 37 || event.keyCode == 38){
			flag -=1;
			a = flag;
			b = flag;
			frame_check( a, b );
			return false;
		}else if (event.keyCode == 39 || event.keyCode == 40){
			flag +=1;
			a = flag;
			b = flag;
			frame_check( a, b );
			return false;
		}
	}); 
		
	
	/* 偵聽-滾輪 */
	function MouseWheel (e) {
		  e = e || window.event;	  
		  if( e.wheelDelta <= 0 || e.detail > 0 ){
			flag +=1;
			a = flag;
			b = flag;
			frame_check( a, b );
			return false;
		  }else{	  
			flag -=1;
			a = flag;
			b = flag;
			frame_check( a, b );
			return false;
		  }
	}
	
	// hook event listener on window object
	if ('onmousewheel' in window) {
	  window.onmousewheel = MouseWheel;
	} else if ('onmousewheel' in document) {
	  document.onmousewheel = MouseWheel;
	} else if ('addEventListener' in window) {
	  window.addEventListener("mousewheel", MouseWheel, false);
	  window.addEventListener("DOMMouseScroll", MouseWheel, false);
	}
	
	
	
	
	
	
	

	/* 偵聽-區塊 */
	$( ".real_item_frame ul" ).click(function() {
		flag = $( "ul" ).index( this );
		a = flag;
		b = flag;
		frame_check( a, b );
	});
	
	

	
	
	
	


	/* 判斷式 */
	function frame_check( a, b ){
		if(flag <=0 ){
			flag = 0;
			a = flag;
			b = flag;
			effect( a, b);
			$('.bt_pre').css({'opacity': ' 0' });
			return false;
		}if(flag >= n){
			flag = n-1;
			a = flag;
			b = n-3.5;
			effect( a, b);
			return false;
		}if(flag >= n-3){
			b = n-3.5;
			effect( a, b);
			return false;
		}
			$('.bt_pre').css({'opacity': ' 1' });
			effect( a, b);
			return false;
	}

	/* 移動效果 */
	function effect( a, b ){
			$('.real_item_frame .item_frame').css({'width': normal_item_width });  								/* 全部恢復正常寬度 */				
			$('.real_item_frame .item_frame:nth-child(' + (a + 1) + ')').css({'width': click_item_width });   	/* 選取者套上選取寬度 */
			$('.real_item_frame .item_frame').removeClass('f_check');  											/* 清除全部class */				
			$('.real_item_frame .item_frame:nth-child(' + (a + 1) + ')').addClass('f_check');    			    /* 套上選取class */
			$('.real_item_frame').stop().css({'left': -1 * b * normal_item_width  });  							/* 往左移動一單位  */	
			//alert( a + ',' + b ); 																			/* 測試用  */	
	}

}





if(winWidth < 760){
	$(document).ready(function(){
		chengReversalH();
	}); 

	$(window).load(function(){
		chengReversalH();
	}); 

	$(window).resize(function() {
		chengReversalH();
	});	

	function chengReversalH(){
		/* 變數重重新抓取 */
		winWidth = $(window).width();  					//視窗寬
		normal_item_width = winWidth * 0.9;
		real_frame_width = normal_item_width * n;				//算出實際占寬，單格 x 數量
		/* set size */
		$('.item_frame').css({ 'width' : normal_item_width }); 						// 套上單格寬度
		$('.real_item_frame').css({ 'width' : real_frame_width }); 					// 套上實際佔寬
		$('.item_frame').addClass('f_check');
	}
}

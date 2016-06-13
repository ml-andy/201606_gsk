$(document).ready(function(){
	var webData ={};
	webData.wrp=$('.wrapper');

	//Init


	//AddListener
	$.address.change(addrChange);
		//$.address.value("/page4");
	$('.menubtn').click(function(){
		if($(this).hasClass('on')){$(this).removeClass('on');showmenu(false);}
		else {$(this).addClass('on'); showmenu(true);}
	});
	$(window).load(windowLoad);
	function windowLoad(){
		showLoading(false);
	}
    


    //Eevent
    function showmenu(_t){
    	if(_t){
    		$('.menuDom').addClass('on');
    	}else{
    		$('.menuDom').removeClass('on');
    	}
    }
    function changePage(){
    	if(webData.prepage || webData.nowpage==2){
    		webData.wrp.find('.wrapperin').addClass('off');    		
    		if(webData.wrapperTimeout) clearTimeout(webData.wrapperTimeout);
    		webData.wrapperTimeout = setTimeout(function(){webData.wrp.find('.wrapperin').removeClass('off');},500);
    	}
    	webData.wrp.attr('class','wrapper').addClass('page' + webData.nowpage);
    	
    	if(webData.nowpage == 2) webData.prepage = true;
    	else webData.prepage = false;
    }
    function addrChange(){
    	var value = $.address.value();
    	console.log(value);
		switch(value) {
			case '/':
				window.location.href = "index.html#/page1";
			break;
			case '/page1':
				console.log('牙齦緊急檢查');
				webData.nowpage = 1;				
			break;
			case '/page2':
				console.log('牙齦求診須知');
				webData.nowpage = 2;
			break;
			case '/page3':
				console.log('立即索取');
				webData.nowpage = 3;
			break;
            case '/page4':
                console.log('救救牙齦TVC');
                webData.nowpage = 4;
            break;
		}
		changePage();
    }
  	function showLoading(_t){
  		console.log('zz');
  		if(_t) $('.loading').fadeIn();
  		else $('.loading').fadeOut();
  	}
})//ready end  

































































































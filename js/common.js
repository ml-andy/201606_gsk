$(document).ready(function(){
	var webData ={};	

	//Init
	webData.wrp=$('.wrapper');
	webData.pagespeed = 500;
    webData.page1scenes = 1;
    $(".databoxin").mCustomScrollbar({scrollInertia:300,scrollEasing:'linear'});
    //SCORE INIT
    webData.nowscore = 0;
    webData.prescore = 0;

	//AddListener    
    $('.q1ans').click(function(){countScore($(this));});
    $('.start_btn').click(function(){$.address.value("/page1?scenes=2");});
    $('.gobtn').click(function(){if($('.menubtn').hasClass('on')) $('.menubtn').trigger('click');});
    $('.menua').click(function(){$('.menubtn').trigger('click');});
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
    function countScore(_o){
        if(_o.parent().parent().hasClass('multi')){
            //multiple 
            if(_o.hasClass('on')) _o.removeClass('on');
            else _o.addClass('on');
        }else{
            //single
            _o.parent().parent().find('.q1ans').removeClass('on');
            _o.addClass('on');
        }        

        webData.nowscore = 0;
        for(var i=0;i<$('.q1ans').length;i++){
            if($('.q1ans').eq(i).hasClass('on')) webData.nowscore = webData.nowscore + $('.q1ans').eq(i).attr('data-score')*1;
        }
        console.log(webData.nowscore);
        webData.prescore = webData.nowscore;
    }
    function showmenu(_t){
    	if(_t){
    		$('.menuDom').addClass('on');
    	}else{
    		$('.menuDom').removeClass('on');
    	}
    }
    function changepage1Scenes(){
        var _tmp = '';
        if(webData.page1scenes!=1) _tmp = ' scenes' + webData.page1scenes;
        $('.wrapperin .page1 .scenes_all').attr('class','scenes_all' + _tmp);
    }
    function changePage(){
    	if(webData.prepage ==2 || webData.prepage ==4 || webData.nowpage ==2 || webData.nowpage ==4){
    		if(webData.nowpage ==2 || webData.nowpage ==4){
    			if(webData.prepage==1 || webData.prepage==3) webData.wrp.find('.wrapperin').attr('class','wrapperin page' + webData.prepage);
    			$('.wrapper_top').find('.page').removeClass('on');
    			if(webData.prepage ==2 || webData.prepage ==4) $('.wrapper_top').find('.page').addClass('yes');
    			$('.wrapper_top').find('.page' + webData.nowpage).addClass('on');
    		}
    		else{
    			webData.wrp.find('.wrapperin').attr('class','wrapperin');
    			$('.wrapper_top').find('.page').removeClass('yes');
    		}
    		webData.wrp.find('.wrapperin').addClass('off');
    		if(webData.wrapperTimeout) clearTimeout(webData.wrapperTimeout);
    		webData.wrapperTimeout = setTimeout(function(){webData.wrp.find('.wrapperin').removeClass('off');},webData.pagespeed);
    	}
        if(webData.nowpage==1) changepage1Scenes();
    	webData.wrp.attr('class','wrapper').addClass('page' + webData.nowpage);
    	webData.prepage = webData.nowpage;    	
    }
    function addrChange(){
    	var value = $.address.value();
		switch(value) {
			case '/':
				window.location.href = "index.html#/page1";
			break;
			case '/page1':
				console.log('牙齦急診室');
				webData.nowpage = 1;
                webData.page1scenes = 1;
			break;
            case '/page1?scenes=2':
                console.log('牙齦緊急檢查');
                webData.nowpage = 1;
                webData.page1scenes = 2;
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
  		if(_t) $('.loading').fadeIn();
  		else $('.loading').fadeOut();
  	}
})//ready end  
function getUrlVars(){
    var vars=[],hash;var hashes=window.location.href.slice(window.location.href.indexOf('?')+1).split('&');
    for(var i=0;i<hashes.length;i++){hash=hashes[i].split('=');vars.push(hash[0]);vars[hash[0]]=hash[1]}
    return vars
}

































































































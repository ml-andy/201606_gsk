$(document).ready(function(){
	var webData ={};	

	//Init
	webData.wrp=$('.wrapper');
    webData.mainurl = 'http://2016parodontax.everydayhealth.com.tw/20160617/';
    webData.backendurl = 'http://2016parodontax.everydayhealth.com.tw/xml/';
    webData.mapimage = 'http://ml-andy.github.io/chinesechess/website/images/mapicon.png';
    webData.creatUsererrortxt = "請填寫完整資料";
	webData.pagespeed = 500;
    webData.page1scenes = 1;
    webData.page3scenes = 1;
    $(".databoxin").mCustomScrollbar({scrollInertia:300,scrollEasing:'linear'});
    $(".page3 .scenes1 .content").mCustomScrollbar({scrollInertia:300,scrollEasing:'linear'});
    //SCORE INIT
    webData.nowscore = 0;
    webData.nowscorepercent = 0;
    webData.prescore = 0;
    webData.dragscore = 0;
    webData.page1hasplay = false;    

	//AddListener
    $('.agreebox .checkbox').click(function(){if($(this).hasClass('on')){$(this).removeClass('on');}else{$(this).addClass('on');}});
    $('.p3s1gobtn').click(function(){if(!$(this).hasClass('on')) sendData();});
    $('.sure_btn').click(function(){p1s2sure();});
    $('.databox .bar').each(databoxBar);
    $('.q1ans').click(function(){countScore($(this));});
    $('.start_btn').click(function(){$.address.value("/page1?scenes=2");});
    $('.gobtn').click(function(){if($('.menubtn').hasClass('on')) $('.menubtn').trigger('click');});
    $('.menua').click(function(){$('.menubtn').trigger('click');});	
	$('.menubtn').click(function(){
		if($(this).hasClass('on')){$(this).removeClass('on');showmenu(false);}
		else {$(this).addClass('on'); showmenu(true);}
	});
    $.address.change(addrChange);
	$(window).load(windowLoad);
	function windowLoad(){
        windowInit();

	}
    


    //Eevent
    function p1s2sure(){
        $.address.value("/page1?scenes=3");
        $('.q1ans').removeClass('on');
        $('.databox .bar .light').attr('style','');
        $('.databox .bar .cover').attr('style','');
        $('.databoxin').mCustomScrollbar('scrollTo',0);
    }
    function sendData(){
        $('.p3s1gobtn').addClass('on');
        var _user_data = $('.user_data');
        webData.senddata = {
            mob:_user_data.find('.user_phone').val(),
            email:_user_data.find('.user_mail').val(),
            name:_user_data.find('.user_name').val(),
            storeid:webData.shopdata[webData.nowCity].STORES[webData.nowArea].ID,
            ccc:_user_data.find('.user_code').val()
        }
        if(!webData.senddata.mob || !webData.senddata.email || !webData.senddata.name || !webData.senddata.ccc || !$('.agreebox .checkbox').hasClass('on')){
            if(!$('.agreebox .checkbox').hasClass('on')) alert("請同意個資條款");
            else alert(webData.creatUsererrortxt);          
            $('.p3s1gobtn').removeClass('on');
            return;
        }
        $.ajax({
            url: webData.backendurl + 'api_save.ashx',
            type: 'POST',
            dataType: 'json',
            data:webData.senddata,
            success: function(data) {
                if(data.RS=="OK"){
                    webData.page3scenes=2;
                    changepage3Scenes();
                }else alert(data.RS);
                $('.p3s1gobtn').removeClass('on');
            },error: function(xhr, textStatus, errorThrown) {
                $('.p3s1gobtn').removeClass('on');
                console.log("error:", xhr, textStatus, errorThrown);
            }
        });
    }
    function databoxBar(){
        var bar = $(this),
            drag = $(this).find('.light'),
            cover = $(this).find('.cover'),
            _width = bar.width() - 10,
            _width50 = _width / 2;
        drag.mousedown(function(e){
            bar.bind('mousemove', dragmove);
        });
        drag.mouseout(function(e){
            bar.unbind('mousemove', dragmove);
        });
        drag.mouseup(function(e){
            bar.unbind('mousemove', dragmove);
        });
        function dragmove(e){
            var lft = Math.floor(e.pageX-bar.offset().left - (drag.width() / 2));
            if(lft>_width){
                bar.unbind('mousemove', dragmove);
                return
            }
            else if(lft<0){
                bar.unbind('mousemove', dragmove);
                return
            }
            drag.css('left',lft);
            cover.css('width',lft);
            if(cover.width() <= _width50) webData.dragscore = Math.round(cover.width() / _width50 * 5);
            else webData.dragscore = 5 + Math.round((cover.width()-_width50) / _width50 * 15);            
            countScore_true();
        }
    }
    function countScore_true(){
        webData.nowscore = 0;
        //item
        for(var i=0;i<$('.q1ans').length;i++){
            if($('.q1ans').eq(i).hasClass('on')) webData.nowscore = webData.nowscore + $('.q1ans').eq(i).attr('data-score')*1;
        }
        //drag
        webData.nowscore = webData.nowscore + webData.dragscore;
        webData.nowscorepercent = Math.round(webData.nowscore / 85  * 100) - 1;
        console.log("webData.dragscore:" + webData.dragscore + "/" + "webData.nowscore:"+webData.nowscore + "/" + "webData.nowscorepercent:" +webData.nowscorepercent);
        webData.prescore = webData.nowscore;
    }
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
        countScore_true();
    }
    function showmenu(_t){
    	if(_t){
    		$('.menuDom').addClass('on');
    	}else{
    		$('.menuDom').removeClass('on');
    	}
    }
    function changepage3Scenes(){
        var _tmp = '';        
        if(webData.page3scenes!=1) _tmp = ' scenes' + webData.page3scenes;
        $('.wrapperin .page3 .scenes_all').attr('class','scenes_all' + _tmp);
        $('.scenes_all .scenes').removeClass('on');
        $('.wrapperin .page3 .scenes_all .scenes').eq(webData.page3scenes-1).addClass('on');
        $('.wrapperin .page3 .scenes_all .scenes .content').hide();
        if(webData.page1hasplay) $('.wrapperin .page3 .scenes_all .scenes2 .btn1 a').hide().eq(1).show();
        else $('.wrapperin .page3 .scenes_all .scenes2 .btn1 a').hide().eq(0).show();
        if(webData.pg3timeout) clearTimeout(webData.pg3timeout);
        webData.pg3timeout = setTimeout(function(){
            $('.wrapperin .page3 .scenes_all .scenes').eq(webData.page3scenes-1).find('.content').fadeIn();
        },1300);
    }
    function changepage1Scenes(){
        var _tmp = '';        
        if(webData.page1scenes!=1) _tmp = ' scenes' + webData.page1scenes;
        $('.wrapperin .page1 .scenes_all').attr('class','scenes_all' + _tmp);
        $('.scenes_all .scenes').removeClass('on');
        $('.wrapperin .page1 .scenes_all .scenes').eq(webData.page1scenes-1).addClass('on');
        if(webData.page1scenes==2){
            webData.nowscore = 0;
            webData.nowscorepercent = 0;
            webData.prescore = 0;
            webData.dragscore = 0;            
        }
        if(webData.page1scenes==3) page1secenes3ani(true);
        else page1secenes3ani(false);
    }
    function page1secenes3ani(_t){
        var _scenes3 = $('.wrapperin .page1 .scenes_all .scenes3');        
        if(_t){
            webData.page1hasplay = true;
            _scenes3.find('.score').html(0);
            if(webData.nowscorepercent<=40) _scenes3.find('.s').hide().eq(0).show();
            else if(webData.nowscorepercent>40 && webData.nowscorepercent<=80) _scenes3.find('.s').hide().eq(1).show();
            else if(webData.nowscorepercent>80) _scenes3.find('.s').hide().eq(2).show();
            _scenes3.find('.content').hide();
            if(webData.pg1S3timeout) clearTimeout(webData.pg1S3timeout);
            webData.pg1S3timeout = setTimeout(function(){                
                _scenes3.find('.content').fadeIn(300,function(){
                    page1secenes3Scoreani();
                });
            },1300);
        }else{
            _scenes3.find('.content').fadeOut();
        }        
    }
    function page1secenes3Scoreani(){
        var _score = $('.wrapperin .page1 .scenes_all .scenes3 .score');
        var _nownumber = _score.text();
        if(_nownumber < webData.nowscorepercent){
            _nownumber=_nownumber*1 + 1;            
            webData.pg1S3timeout = setTimeout(function(){page1secenes3Scoreani();},33);
        }
        _score.html(_nownumber);
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
        if(webData.nowpage==3){
            $('.footer .gobtn').fadeOut();
            changepage3Scenes();
        }
        else $('.footer .gobtn').fadeIn();
    	webData.wrp.attr('class','wrapper').addClass('page' + webData.nowpage);
    	webData.prepage = webData.nowpage;    	
    }
    function initMap(){
        //Insert City Data
        webData.nowCity = 0;        
        $('.mapdata .city').html('');
        for(i in webData.shopdata) $('.mapdata .city').append('<option>'+ webData.shopdata[i].city +'</option>');
        $('.mapdata .city').change(function(){
            webData.nowCity = $('.mapdata .city option:selected').index();
            changeCity();
        });
        $('.mapdata .area').change(function(){
            webData.nowArea = $('.mapdata .area option:selected').index();
            changeArea();
        });

        //Start
        setTimeout(function(){changeCity();},1500);
    }
    function changeCity(){
        console.log("webData.nowCity:"+webData.nowCity);
        webData.nowArea = 0;
        $('.mapdata .area').html('');
        for(i in webData.shopdata[webData.nowCity].STORES) $('.mapdata .area').append('<option>'+ webData.shopdata[webData.nowCity].STORES[i].STORE +'</option>');
        changeArea();
    }
    function changeArea(){
        console.log("webData.nowArea:"+webData.nowArea);
        $('.shop_addr').html(webData.shopdata[webData.nowCity].STORES[webData.nowArea].ADDRESS);
        var _shop = webData.shopdata[webData.nowCity].STORES[webData.nowArea];
        console.log("_shop.LAT:"+_shop.LAT+"/"+"_shop.LNG:"+_shop.LNG);
        webData.mapOptions = {zoom: 18,center: new google.maps.LatLng(_shop.LAT, _shop.LNG)}
        webData.map = new google.maps.Map(document.getElementById('mapCanvas'),webData.mapOptions); 
        var beachMarker = new google.maps.Marker({position: new google.maps.LatLng(_shop.LAT, _shop.LNG),map: webData.map,icon: webData.mapimage});
        webData.map.setCenter(new google.maps.LatLng(_shop.LAT, _shop.LNG));
        // google.maps.event.addListenerOnce(webData.map, 'idle', function(){
        //     //loaded fully
        //     console.log('zzzz');
        //     webData.map.setCenter(new google.maps.LatLng(_shop.LAT, _shop.LNG));
        // });
    }
    function windowInit(){
        var _random = Math.round(Math.random()*1000)+1;
        $('.user_code').parent().prepend('<img src="'+ webData.backendurl +'api_vcode.ashx?'+_random+'" class="code">');

        $.ajax({
            url: webData.backendurl + 'api_store.ashx',
            type: 'POST',
            dataType: 'json',
            success: function(data) {
                webData.shopdata = data.DATA;
                console.log(webData.shopdata);
                showLoading(false);
                if(data.RS=="OK"){
                    initMap();
                }else console.log(data.RS);            
            },error: function(xhr, textStatus, errorThrown) {
                showLoading(false);
                console.log("error:", xhr, textStatus, errorThrown);
            }
        });
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
            case '/page1?scenes=3':
                console.log('診斷結果');
                webData.nowpage = 1;
                webData.page1scenes = 3;
            break;
			case '/page2':
				console.log('牙齦求診須知');
				webData.nowpage = 2;
			break;
			case '/page3':
				console.log('立即索取');
				webData.nowpage = 3;
                webData.page3scenes = 1;
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

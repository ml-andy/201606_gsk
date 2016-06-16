$(document).ready(function(){
	var webData ={};	

	//Init
	webData.wrp=$('.wrapper');    
    webData.backendurl = 'http://2016parodontax.everydayhealth.com.tw/xml/';
    if(device.mobile()) webData.device="mobile";
    else webData.device="pc";
    
    //Addlistener
    $('.btn').click(function(){
        if(webData.userdata.EXCHANGE==0) showpop(true);
    })
	$(window).load(windowLoad);
	function windowLoad(){
        windowInit();
	}
    


    //Eevent    
    function showpop(_t){
        if(_t) $('.pop').fadeIn();
        else $('.pop').fadeOut();
    }
    function senddata(){
        var getcode = window.location.href.split('.html?')[1];
        showLoading(true);
        $.ajax({
            url: webData.backendurl + 'api_exchange_confirm.ashx',
            type: 'POST',
            dataType: 'json',
            data:{
                qs:getcode
            },
            success: function(data) {
                console.log(data);
                showLoading(false);
                if(data.RS=="OK"){
                    showpop(false);
                    setTimeout(function(){
                        $('.pop').html('');
                        webData.userdata.EXCHANGE=1;
                        $('.btn').removeClass('nochange').addClass('haschange');
                    },300);                    
                }else alert(data.RS);
            },error: function(xhr, textStatus, errorThrown) {
                showLoading(false);
                console.log("error:", xhr, textStatus, errorThrown);
            }
        });        
    }
    function windowInit(){
        var getcode = window.location.href.split('.html?')[1];
        $.ajax({
            url: webData.backendurl + 'api_exchange.ashx',
            type: 'POST',
            dataType: 'json',
            data:{
                qs:getcode
            },
            success: function(data) {
                console.log(data);
                webData.userdata = data;
                if(data.RS=="OK"){
                    $('.city').html(webData.userdata.CITY);
                    $('.store').html(webData.userdata.STORE);
                    $('.content').addClass('on');
                    if(webData.userdata.EXCHANGE!=0) $('.btn').removeClass('nochange').addClass('haschange');
                    else{
                        $('.pop').append('<div class="main"><div class="w">確定要兌換了嗎?</div><div class="yesbtn"></div><div class="nobtn"></div></div><div class="cover"></div>');
                        $('.yesbtn').click(function(){
                            if(!$(this).hasClass('on')) senddata();
                        });
                        $('.nobtn').click(function(){showpop(false);});
                        $('.btn').removeClass('haschange').addClass('nochange');
                    }
                }else alert(data.RS);
                showLoading(false);
            },error: function(xhr, textStatus, errorThrown) {                
                console.log("error:", xhr, textStatus, errorThrown);
            }
        });        
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

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-56333580-6', 'auto');
ga('require', 'displayfeatures');
ga('send', 'pageview');

function tracker_pg( value ){
	var _value = value;
	if(device.mobile()) _value = '/m'+_value;	
  	ga('send', 'pageview',_value);
};
function tracker_btn( valuebt ){
	var _valuebt = valuebt;
	if(device.mobile()) _valuebt = '/m'+_valuebt;
	ga('send', 'event', 'button', 'click', _valuebt);
};

































































































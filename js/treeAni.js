(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 380,
	height: 378,
	fps: 30,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.複製 = function() {
	this.spriteSheet = ss["treeAni_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._01 = function() {
	this.spriteSheet = ss["treeAni_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.樹4 = function() {
	this.spriteSheet = ss["treeAni_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.樹5 = function() {
	this.spriteSheet = ss["treeAni_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.樹6 = function() {
	this.spriteSheet = ss["treeAni_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.樹 = function() {
	this.spriteSheet = ss["treeAni_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.red = function() {
	this.spriteSheet = ss["treeAni_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.群組4 = function() {
	this.spriteSheet = ss["treeAni_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.元件2複製 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.群組4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,99,108);


(lib.元件1 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhchqIC5BqIi5Brg");
	this.shape.setTransform(4.4,5.1,0.47,0.47);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,8.8,10.2);


(lib.light = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.red();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,177,107);


(lib.Path_40 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AihgiQCMgZCFgxIAyCJQiTA1iXAbg");
	this.shape.setTransform(16.3,11);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,32.6,21.9);


(lib.Path_35 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiAhyICJgyQAwCEBIB8IiABJQhLiHg2iQg");
	this.shape.setTransform(13,16.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25.9,33.2);


(lib.Path_33 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhViZICSAAQABCTAXCGIiOAaQgbiWgBidg");
	this.shape.setTransform(8.6,15.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,17.2,31);


(lib.Path_30 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiZA7IAaiQQCLAZCOAAIAACRQiaAAiZgag");
	this.shape.setTransform(15.5,8.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,31,17.2);


(lib.Path_29 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiQBZQBQiFBgh3IBxBgQhaBphHB9g");
	this.shape.setTransform(14.6,16.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29.2,32.8);


(lib.Path_26 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aicg9IBxhfQBZBrBvBdIhfBxQh1hlhlh1g");
	this.shape.setTransform(15.7,15.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,31.5,31.5);


(lib.Path_25 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AikAAIBJiAQB6BHCGAyIgyCIQiQg1iHhMg");
	this.shape.setTransform(16.6,13);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,33.2,25.9);


(lib.Path_24 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AijAgQB3hgCFhQIBKCAQh8BGhrBbg");
	this.shape.setTransform(16.4,14.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,32.8,29.2);


(lib.Path_23 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhsCJQAciYA0iSICJAyQgxCFgZCMg");
	this.shape.setTransform(11,16.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21.9,32.6);


(lib.Path_18 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiGAZIAAhIQCHABCGAXIgNBHQh+gWiCgBg");
	this.shape.setTransform(13.6,4.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,27.1,9.6);


(lib.Path_16 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiIAAQCDgtCBgXIANBGQiAAXh4Asg");
	this.shape.setTransform(13.8,7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,27.6,14);


(lib.Path_15 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiGgTIAZhFQB/AwB1BBIglBAQhwhCh4gqg");
	this.shape.setTransform(13.6,8.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,27.2,17.9);


(lib.Path_14 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhpBSQBShgBBhyIBAAlQhEByhWBqg");
	this.shape.setTransform(10.6,13);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21.3,26);


(lib.Path_13 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhEBwQAsh5AXh/IBGANQgYCFgtB/g");
	this.shape.setTransform(7,13.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,27.6);


(lib.Path_10 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah2g+IAvg4QBnBYBXBmIg4AvQhShjhjhSg");
	this.shape.setTransform(12,12);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,24,24);


(lib.Path_7 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhYhhIBAglQBAB0AxCAIhFAZQgrh4hBhwg");
	this.shape.setTransform(9,13.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,17.9,27.2);


(lib.Path_6 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZCHQABh+gXiCIBHgNQAXCGABCHg");
	this.shape.setTransform(4.8,13.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,9.6,27.1);


(lib.Path_5 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiAAqQBsg9BmhWIAvA5QhqBWhyBEg");
	this.shape.setTransform(13,10.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,26,21.3);


(lib.Path_2 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiIgBQCAgXB4gsIAZBEQh/AtiFAYg");
	this.shape.setTransform(13.8,7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,27.6,14);


(lib.Path_1 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiGAYIANhHQCCAXB+gBIAABJQiHgBiGgXg");
	this.shape.setTransform(13.6,4.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,27.1,9.6);


(lib.元件7 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.複製();

	this.instance_1 = new lib._01();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,380,378);


(lib.元件5 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.樹();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,629,652);


(lib.元件4 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.樹4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,206,268);


(lib.元件3 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.樹5();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,222,274);


(lib.元件2 = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.樹6();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1295,453);


(lib.元件2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_39 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(39).call(this.frame_39).wait(1));

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AD9BHIAAgcIgVAGIgbAGIgBACIgCABIgBgBIgBgCIgDgPIAGgBIAGAAIAAhZIgKAAIAAgNIBPAAIAAANIgLAAIAAB5gADfAlIAPgDIAPgDIAAgUIgeAAgADfAAIAeAAIAAgTIgeAAgADfgfIAeAAIAAgTIgeAAgABSBHIAAgoIg1AEIgCABIgCABIgBAAIAAgCIgEgOIAdAAIAdgCIgRgKIgSgJIAKgIIAGADIAFADIARgTIAKAGIACABIABABIgBABIgCACIgQAMIAHAEIAGAFIAdgdIALAHIABABIABACIgBABIgCABIgfAYIASAAIARgCIgEgEIgEgEIALgHIAPARIAKAOIgNAGIgDgFIgDgGIgUACIgXABIAAApgAhMBHIAAiDIA2AAIAABdQAAAFgDADQgCAEgFABIgIACIgIABIgFgOIAMgBQAAAAABAAQAAAAABAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBIAAhLIgZAAIAAB2gAENA6IAMgGIAJgGIAFgGIAFgGIgDgGIgDgGQgFgKgDgMQgDgNgCgSIgIAAIAAgNIA0AAIAEgDIACABIABABIAIAHIABACIABABIgCACIgDACQgFAXgFAOQgEAQgGAKIAAABIAAAAIAKANIANAMIgLAMIgLgMIgKgMQgFAIgIAGIgQALgAEqgEQADAKAFAJIABACIABADIABgDIAHgSIAGgeIgcAAQABAPADAMgAB9A6QgKgGgJgHIALgIQAIAHALAFIAZAKIgOAKQgMgFgKgGgAARA6QAOgDALgGQAMgFAJgHIAJAHIABABIABABIgBACIgDAAQgWAOgTAHgAicBBIAAgCIgEgQIAFgBIAGgBIAAhsIA/AAIAABGIgxAAIAAAkIAQgDIAQgFIgEgGIgEgGIAKgIQAGAHAFAKIALAVIgNAIIgDgHIgDgHIgXAHIgeAIIgCACIgCABIgBAAgAiHgEIAiAAIAAgSIgiAAgAiHgiIAiAAIAAgQIgiAAgAlVA/IAAgOIBPAAIAGgQIAFgOIAIgVIAFgXIAPAGIACABIABABIgBACIgDACIgKAdIgNAhIAyAAIAAAOgAkuAJIgJgZIANgDQAHAPAEAMQAEAPADANIgOADIgIgegACRAAIAAgXIhvAAIAAAXIgOAAIAAgiIA+AAIAAgLIg3AAIAAgMIA3AAIAAgNIAOABIACABIABABIgBABIgBADIAAAGIA2AAIAAAMIg2AAIAAALIA/AAIAAAigAlNgeIAAgNIA5AAIAAgbIAOABIADABIABABIAAABIgDADIAAAUIA5AAIAAANg");
	this.shape.setTransform(77.3,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(40));

	// 元件 1
	this.instance_1 = new lib.元件1();
	this.instance_1.setTransform(30.4,8.5,1,1,180,0,0,4.4,5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:27.7,alpha:1},11).wait(6).to({alpha:0},11).wait(12));

	// 元件 1
	this.instance_2 = new lib.元件1();
	this.instance_2.setTransform(17.4,8.5,1,1,180,0,0,4.4,5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({x:14.7,alpha:0.5},11).wait(6).to({alpha:0},11).wait(7));

	// 元件 1
	this.instance_3 = new lib.元件1();
	this.instance_3.setTransform(4.4,8.5,1,1,180,0,0,4.4,5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({_off:false},0).to({x:1.7,alpha:0.199},11).wait(6).to({alpha:0},11).wait(1));

	// 元件 1
	this.instance_4 = new lib.元件1();
	this.instance_4.setTransform(123.9,8.4,1,1,0,0,0,4.4,5);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:126.4,alpha:1},11).wait(6).to({alpha:0},11).wait(12));

	// 元件 1
	this.instance_5 = new lib.元件1();
	this.instance_5.setTransform(136.9,8.4,1,1,0,0,0,4.4,5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).to({x:139.4,alpha:0.5},11).wait(6).to({alpha:0},11).wait(7));

	// 元件 1
	this.instance_6 = new lib.元件1();
	this.instance_6.setTransform(149.9,8.4,1,1,0,0,0,4.4,5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(11).to({_off:false},0).to({x:152.4,alpha:0.199},11).wait(6).to({alpha:0},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26,2.3,102.3,14.3);


(lib.元件1複製 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_69 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(69).call(this.frame_69).wait(1));

	// 圖層 3 複製
	this.instance = new lib.light();
	this.instance.setTransform(44.4,44.5,0.317,1,180,0,0,1.6,53.5);
	this.instance.alpha = 0;
	this.instance.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).to({regX:1.5,scaleX:1.01,scaleY:1.3,x:68.4,y:42.5,alpha:1},9).to({regX:1.9,scaleX:0.3,scaleY:1.24,x:43.6,y:44.5,alpha:0.461},10).to({regX:1.8,scaleX:0.19,y:45.5,alpha:0.051},6).wait(1).to({regX:1.6,scaleX:0.32,scaleY:1,x:44.4,y:44.5,alpha:0},0).to({regX:1.5,scaleX:1.01,scaleY:1.3,x:68.4,y:42.5,alpha:1},9).to({regX:1.9,scaleX:0.3,scaleY:1.24,x:43.6,y:44.5,alpha:0.461},10).to({regX:1.8,scaleX:0.19,y:45.5,alpha:1},6).to({alpha:0},5).wait(1));

	// 圖層 3
	this.instance_1 = new lib.light();
	this.instance_1.setTransform(43.4,52.5,0.249,1,0,0,0,1.6,53.5);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:1.7,scaleX:0.48,scaleY:1.09,alpha:0.859},4).to({regX:1.5,scaleX:0.85,scaleY:1.3,alpha:1},9).to({regX:1.9,scaleX:0.3,scaleY:1.24,x:43.6,alpha:0.461},10).to({regX:1.8,scaleX:0.19,alpha:0},6).to({regX:1.7,scaleX:0.27,scaleY:1,x:43.4,alpha:0.789},5).to({regX:1.5,scaleX:0.85,scaleY:1.3,alpha:1},9).to({regX:1.8,scaleX:0.41,scaleY:1.24,x:43.6,alpha:0.461},10).to({scaleX:0.19,alpha:0},6).to({regX:1.6,scaleX:0.25,scaleY:1,x:43.4,alpha:1},10).wait(1));

	// 圖層 1
	this.instance_2 = new lib.元件2複製();
	this.instance_2.setTransform(42,52,1,1,0,0,0,49.5,54);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-21,123.5,155);


(lib.元件6 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAATQgcgBgPACQAVgJAUgLQAXgOALgJIALAvQgYgDgTgCg");
	this.shape.setTransform(141.2,5.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLAAQAPgSAIgPIAdAoIgpAKQgbAKgNAHQANgMAQgWg");
	this.shape_1.setTransform(286.3,326.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AFuZLQAwgkAugmIAHAIQg2AsgqAegAIlWxQAsgpAogtIAHAHQgmAqguAtgALHUAQAmguAhgxIAJAFQgiAwgmAxgANPQ8QAgg2AagyIAJAEQgbA0gfA1gAO8NoQAWg1AVg7IAJADQgTA5gYA3gAQLKGQARg8ALg4IAKABQgPBHgOAvgAQ7GcQAIg8AEg8IAKABQgDA8gJA8gARLCtIAAgDQAAg+gDg3IAKAAQADA2AAA/IAAADgAQoi2IAKgCQAMA7AHA8IgKABQgHg8gMg6gAPpmcIAJgDQAVA6APA4IgKADQgPg5gUg5gAOMp4IAJgFQAbA3AXA2IgJAEQgWg0gcg4gAMRtFIAIgGQAjAwAeA1IgIAFQgegzgjgxgAJ9wAIAIgIQArAzAiApIgIAHQglgugogtgAHRynIAGgHQAtAmAsArIgHAGQgrgqgtgmgAEP00IAGgIQArAbA5AoIgHAIQgvgig0ghgAA+2mIADgKQA3AaA1AdIgEAIQg5gegygXgAig37IACgKQA7ASA4AVIgEAKQg5gXg4gQgAxU4eQA8gPA6gKIACAKQhAALg1AOgAmJ4xIABgKQBAALA2AMIgCAKQg2gMg/gLgAtn5IQA7gGA8gDIABAKQg9ADg6AGgAp35IIAAgKQBIADAwAFIgBAKQgwgFhHgDg");
	this.shape_2.setTransform(254.2,161.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiGATQB4gqBwhBIAlBAQh1BBh/Awg");
	this.shape_3.setTransform(253.5,324);

	this.instance = new lib.Path_1();
	this.instance.setTransform(171.7,338.2,1,1,0,0,0,13.6,4.8);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Path_2();
	this.instance_1.setTransform(227.5,333.5,1,1,0,0,0,13.8,7);
	this.instance_1.alpha = 0.5;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiGgYQB+AACCgXIANBHQiGAXiHAAg");
	this.shape_4.setTransform(200.1,338.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah2A/QBjhSBShjIA4AvQhYBmhmBYg");
	this.shape_5.setTransform(298.8,292.3);

	this.instance_2 = new lib.Path_5();
	this.instance_2.setTransform(277.6,310.1,1,1,0,0,0,13,10.6);
	this.instance_2.alpha = 0.5;

	this.instance_3 = new lib.Path_6();
	this.instance_3.setTransform(344.8,165.1,1,1,0,0,0,4.8,13.6);
	this.instance_3.alpha = 0.5;

	this.instance_4 = new lib.Path_7();
	this.instance_4.setTransform(330.6,111.6,1,1,0,0,0,9,13.6);
	this.instance_4.alpha = 0.5;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhYBjQBChyAph3IBGAZQgxCBhABzg");
	this.shape_6.setTransform(330.6,247);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhphRIA5gvQBWBqBEByIhAAlQhAhvhThjg");
	this.shape_7.setTransform(316.7,87.5);

	this.instance_5 = new lib.Path_10();
	this.instance_5.setTransform(298.9,66.3,1,1,0,0,0,12,12);
	this.instance_5.alpha = 0.5;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgvB6QAXiCAAh+IBIAAQgBCIgXCFg");
	this.shape_8.setTransform(344.8,193.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhEhvIBEgZQAtB/AYCFIhGANQgXiAgsh4g");
	this.shape_9.setTransform(340,137.7);

	this.instance_6 = new lib.Path_13();
	this.instance_6.setTransform(340,220.9,1,1,0,0,0,7,13.8);
	this.instance_6.alpha = 0.5;

	this.instance_7 = new lib.Path_14();
	this.instance_7.setTransform(316.7,271.1,1,1,0,0,0,10.6,13);
	this.instance_7.alpha = 0.5;

	this.instance_8 = new lib.Path_15();
	this.instance_8.setTransform(253.6,34.6,1,1,0,0,0,13.6,8.9);
	this.instance_8.alpha = 0.5;

	this.instance_9 = new lib.Path_16();
	this.instance_9.setTransform(144.3,25.2,1,1,0,0,0,13.8,7);
	this.instance_9.alpha = 0.5;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiGgXQCGgXCHAAIAABHQiCACh+AUg");
	this.shape_10.setTransform(171.6,20.4);

	this.instance_10 = new lib.Path_18();
	this.instance_10.setTransform(200.1,20.4,1,1,0,0,0,13.6,4.8);
	this.instance_10.alpha = 0.5;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiAgpIAlhAQBzBFBpBWIgvA4QhjhThvhAg");
	this.shape_11.setTransform(277.6,48.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AiIACIANhGQCBAXCDAtIgZBFQh4gsiAgXg");
	this.shape_12.setTransform(227.4,25.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AiGAZQB1hBB/gwIAZBFQh4AqhwBCg");
	this.shape_13.setTransform(118.1,34.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AiABzQA3iSBKiFICABJQhHB6gxCGg");
	this.shape_14.setTransform(24.4,103.5);

	this.instance_11 = new lib.Path_23();
	this.instance_11.setTransform(13.9,132.7,1,1,0,0,0,11,16.3);
	this.instance_11.alpha = 0.5;

	this.instance_12 = new lib.Path_24();
	this.instance_12.setTransform(83.3,33.3,1,1,0,0,0,16.4,14.6);
	this.instance_12.alpha = 0.5;

	this.instance_13 = new lib.Path_25();
	this.instance_13.setTransform(110.1,340.8,1,1,0,0,0,16.6,13);
	this.instance_13.alpha = 0.5;

	this.instance_14 = new lib.Path_26();
	this.instance_14.setTransform(59.6,305.5,1,1,0,0,0,15.7,15.7);
	this.instance_14.alpha = 0.5;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AikABQCGhLCRg2IAyCJQiGAxh6BHg");
	this.shape_15.setTransform(110.1,17.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AicA+QBlh1B1hlIBfBxQhtBbhbBtg");
	this.shape_16.setTransform(59.6,53.1);

	this.instance_15 = new lib.Path_29();
	this.instance_15.setTransform(39.8,76.8,1,1,0,0,0,14.6,16.4);
	this.instance_15.alpha = 0.5;

	this.instance_16 = new lib.Path_30();
	this.instance_16.setTransform(169.7,356.5,1,1,0,0,0,15.5,8.6);
	this.instance_16.alpha = 0.5;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AijggIBfhwQBsBbB8BGIhKCAQiHhPh2hig");
	this.shape_17.setTransform(83.3,325.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AihAdIAyiJQCFAxCMAZIgZCPQiXgbiTg1g");
	this.shape_18.setTransform(139.2,351.3);

	this.instance_17 = new lib.Path_33();
	this.instance_17.setTransform(8.6,195.5,1,1,0,0,0,8.6,15.5);
	this.instance_17.alpha = 0.5;

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AiZg8QCOAACLgYIAaCPQiZAaiaABg");
	this.shape_19.setTransform(202,356.5);

	this.instance_18 = new lib.Path_35();
	this.instance_18.setTransform(24.4,255.1,1,1,0,0,0,13,16.6);
	this.instance_18.alpha = 0.5;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhsiHICPgaQAZCLAxCGIiIAyQg2iSgbiXg");
	this.shape_20.setTransform(13.9,225.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AikgIQCGgxB6hHIBJCAQiHBLiQA2g");
	this.shape_21.setTransform(261.6,340.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AiQhZICAhJQBHB8BaBrIhxBeQhhh2hPiGg");
	this.shape_22.setTransform(39.8,281.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhVCaQABicAbiXICOAZQgXCHgBCTg");
	this.shape_23.setTransform(8.6,163.2);

	this.instance_19 = new lib.Path_40();
	this.instance_19.setTransform(232.5,351.3,1,1,0,0,0,16.3,11);
	this.instance_19.alpha = 0.5;

	this.addChild(this.instance_19,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.instance_18,this.shape_19,this.instance_17,this.shape_18,this.shape_17,this.instance_16,this.instance_15,this.shape_16,this.shape_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.instance_10,this.shape_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.shape_9,this.shape_8,this.instance_5,this.shape_7,this.shape_6,this.instance_4,this.instance_3,this.instance_2,this.shape_5,this.shape_4,this.instance_1,this.instance,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,365.1,365.1);


(lib.元件1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(99).call(this.frame_99).wait(1));

	// 圖層 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_1 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_2 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_3 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_4 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_5 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_6 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_7 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_8 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_9 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_10 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_11 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_12 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_13 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_14 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_15 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_16 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_17 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_18 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_19 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_20 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_21 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_22 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_23 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_24 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_25 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_26 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_27 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_28 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_29 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_30 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_31 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_32 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_33 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_34 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_35 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_36 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_37 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_38 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_39 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_40 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_41 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_42 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_43 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_44 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_45 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_46 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_47 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_48 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_49 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_50 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_51 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_52 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_53 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_54 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_55 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_56 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_57 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_58 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_59 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_60 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_61 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_62 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_63 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_64 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_65 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_66 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_67 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_68 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_69 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_70 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_71 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_72 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_73 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_74 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_75 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_76 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_77 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_78 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_79 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_80 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_81 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_82 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_83 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_84 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_85 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_86 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_87 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_88 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_89 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_90 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_91 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_92 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_93 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_94 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_95 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_96 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_97 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_98 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");
	var mask_graphics_99 = new cjs.Graphics().p("A0+U4QotoqAAsOIAAAAQAAsNItoqIAAAAQItopMRAAIAAAAQMSAAItIpIAAAAQIsIqABMNIAAAAQgBMOosIqIAAAAQotIpsSAAIAAAAQsRAAotopg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:190,y:189}).wait(1).to({graphics:mask_graphics_1,x:190,y:189}).wait(1).to({graphics:mask_graphics_2,x:190,y:189}).wait(1).to({graphics:mask_graphics_3,x:190,y:189}).wait(1).to({graphics:mask_graphics_4,x:190,y:189}).wait(1).to({graphics:mask_graphics_5,x:190,y:189}).wait(1).to({graphics:mask_graphics_6,x:190,y:189}).wait(1).to({graphics:mask_graphics_7,x:190,y:189}).wait(1).to({graphics:mask_graphics_8,x:190,y:189}).wait(1).to({graphics:mask_graphics_9,x:190,y:189}).wait(1).to({graphics:mask_graphics_10,x:190,y:189}).wait(1).to({graphics:mask_graphics_11,x:190,y:189}).wait(1).to({graphics:mask_graphics_12,x:190,y:189}).wait(1).to({graphics:mask_graphics_13,x:190,y:189}).wait(1).to({graphics:mask_graphics_14,x:190,y:189}).wait(1).to({graphics:mask_graphics_15,x:190,y:189}).wait(1).to({graphics:mask_graphics_16,x:190,y:189}).wait(1).to({graphics:mask_graphics_17,x:190,y:189}).wait(1).to({graphics:mask_graphics_18,x:190,y:189}).wait(1).to({graphics:mask_graphics_19,x:190,y:189}).wait(1).to({graphics:mask_graphics_20,x:190,y:189}).wait(1).to({graphics:mask_graphics_21,x:190,y:189}).wait(1).to({graphics:mask_graphics_22,x:190,y:189}).wait(1).to({graphics:mask_graphics_23,x:190,y:189}).wait(1).to({graphics:mask_graphics_24,x:190,y:189}).wait(1).to({graphics:mask_graphics_25,x:190,y:189}).wait(1).to({graphics:mask_graphics_26,x:190,y:189}).wait(1).to({graphics:mask_graphics_27,x:190,y:189}).wait(1).to({graphics:mask_graphics_28,x:190,y:189}).wait(1).to({graphics:mask_graphics_29,x:190,y:189}).wait(1).to({graphics:mask_graphics_30,x:190,y:189}).wait(1).to({graphics:mask_graphics_31,x:190,y:189}).wait(1).to({graphics:mask_graphics_32,x:190,y:189}).wait(1).to({graphics:mask_graphics_33,x:190,y:189}).wait(1).to({graphics:mask_graphics_34,x:190,y:189}).wait(1).to({graphics:mask_graphics_35,x:190,y:189}).wait(1).to({graphics:mask_graphics_36,x:190,y:189}).wait(1).to({graphics:mask_graphics_37,x:190,y:189}).wait(1).to({graphics:mask_graphics_38,x:190,y:189}).wait(1).to({graphics:mask_graphics_39,x:190,y:189}).wait(1).to({graphics:mask_graphics_40,x:190,y:189}).wait(1).to({graphics:mask_graphics_41,x:190,y:189}).wait(1).to({graphics:mask_graphics_42,x:190,y:189}).wait(1).to({graphics:mask_graphics_43,x:190,y:189}).wait(1).to({graphics:mask_graphics_44,x:190,y:189}).wait(1).to({graphics:mask_graphics_45,x:190,y:189}).wait(1).to({graphics:mask_graphics_46,x:190,y:189}).wait(1).to({graphics:mask_graphics_47,x:190,y:189}).wait(1).to({graphics:mask_graphics_48,x:190,y:189}).wait(1).to({graphics:mask_graphics_49,x:190,y:189}).wait(1).to({graphics:mask_graphics_50,x:190,y:189}).wait(1).to({graphics:mask_graphics_51,x:190,y:189}).wait(1).to({graphics:mask_graphics_52,x:190,y:189}).wait(1).to({graphics:mask_graphics_53,x:190,y:189}).wait(1).to({graphics:mask_graphics_54,x:190,y:189}).wait(1).to({graphics:mask_graphics_55,x:190,y:189}).wait(1).to({graphics:mask_graphics_56,x:190,y:189}).wait(1).to({graphics:mask_graphics_57,x:190,y:189}).wait(1).to({graphics:mask_graphics_58,x:190,y:189}).wait(1).to({graphics:mask_graphics_59,x:190,y:189}).wait(1).to({graphics:mask_graphics_60,x:190,y:189}).wait(1).to({graphics:mask_graphics_61,x:190,y:189}).wait(1).to({graphics:mask_graphics_62,x:190,y:189}).wait(1).to({graphics:mask_graphics_63,x:190,y:189}).wait(1).to({graphics:mask_graphics_64,x:190,y:189}).wait(1).to({graphics:mask_graphics_65,x:190,y:189}).wait(1).to({graphics:mask_graphics_66,x:190,y:189}).wait(1).to({graphics:mask_graphics_67,x:190,y:189}).wait(1).to({graphics:mask_graphics_68,x:190,y:189}).wait(1).to({graphics:mask_graphics_69,x:190,y:189}).wait(1).to({graphics:mask_graphics_70,x:190,y:189}).wait(1).to({graphics:mask_graphics_71,x:190,y:189}).wait(1).to({graphics:mask_graphics_72,x:190,y:189}).wait(1).to({graphics:mask_graphics_73,x:190,y:189}).wait(1).to({graphics:mask_graphics_74,x:190,y:189}).wait(1).to({graphics:mask_graphics_75,x:190,y:189}).wait(1).to({graphics:mask_graphics_76,x:190,y:189}).wait(1).to({graphics:mask_graphics_77,x:190,y:189}).wait(1).to({graphics:mask_graphics_78,x:190,y:189}).wait(1).to({graphics:mask_graphics_79,x:190,y:189}).wait(1).to({graphics:mask_graphics_80,x:190,y:189}).wait(1).to({graphics:mask_graphics_81,x:190,y:189}).wait(1).to({graphics:mask_graphics_82,x:190,y:189}).wait(1).to({graphics:mask_graphics_83,x:190,y:189}).wait(1).to({graphics:mask_graphics_84,x:190,y:189}).wait(1).to({graphics:mask_graphics_85,x:190,y:189}).wait(1).to({graphics:mask_graphics_86,x:190,y:189}).wait(1).to({graphics:mask_graphics_87,x:190,y:189}).wait(1).to({graphics:mask_graphics_88,x:190,y:189}).wait(1).to({graphics:mask_graphics_89,x:190,y:189}).wait(1).to({graphics:mask_graphics_90,x:190,y:189}).wait(1).to({graphics:mask_graphics_91,x:190,y:189}).wait(1).to({graphics:mask_graphics_92,x:190,y:189}).wait(1).to({graphics:mask_graphics_93,x:190,y:189}).wait(1).to({graphics:mask_graphics_94,x:190,y:189}).wait(1).to({graphics:mask_graphics_95,x:190,y:189}).wait(1).to({graphics:mask_graphics_96,x:190,y:189}).wait(1).to({graphics:mask_graphics_97,x:190,y:189}).wait(1).to({graphics:mask_graphics_98,x:190,y:189}).wait(1).to({graphics:mask_graphics_99,x:190,y:189}).wait(1));

	// flash0.ai
	this.instance = new lib.元件6();
	this.instance.setTransform(190.5,193.5,0.134,0.134,177.3,0,0,182.6,182.9);
	this.instance.alpha = 0.211;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:182.5,regY:182.5,scaleX:0.85,scaleY:0.85,rotation:29.3,x:190.6,y:193.6,alpha:0.801},99,cjs.Ease.get(1)).wait(1));

	// 圖層 2
	this.instance_1 = new lib.元件4();
	this.instance_1.setTransform(189.9,283.1,0.401,0.401,0,0,0,103.1,271);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:271.1,rotation:80.2,x:199.6,y:284.3},49,cjs.Ease.get(1)).to({rotation:161.9,x:245.9,y:273.5},50,cjs.Ease.get(1)).wait(1));

	// 圖層 6
	this.instance_2 = new lib.元件3();
	this.instance_2.setTransform(190,349.9,0.401,0.401,0,0,0,113.5,276.6);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:113.4,regY:276.7,rotation:37.2,y:356.9},99,cjs.Ease.get(1)).wait(1));

	// 圖層 4
	this.instance_3 = new lib.元件5();
	this.instance_3.setTransform(194.1,366.9,0.401,0.401,0,0,0,317,650);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:317.1,regY:650.1,rotation:17.3,x:187.1,y:385.9},58,cjs.Ease.get(1)).to({regX:317.6,regY:650,rotation:35.3,x:180.1,y:380.9},41,cjs.Ease.get(0.97)).wait(1));

	// 圖層 5
	this.instance_4 = new lib.元件2();
	this.instance_4.setTransform(214.9,314.2,0.401,0.401,0,0,0,647.5,226.5);

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:330.2},99,cjs.Ease.get(1)).wait(1));

	// 圖層 1
	this.instance_5 = new lib.元件7();
	this.instance_5.setTransform(190,189,1,1,0,0,0,190,189);
	this.instance_5.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:1},99,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,380,378);


// stage content:



(lib.treeAni = function() {
	this.initialize();

	// // 圖層 3
	// this.instance = new lib.元件1複製();
	// this.instance.setTransform(-124.5,75.5,1,1,0,0,0,49.5,54);

	// // 圖層 2
	// this.instance_1 = new lib.元件2_1();
	// this.instance_1.setTransform(-125.5,7.7,1,1,0,0,0,77.2,10);

	// 圖層 1
	this.instance_2 = new lib.元件1_1();
	this.instance_2.setTransform(190,189,1,1,0,0,0,190,189);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(8.4,188.5,656.2,405.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
/*
Authored by GiPyeongLee
email : ocsoon.jin@gmail.com
Since 2017-05-01
*/
"use strict";


function UIContainer() {
  // Call the parent constructor
  createjs.Container.call(this);
}
UIContainer.prototype = Object.create(createjs.Container.prototype);
UIContainer.prototype.constructor = UIContainer;

UIContainer.prototype.setHide = function(_isHide){
	if(typeof _isHide === "undefined"){
		this.visible = true;
	}else{
		this.visible = !_isHide;
	}
}

function UIView(_x,_y,_width,_height) {
  // Call the parent constructor
	UIContainer.call(this);
	var _x = typeof _x !== 'undefined' ?  _x : 0;
	var _y = typeof _y !== 'undefined' ?  _y : 0;
	var _width = typeof _width !== 'undefined' ?  _width : 100;
	var _height = typeof _height !== 'undefined' ?  _height : 100;

	this.frame = {x:_x,y:_y,width:_width,height:_height};
	this.color = "black";
	
	this.background = new createjs.Shape();
	this.background.name = "background";
	
	this.background.graphics.beginFill(this.color).drawRect(0, 0, _width, _height);
	
	this.addChild(this.background);
	this.x = _x;
	this.y = _y;
}
UIView.prototype = Object.create(UIContainer.prototype);
UIView.prototype.constructor = UIView;
UIView.prototype.setBackgroundImage = function(path,callback){
	var obj = this;
	obj.background.graphics.clear();
	if(typeof path === "object"){
		obj.background.graphics.beginBitmapFill(path, 'no-repeat').drawRect(0, 0, obj.frame.width, obj.frame.height);
		if(obj.stage !== undefined && obj.stage !== null){
			obj.stage.update();
		}
		if(typeof callback !== "undefined"){
			callback();
		}
	}else{
		var bitmap = new createjs.Bitmap(path);
		bitmap.image.onload = function() {
			
			obj.background.graphics.beginBitmapFill(this, 'no-repeat').drawRect(0, 0, obj.frame.width, obj.frame.height);
			if(obj.stage !== undefined && obj.stage !== null){
				obj.stage.update();
			}
			if(typeof callback !== "undefined"){
				callback();
			}
			
		}
	}
}

UIView.prototype.setAlpha = function(_alpha){
	var obj = this;
	obj.background.alpha = _alpha;
	if(obj.stage !== undefined && obj.stage !== null){
		obj.stage.update();	
	}
}
UIView.prototype.setFrame = function(_x,_y,_width,_height){
	this.background.graphics.clear();
	if(this.color !== "undefined"){
		this.background.graphics.beginFill(this.color).drawRect(0, 0, this.frame.width, this.frame.height);	
	}
	this.x = _x;
	this.y = _y;
}
UIView.prototype.setBackgroundColor = function(_color){
	var obj = this;
	obj.background.graphics.clear();
	this.color = _color;
	if(_color == undefined || typeof _color === "undefined"){
		
	}
	else{
		obj.background.graphics.beginFill(_color).drawRect(0, 0, this.frame.width, this.frame.height);
	}
	if(obj.stage !== undefined && obj.stage !== null){
		obj.stage.update();	
	}
}
function UIImageView(_x,_y,_width,_height) {
  // Call the parent constructor
	UIContainer.call(this);

	var _x = typeof _x !== 'undefined' ?  _x : 0;
	var _y = typeof _y !== 'undefined' ?  _y : 0;
	var _width = typeof _width !== 'undefined' ?  _width : 100;
	var _height = typeof _height !== 'undefined' ?  _height : 100;
	
	this.frame = {x:_x,y:_y,width:_width,height:_height};
	this.color = undefined;
	
	this.background = new createjs.Shape();
	this.background.name = "background";
	this.background.graphics.beginFill("white").drawRect(0, 0, _width, _height);
	
	
	this.addChild(this.background);
	this.x = _x;
	this.y = _y;

}
UIImageView.prototype = Object.create(createjs.Container.prototype);
UIImageView.prototype.constructor = UIImageView;

UIImageView.prototype.setFrame = function(_x,_y,_width,_height){
	var obj = this;
	this.setBounds (_x,_y,_width,_height);
	if(this.color !== undefined){
		this.background.graphics.clear();	
	}
	this.frame.x = _x;
	this.frame.y = _y;
	this.frame.width = _width;
	this.frame.height = _height;
	if(typeof this.color !== "undefined" || this.color !== undefined){
		this.background.graphics.beginFill(this.color).drawRect(0, 0, this.frame.width, this.frame.height);	
	}
	this.background.setBounds(0,0,_width,_height);
	
	this.x = _x;
	this.y = _y;
	
	if(obj.stage !== undefined && obj.stage !== null){
		obj.stage.update();	
	}
}

UIImageView.prototype.setBackgroundColor = function(_color){
	var obj = this;
	this.color = _color;
	if(_color == undefined || typeof _color === "undefined"){
		obj.background.graphics.clear();
	}
	else{
		obj.background.graphics.beginFill(this.color).drawRect(0, 0, this.frame.width, this.frame.height);
	}
	if(obj.stage !== undefined && obj.stage !== null){
		obj.stage.update();	
	}
}
UIImageView.prototype.setShadow = function(_x,_y,_blur,_color){
	var obj = this;
	var x = _x, y = _y , blurValue = _blur,color = _color;
	if (typeof x === "undefined"){
		x = 1;
	}
	if (typeof y === "undefined"){
		y = 1;
	}
	if (typeof blurValue === "undefined"){
		blurValue = 1;
	}
	if (typeof color === "undefined"){
		color = "#000000";
	}
	obj.background.shadow = new createjs.Shadow(color, x,y,blurValue);
	if(obj.stage !== undefined && obj.stage !== null){
		obj.stage.update();	
	}
}
UIImageView.prototype.setScale = function(_x,_y){
	var obj = this;
	obj.scaleX = _x;
	obj.scaleY = _y;
	if(obj.stage !== undefined && obj.stage !== null){
		obj.stage.update();
	}
}
UIImageView.prototype.setBackgroundImage = function(path,callback){
	var obj = this;
	obj.background.graphics.clear();
	obj.color = undefined;
	if(typeof path === "object"){
		obj.background.graphics.beginBitmapFill(path, 'no-repeat').drawRect(0, 0, obj.frame.width, obj.frame.height);
		if(obj.stage !== undefined && obj.stage !== null){
			obj.stage.update();
		}
		if(typeof callback !== "undefined"){
			callback();
		}
	}else{
		var bitmap = new createjs.Bitmap(path);
		bitmap.image.onload = function() {
			
			obj.background.graphics.beginBitmapFill(this, 'no-repeat').drawRect(0, 0, obj.frame.width, obj.frame.height);
			if(obj.stage !== undefined && obj.stage !== null){
				obj.stage.update();
			}
			if(typeof callback !== "undefined"){
				callback();
			}
			
		}
	}
}
/* UIButton */

function UIButton(_x,_y,_width,_height) {
  // Call the parent constructor
	UIContainer.call(this);
	
	var _x = typeof _x !== 'undefined' ?  _x : 0;
	var _y = typeof _y !== 'undefined' ?  _y : 0;
	var _width = typeof _width !== 'undefined' ?  _width : 100;
	var _height = typeof _height !== 'undefined' ?  _height : 100;
	
	this.frame = {x:_x,y:_y,width:_width,height:_height};
	this.color = "white";
	
	
	this.background = new createjs.Shape();
	this.background.name = "background";
	//this.background.graphics.beginFill(this.color).drawRect(0, 0, _width, _height);
	
	this.fontProperty = {type:"bold",size:"12px",font:"Arial"};
	
	this.textLabel = new createjs.Text("", "bold 12px Arial", "#000000");
	this.textLabel.name = "textLabel";
	this.textLabel.textAlign = "center";
	this.textLabel.textBaseline = "middle";
	this.autoAlignTextLabel();
	this.addChild(this.background,this.textLabel);
	this.x = _x;
	this.y = _y;
	
	this.events = {'normal':undefined,'click':undefined,'pressmove':undefined};
		
		// 컨테이너안에 Text 추가
		// 컨테이너안에 일반 백그라운드 Circle 기본
		// 컨테이너안에 
}

UIButton.prototype = Object.create(createjs.Container.prototype);
UIButton.prototype.constructor = UIButton;	

UIButton.prototype.setFrame = function(_x,_y,_width,_height){
	if(typeof _x === "undefined")
		throw "please input _x";
	
	if(typeof _y === "undefined")
		throw "please input _y";
	
	if(typeof _width === "undefined")
		throw "please input _width";
	
	if(typeof _height === "undefined")
		throw "please input _height";
	
	this.background.graphics.clear();
	this.background.graphics.beginFill(this.color).drawRect(0,0, _width, _height);
	
	this.x = _x;
	this.y = _y;
	
	
}

UIButton.prototype.autoAlignTextLabel = function(){
	var obj = this;
	var b = obj.textLabel.getBounds();
	if(b == null )
		return;
	
	obj.textLabel.x = (obj.frame.width - b.width)/2-b.x;
	obj.textLabel.y = (obj.frame.height - b.height)/2-b.y;
}
UIButton.prototype.setScale = function(_x,_y){
	var obj = this;
	obj.scaleX = _x;
	obj.scaleY = _y;
	if(obj.stage !== undefined && obj.stage !== null){
		obj.stage.update();
	}
}
UIButton.prototype.setBackgroundColor = function(_color){
	var obj = this;
	if(_color == undefined || typeof _color === "undefined"){
		obj.background.graphics.clear();
	}
	else{
		obj.background.graphics.beginFill(_color).drawRect(0, 0, this.frame.width, this.frame.height);
	}
	if(obj.stage !== undefined && obj.stage !== null){
		obj.stage.update();	
	}
}
UIButton.prototype.setBackgroundImage = function(path,callback){
	var obj = this;
	obj.background.graphics.clear();
	if(path === undefined || typeof path === "undefined"){
		
	}
	else if(typeof path === "object"){
		obj.background.graphics.beginBitmapFill(path, 'no-repeat').drawRect(0, 0, obj.frame.width, obj.frame.height);
		obj.autoAlignTextLabel();
		if(obj.stage !== undefined && obj.stage !== null){
			obj.stage.update();
			
		}
		if(typeof callback !== "undefined"){
			callback();
		}
	}else{
		var bitmap = new createjs.Bitmap(path);
		bitmap.image.onload = function() {
			
			obj.background.graphics.beginBitmapFill(this, 'no-repeat').drawRect(0, 0, obj.frame.width, obj.frame.height);
			obj.autoAlignTextLabel();
			if(obj.stage !== undefined && obj.stage !== null){
				obj.stage.update();
			}
			if(typeof callback !== "undefined"){
				callback();
			}
			
		}
	}
}
UIButton.prototype.addTarget = function(state,handler){
	if(typeof handler === 'undefined'){
		throw "Please Added Handler Function";
	}
	if(typeof state === 'undefined' || (state !== 'click' && state !== 'pressmove' )){
		
		throw "please give me a state (click | pressmove )";
	}
	var obj = this;
	var originY = obj.y;
	var originX = obj.x;
	if(!this.hasEventListener(state)){
		this.addEventListener(state, function(event) {
			obj.y += 2;
			obj.x -= 2;
			handler(event);
			setTimeout(function(){
				obj.y = originY;
				obj.x = originX;
			},200);
			event.preventDefault();
		});		
	}else{

	}
}
UIButton.prototype.setText = function(_text){
	this.textLabel.text = _text;
	this.autoAlignTextLabel();
}

UIButton.prototype.setFont = function(_font){
	var obj = this;

	if( typeof _font.size !== 'undefined'){
		
		obj.fontProperty.size = _font.size;
	}
	if( typeof _font.type !==  'undefined'){
		
		obj.fontProperty.type = _font.type;
	}
	if( typeof _font.font !==  'undefined'){
		
		obj.fontProperty.font = _font.font;
	}
	
	this.fontize();
}
UIButton.prototype.setColor = function(_color){
	this.textLabel.color = _color;
}
UIButton.prototype.fontize = function(){
	var obj = this;
	var size = this.fontProperty.size.toString();
	if(size.indexOf("px") === -1){
		size += "px";
	}
	var font = this.fontProperty.type +" "+ size + " " + this.fontProperty.font;
	
	this.textLabel.font = font;
	if(obj.stage !== undefined && obj.stage !== null){
		obj.stage.update();	
	}
	
}


/* UILabel */
function UILabel(_x,_y,_width,_height) {
  // Call the parent constructor
	UIContainer.call(this);
	
	var _x = typeof _x !== 'undefined' ?  _x : 0;
	var _y = typeof _y !== 'undefined' ?  _y : 0;
	var _width = typeof _width !== 'undefined' ?  _width : 100;
	var _height = typeof _height !== 'undefined' ?  _height : 100;
	
	this.frame = {x:_x,y:_y,width:_width,height:_height};
	this.fontProperty = {type:"bold",size:"12px",font:"Arial"};
	this.background = new createjs.Shape();
	this.background.name = "background";
	this.background.graphics.beginFill("white").drawRect(0, 0, _width, _height);
	
	this.outlineLabel = new createjs.Text("", "bold 12px Arial", "#000000");
	
	this.outlineLabel.name = "outlineLabel";
	this.outlineLabel.textAlign = "center";
	this.outlineLabel.textBaseline = "middle";
	this.outlineLabel.color = "black";
	this.outlineLabel.visible = false;
	this.outlineLabel.text = "";
	
	
	this.textLabel = new createjs.Text("", "bold 12px Arial", "#000000");
	this.textLabel.name = "textLabel";
	this.textLabel.textAlign = "center";
	this.textLabel.textBaseline = "middle";
	this.textLabel.alpha = 1;
	this.textLabel.text = "";
	
	this.outlineWidth = 0;
	
	this.autoAlignTextLabel();
	this.addChild(this.background,this.outlineLabel,this.textLabel);
	this.x = _x;
	this.y = _y;
		
		// 컨테이너안에 Text 추가
		// 컨테이너안에 일반 백그라운드 Circle 기본
		// 컨테이너안에 
}
UILabel.prototype = Object.create(createjs.Container.prototype);
UILabel.prototype.constructor = UILabel;

UILabel.prototype.setFrame = function(_x,_y,_width,_height){
	var obj = this;
	this.setBounds (_x,_y,_width,_height);
	this.frame.x = _x;
	this.frame.y = _y;
	this.frame.width = _width;
	this.frame.height = _height;
	
	this.x = _x;
	this.y = _y;
	
	if(obj.stage !== undefined && obj.stage !== null){
		obj.stage.update();	
	}
}

UILabel.prototype.setTextAlign = function(_align){
	var obj = this;
	this.textLabel.textAlign = _align;
	if(typeof obj.outlineLabel !== "undefined"){
		this.outlineLabel.textAlign = _align;
	}
	if(obj.stage !== undefined && obj.stage !== null){
		obj.stage.update();	
	}
}
UILabel.prototype.setText = function(_text){
	var obj = this;
	this.textLabel.text = _text;
	if(typeof obj.outlineLabel !== "undefined" || obj.outlineLabel !== undefined){
		this.outlineLabel.text = _text;
	}
	obj.autoAlignTextLabel();
	if(obj.stage !== undefined && obj.stage !== null){
		obj.stage.update();	
	}
}
UILabel.prototype.setOutlineColor = function(_color){
	var obj = this;
	if(typeof this.outlineLabel === false){
		this.outlineLabel.visible = true;
	}
	if(typeof _color === "undefined" || _color === undefined){
		this.outlineLabel.visible = false;
		return;
	}
	this.outlineLabel.color = _color;
	
	if(obj.stage !== undefined && obj.stage !== null){
		obj.stage.update();	
	}
}
UILabel.prototype.setOutline = function(_width){
	var obj = this;
	if(this.outlineLabel.visible === false){
		this.outlineLabel.visible = true;
	}
	if(typeof _width == "undefined" || _width == 0){
		this.outlineLabel.visible = false;
	}
	this.outlineWidth = _width;
	this.outlineLabel.text = obj.textLabel.text;
	this.outlineLabel.outline = _width;
	
	
	this.autoAlignTextLabel();
	if(obj.stage !== undefined && obj.stage !== null){
		obj.stage.update();	
	}
}

UILabel.prototype.setFont = function(_font){
	var obj = this;

	if( typeof _font.size !== 'undefined'){
		obj.fontProperty.size = _font.size;
	}
	if( typeof _font.type !==  'undefined'){
		
		obj.fontProperty.type = _font.type;
	}
	if( typeof _font.font !==  'undefined'){
		
		obj.fontProperty.font = _font.font;
	}
	
	this.fontize();
}
UILabel.prototype.setBackgroundColor = function(_color){
	var obj = this;
	if(_color == undefined || typeof _color === "undefined"){
		obj.background.graphics.clear();
	}
	else{
		obj.background.graphics.beginFill(_color).drawRect(0, 0, this.frame.width, this.frame.height);
	}
	if(obj.stage !== undefined && obj.stage !== null){
		obj.stage.update();	
	}
}
UILabel.prototype.setColor = function(_color){
	var obj = this;
	this.textLabel.color = _color;
	if(obj.stage !== undefined && obj.stage !== null){
		obj.stage.update();	
	}
}
UILabel.prototype.autoAlignTextLabel = function(){
	var obj = this;
	var b = obj.textLabel.getBounds();
	
	if(b == null)
		return;
	
	obj.textLabel.x = (obj.frame.width - b.width)/2-b.x;
	obj.textLabel.y = (obj.frame.height - b.height)/2-b.y;
		
		
	if(typeof obj.outlineLabel !== "undefined" || obj.outlineLabel !== undefined){
		obj.outlineLabel.x = (obj.frame.width - b.width)/2-b.x;
		obj.outlineLabel.y = (obj.frame.height - b.height)/2-b.y;	
	}
	if(obj.stage !== undefined && obj.stage !== null){
		obj.stage.update();	
	}
}

UILabel.prototype.fontize = function(){
	var obj = this;
	var size = this.fontProperty.size.toString();
	if(size.indexOf("px") === -1){
		size += "px";
	}
	var font = this.fontProperty.type +" "+ size + " " + this.fontProperty.font;
	
	this.textLabel.font = font;
	this.outlineLabel.font = font;
	
	
	if(obj.stage !== undefined && obj.stage !== null){
		obj.stage.update();	
	}
}
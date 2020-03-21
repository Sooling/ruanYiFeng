/* 获取元素的相对位置 */
function relativePos(elem){
	/* IE this is 2px */
	var top = document.documentElement.clientTop;
	var left = document.documentElement.clientLeft;
	var rect = elem.getBoundingClientRect();
	return {
		top: rect.top - top,
		left: rect.left - left
	};
};
var son = document.getElementsByClassName("son")[0];
var relativePosition = relativePos(son);
console.log(relativePosition.top);
console.log(relativePosition.left);

/* 获取元素的绝对位置 */
function absolutePos(elem){
	/* 获取页面滚动的距离 */
	if(document.compatMode == "BackCompat"){
		var scrollTop = document.body.scrollTop;
		var scrollLeft = document.body.scrollLeft;
	}else{
		var scrollTop = document.documentElement.scrollTop;
		var scrollLeft = document.documentElement.scrollLeft;
	};
	
	/* 绝对位置 = 相对位置 + 页面滚动的距离 */
	var top = document.documentElement.clientTop;
	var left = document.documentElement.clientLeft;
	var rect = elem.getBoundingClientRect();
		top: rect.top - top + scrollTop,
	return {
		left: rect.left - left + scrollLeft
	};
};
var absolutePosition = absolutePos(son);
console.log(absolutePosition.top);
console.log(absolutePosition.left);
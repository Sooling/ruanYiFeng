var operateClass =(function(){
	/* 添加一个新方法 */
	function addText (elem,textValue){
		var text = document.createTextNode(textValue);
		elem.appendChild(text);
	};
	
	/* addClass */
	function addClass(elem,className){
		var oldClass = elem.getAttribute("class");
		var newClass;
		if(oldClass.indexOf(className) !== -1){
			return;
		}else{			
			if(!oldClass){
				elem.setAttribute("class",className)
			}else{
				newClass = oldClass + " " + className;
				elem.setAttribute("class",newClass);
			};
		};			
	};
		
	/* removeClass */
	function removeClass(elem,className){
			className = " "+className;
			var newClass;
			var oldClass = elem.getAttribute("class");
				if(oldClass.indexOf(className) != -1){
					newClass = oldClass.replace(className,"");
					elem.setAttribute("class",newClass);
				};				
			};
			
	return {
		addClass: addClass,
		removeClass: removeClass,
		addText: addText
	};
})();

var oDiv = document.getElementsByTagName("div")[0];
operateClass.addClass(oDiv,"size");
operateClass.addClass(oDiv,"color");
console.log(operateClass.addText(oDiv,"hello world!"));
window.onload=function(){
	cardShadow('comments');
};

function cardShadow(clsName){
	ele =getByClassName(clsName);
	for(var i =0,len=ele.length;i<len;i++){
		ele[i].onmouseover=function(){
			this.style.boxShadow='2px 5px 5px #e7e6e1';
		};
		ele[i].onmouseout=function(){
			this.style.boxShadow='';
		};
	}
}
function getByClassName(clsName,parentId){
	var oParent = parentId?document.getElementById(parentId):document;
	var eles=[];
	var elements = oParent.getElementsByTagName('*');
	for(var i=0,len=elements.length;i<len;i++){

		if(elements[i].className.indexOf(clsName)> -1){
			eles.push(elements[i]);
		}
	}
	return eles;
}

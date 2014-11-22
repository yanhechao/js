/*
	如果浏览器本身不支持String对象的trim方法,
	那么运行下面的代码可以兼容这些环境.
	@see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
*/
if(!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g,'');
  };
}
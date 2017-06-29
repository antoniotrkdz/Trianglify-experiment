var pattern = Trianglify({
		width: window.innerWidth,
		height: window.innerHeight
	});
document.body.appendChild(pattern.svg());

console.dir(document.body.children[2]);
console.log(document.body.children[2].children);
console.log(typeof document.body.children[2].children);
var pathList = document.body.children[2].childNodes;
function fill(){
var time = 0;
	pathList.forEach(function (e,i) {
		time+=10;
		setTimeout(function () { pathList[i].style.fill = pathList[i].getAttribute("fill"); }, time);
		console.log(time)
	});
	var listPath =	Array.from(pathList).reverse();
	listPath.forEach(function (e,i) {
		time+=10;
		setTimeout(function () { listPath[i].style.fill = "none" }, time);
	});
}
var tTime = ((pathList.length * 10) - 40) * 2;
setInterval(function () { fill(); }, tTime);

var mouse = {x:50,y:50,press:false};

	function button(x,y,w,h)
{
	if(mouse.x > x && mouse.x < x + w && mouse.y > y && mouse.y < y + h)
	{
		return true;
	}
}
	function drawRect(x,y,w,h,color)
{
	ctx.fillStyle = color;
	ctx.fillRect(x,y,w,h);
}
	function drawCircle(x,y,r,color)
{	
	ctx.fillStyle=color;
	ctx.beginPath();
	ctx.arc(x,y,r,Math.PI*0.5,1.5 * Math.PI);
	ctx.fill();
}
	function drawCircleOther(x,y,r,color)
{
	ctx.fillStyle=color;
	ctx.beginPath();
	ctx.arc(x,y,r,0,2 * Math.PI);
	ctx.fill();
}
	function drawCircle2(x,y,r,color)
{
	ctx.fillStyle=color;
	ctx.beginPath();
	ctx.arc(x,y,r,Math.PI * 1.5,0.5 * Math.PI);
	ctx.fill();
}
	function collision (x1,y1,w1,h1)
{
	if(mouse.x > x1 && mouse.x < x1 + w1 && mouse.y > y1 && mouse.y < y1 + h1)
	{
		return true;
	}
}
	function line(x1,y1,x2,y2)
{
	ctx.strokeStyle = "#00ff00";
	ctx.beginPath();
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.stroke();
}
	function strokeRect(x,y,w,h,color)
{
	ctx.strokeStyle = color;
	ctx.strokeRect(x,y,w,h);
	ctx.stroke();
}
	function drawCapsule(x,y,w,h,color,w2)
{
	drawCircle(x, y + (h/2),(h/2),"black");
	drawRect(x,y,w,h,color);
	drawCircle2(x + w2, y + (h/2),(h/2),"black");
	strokeRect(x,y,w2,h,"black");
}
	function drawCapsule3(x,y,w,h,color,w2,x2)
{
	drawCircle(x, y + (h/2),(h/2),"black");
	drawRect(x,y,w,h,color);
	drawCircle2(x2, y + (h/2),(h/2),"black");
	strokeRect(x,y,w,h,"black");
}
	function drawCapsule2(x,y,w,h,color,x2,w2)
{
	drawCircle(x2, y + (h/2),(h/2),"black");
	drawRect(x,y,w,h,color);
	drawCircle2(x2 + w2, y + (h/2),(h/2),"black");
	strokeRect(x2,y,w2,h,"black");
}
	function strokeCircle(x,y,r,color)
{
	ctx.strokeStyle=color;
	ctx.beginPath();
	ctx.arc(x,y,r,Math.PI,2* Math.PI);
	ctx.stroke();
}
	function drawText (text,x,y,c,font)
{
	ctx.fillStyle = c;
	ctx.font = font;
	ctx.fillText(text,x,y);
}
	function drawText2 (text,x,y,c)
{
	ctx.fillStyle = c;
	ctx.font = "Arial 300px";
	ctx.fillText(text,x,y);
}
	function drawImage(img,x,y,w,h)
{
	ctx.drawImage(img, x, y, w, h);
}
	function drawFrame(img, _x, _y, _w, _h, x, y, w, h)
{
	ctx.drawImage(img, x, y, w, h);
}
	var _mouseMove = function(e)
{ 
	mouse.x = e.x - canvas.offsetLeft;
	mouse.y = e.y - canvas.offsetTop;
}
	var _mouseUp = function(e)
{
	mouse.press = false;
}	
	
var _mouseDown = function(e)
{
	mouse.press = true;
}	

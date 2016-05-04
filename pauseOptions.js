function pauseOptions()
{
	this.capsuleX = 500;
	this.capsuleX2 = 450;
	this.circleX = 585;
	this.circleX2 = 585;
	this.circleX3 = 585;
	this.volume = 0.5;
	this.volume2 = 0.5;
	this.volume3 = 0.5;
	this.general = false;
	this.verificar = false;
	
	this.draw = function()
	{
		ctx.drawImage(papiro,299,98);
		drawCircleOther(this.circleX,340,5,"RED");
		drawCircleOther(this.circleX2,376,5,"RED");
		drawCircleOther(this.circleX3,412,5,"RED");
	}
	this.update = function()
	{
		if(this.volume > 0.94) this.volume = 1;
		if(this.volume <= 0.01) this.volume = 0; 
		if(this.volume2 > 0.94) this.volume2 = 1; 
		if(this.volume2 <= 0.01) this.volume2 = 0;
		if(this.volume3 > 0.94) this.volume3 = 1; 
		if(this.volume3 <= 0.01) this.volume3 = 0;
		
		if(button(475,335,110,10) && mouse.press) 
		{
			this.circleX = mouse.x;
			this.circle2X = mouse.x;
			this.circle3X = mouse.x;
			this.general = true;
		}
		this.volume = (this.circleX-475) /115; 
		
		if(button(475,376,110,10) && mouse.press)
		{
			this.circleX2 = mouse.x;
			musicadespojada.volume = this.volume2;
		}
		this.volume2 = (this.circleX2-475) /115;
		
		if(this.general) 
		{
			musicadespojada.volume = scream.volume = arrow_fly.volume = swords_hit.volume = this.volume;
			this.general = false;
		}
		if(button(476,407,110,10) && mouse.press)
		{
			this.circleX3 = mouse.x;
			scream.volume = arrow_fly.volume = swords_hit.volume = this.volume3;
			this.verificar = true;
		}
		if(this.verificar)
		{
			scream.play();
			arrow_fly.play();
			swords_hit.play();
			this.verificar = false;
		}
		this.volume2 = (this.circleX2-475) /115;
		
		if(button(430,463,80,25) && mouse.press) scene = "pause";
		
		//console.log(this.circleX2,this.volume2);
	}
}
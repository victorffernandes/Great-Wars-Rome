function pause()
{
	opacidade = 0;
	this.boolean = false;
	
	this.draw = function()
	{
		ctx.globalAlpha = opacidade;
		ctx.drawImage(papel,299,100);
		ctx.globalAlpha = 1;
	}
	
	this.update = function()
	{
		if(button(435,370,75,27) && mouse.press) scene = "Options";
		
		if(button(425,330,100,25) && mouse.press) this.boolean = true;
		
		if(this.boolean) opacidade -= 0.05;
		
		if(this.boolean && opacidade <= 0) 
		{
			scene = "battleMenu";
			this.boolean = false;
		}
		if(button(440,410,65,23) && mouse.press && opacidade == 1) 
		{
			location.reload();
			scene = "Menu";
			mouse.press = false;
		}
		if(opacidade < 1 && !this.boolean) opacidade += 0.05;
		if(opacidade >= 1) opacidade = 1;
		if(opacidade <= 0) opacidade = 0;
		console.log(opacidade);
		
	}

}
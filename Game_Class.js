//Código do Grupo de Oficina da 1001 - Victor Faria, Mateus Amaral, Luís Paulo e Rebeca Dias.
	
	var scream = new Audio('Som/Pain.mp3');
	var arrow_fly = new Audio('Som/Flecha.mp3');
	var swords_hit = new Audio('Som/Swords_Collide.mp3');
	var flecha = new Image();
	var e_flecha = new Image();
	var castelo = new Image();
	var background = new Image();
	flecha.src = "Imagens/Menu/flecha.png";
	e_flecha.src = "Imagens/e_flecha.png";
	castelo.src = "Imagens/castelo.png";
	background.src = "Imagens/Background.png";
	
	var spawntime = 160;

	function Game()
	{
		this.knight = {x:510,y:542,w:50,h:50,img:new Image()}
		this.archer = {x:265,y:542,w:50,h:50,img:new Image()}
		this.warrior = {x:40,y:542,w:50,h:50,img:new Image()}
		this.bSlingshot = {x:710,y:542,w:50,h:50,img:new Image()}
		this.catapult = {x:[],y:[],w:75,h:75,img:new Image(),speedy:[]}
		this.catapult2 = {x:[],y:[],w:75,h:75,img:new Image(),speedy:[],life:[]}
		this.knight.img.src = "Imagens/Menu/K.png";
		this.wimage = new Image();
		this.wimage.src = "Imagens/Menu/W.png"
		this.aimage = new Image();
		this.aimage.src = "Imagens/Menu/A.png"
		this.play = {x:[],y:380,w:[],h:[],img:[],speed:[],life:[],damage:[]}
		this.ene =	{x:[],y:380,w:[],h:[],img:[],timer:0,speed:[],life:[],damage:[]}
		this.arrow = {x:[],y:380,w:20,h:10,img:new Image(),timer:0}
		this.arrow2 = {x:[],y:380,w:20,h:10,img:new Image(),timer:0}
		this.wall = {x:15,y:198,w:188,h:265,img:new Image(),life:60,lifecolor:"BLUE"}
		this.wall2 = {x:(canvas.width - 195),y:198,w:188,h:265,img:new Image(),life:60,lifecolor:"BLUE"}
		this.timer = 0; 
		this.timerCompra = 40;
		this.timerCat = 0;
		this.capsula2X = 741;
		this.capsula2W = 180;
		this.draw = function()
		{
		ctx.clearRect(0,0,canvas.width,canvas.height);
		drawImage(background,0,0,940,canvas.height);
		//ctx.drawImage(castelo,50,100,250,350);
		drawText(cash,40,481,"black"," 30px Oracle");
		drawCapsule(15,50,this.wall.life * 3,15,this.wall.lifecolor,180);
		drawCapsule2(this.capsula2X,50,this.capsula2W,15,this.wall2.lifecolor,741,180);
		
		for(var i = 0; i < this.play.img.length; i++)
			{	
				this.play.x[i] += this.play.speed[i];
				drawText(this.play.life[i],this.play.x[i] , this.play.y,"black","Oracle 45px");
				ctx.drawImage(this.play.img[i] , this.play.x[i] , this.play.y , this.play.w[i] , this.play.h[i]);
			}
			
				for(var j = 0; j < this.ene.x.length; j++)
			{
				this.ene.x[j] -= this.ene.speed[j];
				drawText(this.ene.life[j],this.ene.x[j],this.ene.y,"black","Arial 45px")
				drawImage(this.ene.img[j],this.ene.x[j],this.ene.y,this.ene.w[j],this.ene.h[j],this.ene.img[j]);
			}
			for(var f = 0; f < this.catapult.x.length;f++)
			{
				this.catapult.x[f] += 10;
				this.catapult.y[f] += this.catapult.speedy[f];
				drawImage(meteoroj,this.catapult.x[f],this.catapult.y[f],this.catapult.w,this.catapult.h);
			}
				for(var d = 0; d < this.catapult2.x.length;d++)
			{
				this.catapult2.x[d] -= 10;
				this.catapult2.y[d] += this.catapult2.speedy[d];
				drawImage(meteoroj,this.catapult2.x[d],this.catapult2.y[d],this.catapult2.w,this.catapult2.h);
			}
				for(var n = 0; n < this.arrow.x.length; n++)
			{
				this.arrow.x[n] += 5;
				drawImage(flecha,this.arrow.x[n],this.arrow.y,this.arrow.w,this.arrow.h);
			}
			
			for(var b = 0; b < this.arrow2.x.length; b++)
			{
				this.arrow2.x[b] -= 5;
				drawImage(e_flecha,this.arrow2.x[b],this.arrow2.y,this.arrow2.w,this.arrow2.h);
			}
		}
	//Checador de butões
	//---------------------------------------------------------------------------------------------------------------------------------------------
		
		this.update = function()
		{
		this.timerCompra ++;
		this.timerCat ++;
				if(this.timerCat > 500)
				{
					this.timerCat = 0;
					this.catapult2.x.push(835);
					this.catapult2.y.push(100);
					this.catapult2.life.push(5);
					this.catapult2.speedy.push(1);	
				}
			
				if(button(this.bSlingshot.x,this.bSlingshot.y,this.bSlingshot.w,this.bSlingshot.h) && mouse.press && this.timerCompra > 40)
			{
				if(cash >= costC)
				{
					this.timerCompra = 0;		
					this.catapult.x.push(0);
					this.catapult.y.push(100);
					this.catapult.speedy.push(2);	
					mouse.press = false;
					cash -= costC;
				}
			}
			
			if(button(this.knight.x,this.knight.y,this.knight.w,this.knight.h) && mouse.press && this.timerCompra > 40)
			{
				if(cash >= costK)
				{
					this.timerCompra = 0;		
					this.play.x.push(110);	
					this.algo(this.play,this.knight.img, 80, 65,1,10,4);				
					mouse.press = false;
					cash -= costK;
				}
			}
			
				if(button(this.archer.x,this.archer.y,this.archer.w,this.archer.h) && mouse.press && this.timerCompra > 40)
			{
				if(cash >= costA)
				{
					this.timerCompra = 0;		
					this.play.x.push(110);	
					this.algo(this.play,this.aimage, 70, 35,1,6,2);	
					mouse.press = false;
					cash -= costA;
				}
			}
			
				if(button(this.warrior.x,this.warrior.y,this.warrior.w,this.warrior.h) && mouse.press && this.timerCompra > 40)
			{
				if(cash >= costW)
				{
					this.timerCompra = 0;		
					this.play.x.push(110);	
					this.algo(this.play,this.wimage, 70, 35,1,8,3);
					mouse.press = false;
					cash -= costW;
				}
			}
			
			if(this.wall.life <= 35 && this.wall.lifecolor == "BLUE")this.wall.lifecolor ="YELLOW";
			if(this.wall.life <= 15 && this.wall.lifecolor == "YELLOW")this.wall.lifecolor ="RED";
			if(this.wall2.life <= 35 && this.wall2.lifecolor == "BLUE")this.wall2.lifecolor ="YELLOW";
			if(this.wall2.life <= 15 && this.wall2.lifecolor == "YELLOW")this.wall2.lifecolor ="RED";
	//Respawn
	//--------------------------------------------------------------------------------------------------		
			this.ene.timer ++;
			if(this.ene.timer > (spawntime * difficulty))
			{
			random = Math.floor((Math.random() * 100)) +1;
				if( random <= 50)
				{
				//Guerreiro
					this.ene.x.push(820);
					this.algo(this.ene,e_W,70,45,1,7,3);
				}
				else if ( random > 50 && random < 85 )
				{
				//Arqueiro
					this.ene.x.push(820);
					this.algo(this.ene,e_A,70,35,1,9,2);
				}
				else if (random >= 90 )
				{
				//Cavaleiro
					this.ene.x.push(820);
					this.algo(this.ene,e_K,80,65,1,11,5);
				}
			this.ene.timer = 0;
			}
		}
		
		this.algo = function(ra,image, h, w,speed,vida,dano)
		{				
			ra.img.push(image);
			ra.h.push(h);
			ra.w.push(w);
			ra.speed.push(speed);
			ra.life.push(vida);
			ra.damage.push(dano);
		}
	// Update da Flecha
	//-----------------------------------------------------------------------------------------------------------	
		this.update_arrow = function()
		{
		this.arrow.timer ++;
		this.arrow2.timer ++;
			if(this.arrow.timer > 150 && this.play.x.length != 0)
			{
				arrow_fly.play();
				for(var i = 0; i < this.play.x.length; i++)
				{
					if(this.play.img[i] != this.wimage && this.play.img[i] != this.knight.img)
					this.arrow.x.push(this.play.x[i]);
				}
				this.arrow.timer = 0;
			}
			
			if(this.arrow2.timer > 150 && this.ene.x.length != 0)
			{
				//console.log(this.arrow2.x.length)
				for(var j = 0; j < this.ene.x.length;j++)
				{
					if(this.ene.img[j] != e_K && this.ene.img[j] != e_W)
					this.arrow2.x.push(this.ene.x[j]);
				}
				this.arrow2.timer = 0;
			}
		}

	//Colisão	
	//----------------------------------------------------------------------------------------------------	
		this.update_collision = function()
		{
			this.timer += 1;
			for(var i = 0; i < this.play.x.length; i++)
			{
				for(var j = 0; j < this.ene.x.length; j++)
				{
					if(this.play.x[i] + this.play.w[i] + 5 > this.ene.x[j] && this.play.x[i] < this.ene.x[j] + this.ene.w[j] - 5)
					{
						if(this.timer > 30)
						{
									if(this.play.img[i] == this.knight.img)
									{
										swords_hit.play();
										this.ene.life[j] -= this.play.damage[i];
									}
									else if (this.play.img[i] == this.wimage)
									{
										swords_hit.play();
										this.ene.life[j] -= this.play.damage[i];
									}
									//-----------------------------------------------------						
									if (this.ene.img[i] == e_W)
									{
										swords_hit.play();
										this.play.life[i] -= this.ene.damage[i];
									}
									else if (this.ene.img[i] == e_K)
									{	
										swords_hit.play();
										this.play.life[i] -= this.ene.damage[i];
									}
								if(this.ene.life[j] < 1)
								{
									scream.play();
										if (this.ene.img[i] == e_W)
									{
										cash += gainW;
										console.log("guerreiro' morreu");
									}
									else if (this.ene.img[i] == e_K)
									{
										cash += gainK;
										console.log("cavaleiro morreu");
									}
									else {
									console.log("arqueiro morreu");
									cash += gainA;
									}
									
									this.ene.x.splice(j,1);
									this.ene.speed.splice(j,1);
									this.ene.life.splice(j,1);
									this.ene.img.splice(j,1);
								}
								if (this.play.life[i] < 1)
								{
									scream.play();
									this.play.x.splice(i,1);
									this.play.speed.splice(i,1);
									this.play.img.splice(i,1);
									this.play.life.splice(i,1);
								}
								this.timer = 0;
						}
						
					}

				}
			}
	//Flecha
	//------------------------------ 
			for(var n = 0; n < this.arrow.x.length;n++)
			{
				for(var j = 0; j < this.ene.x.length; j++)
				{
					if( this.arrow.x[n] + this.arrow.w > this.ene.x[j] && this.arrow.x[n] < this.ene.x[j] + this.ene.w[j])
					{
						
						this.ene.life[j] -= 2
						console.log(this.ene.life[j]);
						this.arrow.x.splice(n,1);
						if(this.ene.life[j] < 1)
						{
							if (this.ene.img[i] == e_W)
							{
								cash += gainW;
								console.log("guerreiro' morreu");
							}
							else if (this.ene.img[i] == e_K)
							{
								cash += gainK;
								console.log("cavaleiro morreu");
							}
							else {
							console.log("arqueiro morreu");
							cash += gainA;
							}
							scream.play();
							this.ene.x.splice(j,1);
							this.ene.speed.splice(j,1);
							this.ene.life.splice(j,1);
							this.ene.img.splice(j,1);
							
						}
					}
				}
			}
			
			for(var b = 0; b < this.arrow2.x.length; b++)
			{
				for(var i = 0; i < this.play.x.length; i++)
				{
					if( this.arrow2.x[b] + this.arrow2.w > this.play.x[i] && this.arrow2.x[b] < this.play.x[i] + this.play.w[i])
					{
						this.play.life[i] -= 2;
						this.arrow2.x.splice(b,1);
						if(this.play.life[i] < 1)
						{
							scream.play();
							this.play.x.splice(i,1);
							this.play.speed.splice(i,1);
							this.play.life.splice(i,1);
							this.play.img.splice(i,1);
						}
					
					}
				}
			}
	//Colisão Muralha Inimiga
	//------------------------------------------------------------------------------------------------------------------------------
		
			for(var n = 0; n < this.arrow.x.length; n++)
			{
				if(this.arrow.x[n] > this.wall2.x)
				{
					this.wall2.life -= 1;
					this.capsula2X +=3;
					this.capsula2W -=3;
					this.arrow.x.splice(n,1);
				}
			}
			
			for(var n = 0; n < this.arrow2.x.length; n++)
			{
				if(this.arrow2.x[n] < this.wall.w )
				{
					this.wall.life -= 1;
					this.arrow2.x.splice(n,1);
				}
			}
		
			for(var i = 0; i < this.play.x.length; i++)
			{
				if(this.play.x[i] + this.play.w[i] > this.wall2.x && this.play.x[i] < this.wall2.x + this.wall2.x)
				{
					this.play.x[i] = this.wall2.x - this.play.w[i];
					if(this.play.img[i] != this.aimage && this.timer > 20)
					{
					this.timer = 0;
					this.wall2.life -= this.play.damage[i];
					this.capsula2X += this.play.damage[i] *3;
					this.capsula2W -= this.play.damage[i] *3;
					}
				}
			}
			
				for(var f = 0; f < this.catapult.x.length;f++)
			{
				if(this.catapult.x[f] + this.catapult.w > this.wall2.x && this.catapult.x[f] < this.wall2.x + this.wall2.w)
				{
					this.wall2.life -= 10;
					this.capsula2X += 30;
					this.capsula2W -= 30;
					this.catapult.x.splice(f,1);
					this.catapult.y.splice(f,1);
					this.catapult.speedy.splice(f,1);	
				}
			}
			
				for(var d = 0; d < this.catapult2.x.length;d++)
			{
				if(this.catapult2.x[d] + this.catapult2.w > this.wall.x && this.catapult2.x[d] < this.wall.x + this.wall.w)
				{
					this.wall.life -= 10;
					this.catapult2.x.splice(d,1);
					this.catapult2.y.splice(d,1);
					this.catapult2.speedy.splice(d,1);	
				}
				if(button(this.catapult2.x[d],this.catapult2.y[d],this.catapult2.w,this.catapult2.h) && mouse.press)
				{
					this.catapult2.life[d] -= 1;
				}
				if(this.catapult2.life[d] < 1)
				{
					this.catapult2.x.splice(d,1);
					this.catapult2.y.splice(d,1);
					this.catapult2.speedy.splice(d,1);	
				}
			}
			
			for(var j = 0; j < this.ene.x.length; j++)
			{
				if(this.ene.x[j]  < this.wall.x + this.wall.w)
				{
					this.ene.x[j] = this.wall.w ;
					if((this.ene.img[j] == e_K || this.ene.img[j] == e_W) && this.timer > 20)
					{
						this.timer = 0;
						this.wall.life -= this.ene.damage[j];
					}
				}
			}
			
			
			
			if(this.wall.life < 1 || this.wall2.life  <  1)
			{
				scene = "fim";
			}
				
		}
	//Movimentação coordenada
	//-------------------------------------------------------------------------------------------------------------------------------------
		this.update_move = function()
		{
			
			for(var i = 0; i < this.play.x.length; i++)
			{	
				for(var j = 0; j < this.ene.x.length; j++)
				{
					if(this.play.x[i] + this.play.w[i] > this.ene.x[j] && this.play.x[i] < this.ene.x[j] + this.ene.w[j] )
					{
						this.play.x[i] -= this.play.speed[i];
						this.ene.x[j] += this.ene.speed[j];
						if(this.play.img[i] == e_K)
						{
							this.play.speed[i] = 0;
							this.ene.speed[j] = 0;
							this.play.x[i] -= this.play.speed[i];
							this.ene.x[j] += this.ene.speed[j];
						}
						
					}
					else
					{
					this.play.speed[i] = 1;
					this.ene.speed[j] = 1;
					}
				}
			}
			
			for(var i = 0; i < this.play.x.length; i++)
			{
				if(this.play.x[i + 1] + this.play.w[i + 1] > this.play.x[i] && this.play.x[i + 1] < this.play.x[i] + this.play.w[i])
				{
				this.play.speed[i + 1] = 0; 
				}
				else{
				this.play.speed[i + 1] = 1; 
				}
			}
			
				for(var j = 0; j < this.ene.x.length; j++)
			{
				if(this.ene.x[j + 1] + this.ene.w[j + 1] > this.ene.x[j] && this.ene.x[j + 1] < this.ene.x[j] + this.ene.w[j])
				{
				this.ene.speed[j + 1] = 0; 
				}
				else{
				this.ene.speed[j + 1] = 1; 
				}
			}
			
			
		}
	}
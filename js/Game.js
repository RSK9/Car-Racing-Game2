class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide()
    player.getPlayerinfo()
    if(allPlayers!==null){
      var position=200
      for(var i in allPlayers){
        if(i==="player"+player.index){
          fill("red")
        }
        else{
          fill("black")
        }
        textSize(15)
        text(allPlayers[i].name+":"+allPlayers[i].distance,200,position)
        position=position+20 
      }
    }
    if(keyDown(UP_ARROW)&&player.index!==null){
      player.distance=player.distance+50
      player.update()
    }
  }
}

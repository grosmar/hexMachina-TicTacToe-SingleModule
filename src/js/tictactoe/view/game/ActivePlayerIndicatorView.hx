package js.tictactoe.view.game;

import hex.di.IInjectorContainer;
import js.Browser;
import js.html.Element;
import js.html.UListElement;
import tictactoe.module.game.model.IGameModelListener;
import tictactoe.module.game.model.IGameModelRO;
import tictactoe.module.game.view.IActivePlayerIndicatorView;
import tictactoe.module.game.vo.PlayerVO;

/**
 * ...
 * @author duke
 */
class ActivePlayerIndicatorView implements IActivePlayerIndicatorView implements IGameModelListener implements IInjectorContainer
{
	@Inject
	public var model:IGameModelRO;
	
	var container:Element;
	var playerList = new Map<String,UListElement>();
	var activePlayer:UListElement;

	public function new( container:Element ) 
	{
		this.container = cast container;
		
	}
	
	@PostConstruct
	public function init():Void
	{
		this.model.addListener(this);
	}
	
	public function setPlayerList( playerList:Array<PlayerVO> ):Void
	{
		this.playerList = new Map<String,UListElement>();
		this.container.innerHTML = "";
		
		for ( i in 0...playerList.length )
		{
			var sign:String = playerList[i].sign;
			var li:UListElement = cast Browser.document.createElement("li");
			li.classList.add("player");
			li.innerHTML = '<div class="turn-player">' + sign.toUpperCase() + '</div>';
			this.playerList.set(sign, li);
			
			container.appendChild( li );
		}
	}
	
	public function setActivePlayer(sign:String):Void 
	{
		if ( this.activePlayer != null )
		{
			this.activePlayer.classList.remove("is-selected");
		}
		
		this.activePlayer = this.playerList.get(sign);
		this.activePlayer.classList.add("is-selected");
	}
	
	
	public function onPlayerListUpdate(playerList:Array<PlayerVO>):Void 
	{
		this.setPlayerList( playerList );
	}
	
	public function onActivePlayerChange(player:PlayerVO):Void 
	{
		this.setActivePlayer( player.sign );
	}
	
	public function onDraw():Void 
	{
		this.activePlayer.classList.remove("is-selected");
	}
	
}
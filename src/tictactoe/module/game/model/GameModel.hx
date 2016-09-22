package tictactoe.module.game.model;
import hex.model.BasicModel;
import hex.model.ModelDispatcher;
import hex.structures.Size;
import tictactoe.module.game.model.IGameModelListener;
import tictactoe.module.game.vo.PlayerVO;

/**
 * ...
 * @author duke
 */
class GameModel extends BasicModel<GameModelDispatcher, IGameModelListener> implements IGameModel
{
	var playerList:Array<PlayerVO> = [];
	
	var activeIndex:UInt;
	
	var size:Size;
	var isDraw:Bool;

	public function new() 
	{
		super();
	}
	
	public function setPlayerList( playerList:Array<PlayerVO> ):Void
	{
		this.playerList = playerList;
		this.dispatcher.onPlayerListUpdate( playerList );
	}
	
	public function setActivePlayer(index:UInt):PlayerVO 
	{
		this.activeIndex = index;
		this.dispatcher.onActivePlayerChange( this.playerList[index] );
		return this.playerList[index];
	}
		
	public function getPlayerListLength():UInt 
	{
		return this.playerList.length;
	}
	
	public function getAcivePlayerIndex():UInt 
	{
		return this.activeIndex;
	}
	
	public function getAcivePlayer():PlayerVO 
	{
		return this.playerList[this.activeIndex];
	}
	
	
	public function setDraw():Void 
	{
		this.isDraw = true;
		this.dispatcher.onDraw( );
	}
	
	
}

private class GameModelDispatcher extends ModelDispatcher<IGameModelListener> implements IGameModelListener
{
	public function onPlayerListUpdate(playerList:Array<PlayerVO>):Void
	{
		
	}
	
	public function onActivePlayerChange( player:PlayerVO ):Void
	{
		
	}
	
	public function onDraw( ):Void
	{
		
	}
	
}
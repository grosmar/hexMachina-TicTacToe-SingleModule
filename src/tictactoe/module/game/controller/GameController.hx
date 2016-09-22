package tictactoe.module.game.controller;
import hex.di.IInjectorContainer;
import hex.structures.Point;
import hex.structures.Size;
import tictactoe.module.game.model.IBoardModel;
import tictactoe.module.game.model.IGameModel;
import tictactoe.module.game.view.IBoardView;
import tictactoe.module.game.vo.PlayerVO;
import tictactoe.vo.LineVO;

/**
 * ...
 * @author duke
 */
class GameController implements IGameController implements IInjectorContainer
{
	
	@Inject
	public var gameModel:IGameModel;
	
	@Inject
	public var boardModel:IBoardModel;
	
	@Inject
	public var boardView:IBoardView;
	
	
	public function setPlayerList( playerList:Array<PlayerVO> ):Void
	{
		this.gameModel.setPlayerList( playerList );
	}
	
	public function init( ):Void
	{
		this.setBoard( new Size(3, 3), 3);
		
		this.setPlayerList( [new PlayerVO("x"), new PlayerVO("o")] );
		this.setActivePlayer( 0 );
	}
	
	public function setBoard(size:Size, successLineCount:UInt ):Void 
	{
		this.boardModel.initBoard( size, successLineCount );
	}
	
	public function nextPlayer( ):Void
	{
		var actIndex:UInt = this.gameModel.getAcivePlayerIndex( );
		var length:UInt = this.gameModel.getPlayerListLength( );
		
		var nextIndex:UInt = actIndex < length - 1 ? actIndex+1 : 0;
		this.setActivePlayer( nextIndex );
	}
	
	function setActivePlayer( index:UInt ):Void
	{
		trace("setActivePlayer", index );
		var player:PlayerVO = this.gameModel.setActivePlayer( index );
		
		this.setPlayerTurn( );
	}
	
	function setPlayerChoice( point:Point ):Void 
	{
		trace("onPlayerChoose", point );
		var player:PlayerVO = this.gameModel.getAcivePlayer( );
		
		if ( this.boardModel.getBoardPoint( point ) == null )
		{
			this.boardModel.setBoardPoint( point, player.sign );
			
			var line:LineVO = null;
			if ( (line = this.boardModel.getFullLine()) != null )
			{
				trace("Game Over. Winner: " + line.sign);
				this.boardModel.setWinnerLine( line );
			}
			else if ( this.boardModel.getFreeCellCount() > 0 )
			{
				this.nextPlayer();
			}
			else
			{
				this.gameModel.setDraw( );
			}
		}
		else
		{
			trace("Board point already taken");
			this.setActivePlayer( this.gameModel.getAcivePlayerIndex() );
		}
	}
	
	public function setPlayerTurn():Void
	{
		this.boardView.getChoice().onComplete( this.onPlayerTurnResult );
	}
	
	function onPlayerTurnResult( point:Point ):Void
	{
		if ( this.boardModel.getBoardPoint(point) != null )
		{
			this.boardView.getChoice().onComplete( this.onPlayerTurnResult );
		}
		else
		{
			this.setPlayerChoice( point );
		}
	}
}
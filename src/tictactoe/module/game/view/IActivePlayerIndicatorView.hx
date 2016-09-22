package tictactoe.module.game.view;
import tictactoe.module.game.vo.PlayerVO;

/**
 * @author duke
 */
interface IActivePlayerIndicatorView 
{
	function setActivePlayer( sign:String ):Void;
	
	function setPlayerList(playerList:Array<PlayerVO>):Void;
}
package tictactoe.module.game.model;
import tictactoe.module.game.vo.PlayerVO;

/**
 * @author duke
 */
interface IGameModelListener
{
	function onPlayerListUpdate(playerList:Array<PlayerVO>):Void;
	
	function onActivePlayerChange(player:PlayerVO):Void;
	
	function onDraw():Void;
}
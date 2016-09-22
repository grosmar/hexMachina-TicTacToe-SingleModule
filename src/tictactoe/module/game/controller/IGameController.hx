package tictactoe.module.game.controller;
import hex.structures.Size;
import tictactoe.module.game.vo.PlayerVO;

/**
 * ...
 * @author duke
 */
interface IGameController
{
	
	function setPlayerList(playerList:Array<PlayerVO>):Void;
	
	function init( ):Void;
	
	function setBoard(size:Size, successLineCount:UInt):Void;
}
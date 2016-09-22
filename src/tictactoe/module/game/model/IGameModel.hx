package tictactoe.module.game.model; 
import tictactoe.module.game.vo.PlayerVO;

/**
 * @author duke
 */
interface IGameModel extends IGameModelRO
{
  
  function setPlayerList(playerList:Array<PlayerVO>):Void;
  
  function setActivePlayer(index:UInt):PlayerVO;
  
  function setDraw():Void;
  
}
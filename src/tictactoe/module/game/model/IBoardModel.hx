package tictactoe.module.game.model; 
import hex.structures.Point;
import hex.structures.Size;
import tictactoe.vo.LineVO;

/**
 * @author duke
 */
interface IBoardModel extends IBoardModelRO
{
  
  function initBoard( size:Size, successLineCount:UInt ):Void;
  
  function setBoardPoint(point:Point, sign:String):Void;
  
  function setWinnerLine(line:LineVO):Void;
}
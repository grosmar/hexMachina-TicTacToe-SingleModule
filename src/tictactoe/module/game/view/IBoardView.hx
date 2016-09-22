package tictactoe.module.game.view;
import hex.control.ICompletable;
import hex.structures.Point;
import hex.structures.Size;
import tictactoe.vo.LineVO;

/**
 * ...
 * @author ...
 */
interface IBoardView
{
	function setSize(size:Size):Void;
	
	function getChoice():ICompletable<Point>;
	
	function setBoardCell(point:Point, sign:String):Void;
	
}
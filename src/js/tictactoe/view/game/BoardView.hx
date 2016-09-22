package js.tictactoe.view.game;

import hex.control.AsyncResponder;
import hex.control.ICompletable;
import hex.structures.Point;
import hex.structures.Size;
import hex.view.BasicView;
import js.html.Element;
import js.html.Event;
import js.html.TableCellElement;
import js.html.TableElement;
import js.html.TableRowElement;
import tictactoe.module.game.model.IBoardModelListener;
import tictactoe.module.game.model.IBoardModelRO;
import tictactoe.module.game.view.IBoardView;
import tictactoe.vo.LineVO;

/**
 * ...
 * @author ...
 */
class BoardView extends BasicView implements IBoardView implements IBoardModelListener
{
	var container:TableElement;
	var responder:AsyncResponder<Point>;
	
	@Inject
	public var model:IBoardModelRO;

	public function new(container:Element) 
	{
		super();
		this.container = cast container;
		
	}
	
	@PostConstruct
	public function init():Void
	{
		this.model.addListener(this);
	}
	
	public function setSize( size:Size ):Void
	{
		var tbody:Element = this.container.tBodies.item(0);
		
		tbody.innerHTML = "";
		
		for (i in 0...Std.int(size.height)) 
		{
			var tr:TableRowElement = cast container.insertRow();
			for (j in 0...Std.int(size.width)) 
			{
				var tc:Element = tr.insertCell();
			}
        }
    }
	
	public function setBoardCell( point:Point, sign:String ):Void
	{
		var cell = cast(this.container.rows.item(point.y), TableRowElement).cells.item(point.x);
		//cell.classList.add("is-filled");
		cell.innerHTML = sign.toUpperCase();
	}
	
	public function setWinnerLine( line:LineVO ):Void
	{
		for (i in 0...line.line.length)
		{
			cast(this.container.rows.item(line.line[i].y), TableRowElement).cells.item(line.line[i].x).classList.add("is-winner-cell");
		}
	}
	
	public function onWinnerLine( line:LineVO ):Void
	{
		this.setWinnerLine( line );
	}
	
	public function onBoardInit(size:Size):Void 
	{
		this.setSize( size );
	}
	
	public function onBoardUpdate(point:Point, sign:String):Void 
	{
		this.setBoardCell( point, sign );
	}
	
	public function getChoice():ICompletable<Point> 
	{
		this.addListeners();
		this.responder = new AsyncResponder<Point>();
		return this.responder;
	}
	
	function addListeners( ):Void
	{
		var list = this.container.querySelectorAll("td");
		
		for ( i in 0...list.length )
		{
			list.item(i).addEventListener( "click", this.onClick );
		}
	}
	
	function removeListeners( ):Void
	{
		var list = this.container.querySelectorAll("td");
		
		for ( i in 0...list.length )
		{
			list.item(i).removeEventListener( "click", this.onClick );
		}
	}
	
	function onClick(e:Event):Void 
	{
		var target:TableCellElement = cast e.currentTarget;
		
		this.removeListeners( );
		trace( target.cellIndex, cast(target.parentNode, TableRowElement).rowIndex );
		this.responder.complete( new Point( target.cellIndex, cast(target.parentNode, TableRowElement).rowIndex ) );
	}
	
}
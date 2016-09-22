package js.tictactoe.view.game;

import hex.control.AsyncResponder;
import hex.control.ICompletable;
import hex.control.ResultResponder;
import hex.structures.Point;
import js.html.Element;
import js.html.Event;
import js.html.TableCellElement;
import js.html.TableElement;
import js.html.TableRowElement;
import tictactoe.module.game.view.IUserPlayerView;

/**
 * ...
 * @author duke
 */
class UserPlayerView implements IUserPlayerView
{
	var board:TableElement;
	
	var responder:AsyncResponder<Point>;

	public function new( board:Element) 
	{
		this.board = cast board;
		
	}
	
	
	/* INTERFACE tictactoe.module.player.user.view.IUserPlayerView */
	
	public function getChoice():ICompletable<Point> 
	{
		this.addListeners();
		this.responder = new AsyncResponder<Point>();
		return this.responder;
	}
	
	function addListeners( ):Void
	{
		var list = this.board.querySelectorAll("td");
		
		for ( i in 0...list.length )
		{
			list.item(i).addEventListener( "click", this.onClick );
		}
	}
	
	function removeListeners( ):Void
	{
		var list = this.board.querySelectorAll("td");
		
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
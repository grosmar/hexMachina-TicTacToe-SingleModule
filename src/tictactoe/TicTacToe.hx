package tictactoe;

import hex.compiler.parser.xml.XmlCompiler;
import hex.log.layout.JavaScriptConsoleLayout;
import hex.log.layout.LogProxyLayout;
import tictactoe.module.game.GameModule;
#if js
import js.Browser;
import js.tictactoe.view.game.ActivePlayerIndicatorView;
import js.tictactoe.view.game.BoardView;
#end

/**
 * ...
 * @author duke
 */
class TicTacToe 
{
	
	static function main() 
	{
		#if debug
			var proxy : hex.log.layout.LogProxyLayout = new hex.log.layout.LogProxyLayout();
			#if js
				proxy.addListener( new hex.log.layout.JavaScriptConsoleLayout() );
			#end
		#end
		
		new TicTacToe();
	}
	
	public function new()
	{
		#if js 
			var game = new GameModule( 
				new ActivePlayerIndicatorView( Browser.document.querySelector(".player-list") ), 
				new BoardView( Browser.document.querySelector(".tic-tac-toe-table") ) );
			game.initialize();
		#end
	}
	
}
package tictactoe;

import hex.compiler.parser.xml.XmlCompiler;
import hex.log.layout.JavaScriptConsoleLayout;
import hex.log.layout.LogProxyLayout;
import js.Browser;
import js.tictactoe.view.game.ActivePlayerIndicatorView;
import js.tictactoe.view.game.BoardView;
import tictactoe.module.game.GameModule;

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
			proxy.addListener( new hex.log.layout.JavaScriptConsoleLayout() );
		#end
		
		new TicTacToe();
	}
	
	public function new()
	{
		var game = new GameModule( 
			new ActivePlayerIndicatorView( Browser.document.querySelector(".player-list") ), 
			new BoardView( Browser.document.querySelector(".tic-tac-toe-table") ) );
		game.initialize();
		//XmlCompiler.readXmlFile( "tictactoe/config/context.xml" );
	}
	
}
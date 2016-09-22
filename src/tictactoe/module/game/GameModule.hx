package tictactoe.module.game;
import hex.config.stateless.StatelessModuleConfig;
import hex.module.Module;
import hex.module.dependency.IRuntimeDependencies;
import hex.module.dependency.RuntimeDependencies;
import tictactoe.module.game.controller.GameController;
import tictactoe.module.game.controller.IGameController;
import tictactoe.module.game.model.BoardModel;
import tictactoe.module.game.model.GameModel;
import tictactoe.module.game.model.IBoardModel;
import tictactoe.module.game.model.IGameModel;
import tictactoe.module.game.view.IActivePlayerIndicatorView;
import tictactoe.module.game.view.IBoardView;

/**
 * ...
 * @author duke
 */
class GameModule extends Module
{

	public function new(activePlayerIndicatorView:IActivePlayerIndicatorView, boardView:IBoardView) 
	{
		super();
		
		this._injector.mapToValue(IActivePlayerIndicatorView, activePlayerIndicatorView);
		this._injector.mapToValue(IBoardView, boardView);
		
		this._addStatelessConfigClasses( [GameModuleConfig] );
		
		this._injector.injectInto(activePlayerIndicatorView);
		this._injector.injectInto(boardView);
	}
	
	override function _getRuntimeDependencies():IRuntimeDependencies 
	{
		return new RuntimeDependencies();
	}
	
	
	override public function _onInitialisation():Void 
	{
		super._onInitialisation();
		
		this._get( IGameController ).init( );
	}
}

private class GameModuleConfig extends StatelessModuleConfig
{
	override public function configure():Void 
	{
		this.mapModel( IGameModel, GameModel );
		this.mapModel( IBoardModel, BoardModel );
		this.mapController( IGameController, GameController );
	}
}
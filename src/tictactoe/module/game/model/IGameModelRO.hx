package tictactoe.module.game.model;
import hex.model.IModelRO;
import tictactoe.module.game.vo.PlayerVO;

/**
 * @author duke
 */
interface IGameModelRO extends IModelRO<IGameModelListener> 
{
	function getAcivePlayer():PlayerVO;
	
	function getPlayerListLength():UInt;
  
	function getAcivePlayerIndex():UInt;
}
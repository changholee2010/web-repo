package co.yedam.board.serviceImpl;

import java.util.List;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;

public class BoardServiceImpl implements BoardService {
	BoardDAO dao = new BoardDAO();

	@Override
	public List<BoardVO> boardList() {
		return dao.selectList();
	}

	@Override
	public BoardVO getBoard(int boardNo) {
		return null;
	}

	@Override
	public boolean addBoard(BoardVO vo) {
		return false;
	}

	@Override
	public boolean editBoard(BoardVO vo) {
		return false;
	}

	@Override
	public BoardVO removeBoard(int boardNo) {
		return null;
	}

}

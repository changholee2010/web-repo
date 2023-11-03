package co.yedam.common;

import co.yedam.board.service.BoardVO;
import co.yedam.board.serviceImpl.BoardDAO;

public class MainExe {
	public static void main(String[] args) {

		BoardDAO dao = new BoardDAO();
		BoardVO vo = new BoardVO();
		vo.setTitle("test");
		vo.setWriter("user03");
		vo.setContent("content_modify");
		vo.setBoardNo(5);
		System.out.println(dao.selectList());

	}
}

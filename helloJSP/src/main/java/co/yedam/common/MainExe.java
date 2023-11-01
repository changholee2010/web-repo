package co.yedam.common;

import java.text.ParseException;
import java.text.SimpleDateFormat;

import co.yedam.student.service.StudentService;
import co.yedam.student.service.StudentVO;
import co.yedam.student.serviceImpl.StudentServiceImpl;

public class MainExe {
	public static void main(String[] args) {
		// 학생아이디, 비밀번호, 이름, 학과, 생일
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		StudentVO vo = new StudentVO();
		vo.setStudentId("newbie12");
		vo.setStudentName("신입생123");
		vo.setStudentPassword("1234");
		vo.setStudentDept("영문학과");
		try {
			vo.setStudentBirthday(sdf.parse("2001-01-01"));
		} catch (ParseException e) {
			e.printStackTrace();
		}

		StudentService svc = new StudentServiceImpl();
		System.out.println("단건조회: " + svc.getStudent(vo.getStudentId()));

		svc.listStudent()//
				.forEach(student -> System.out.println(student));
	}
}

package com.example.demo;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class DemoApplicationTests {

	@Test
	void contextLoads() {

		//성공
		Assertions.assertTrue(true);
		//실패
		//Assertions.assertTrue(false);
		
	}

}

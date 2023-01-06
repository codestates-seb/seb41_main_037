package com.lifo.CVSreview;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class CvsReviewApplication {

	public static void main(String[] args) {
		SpringApplication.run(CvsReviewApplication.class, args);
	}

}

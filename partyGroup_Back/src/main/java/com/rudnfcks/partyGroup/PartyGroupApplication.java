package com.rudnfcks.partyGroup;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class PartyGroupApplication {

	public static void main(String[] args) {
		SpringApplication.run(PartyGroupApplication.class, args);
	}

}

package de.kumpelblase2.jhipsterwebsocket.web.websocket;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import de.kumpelblase2.jhipsterwebsocket.web.websocket.dto.TestingDTO;

@Service
public class TestingService
{
	@Autowired
	private SimpMessagingTemplate messagingTemplate;

	private int counter = 0;

	@Scheduled(fixedDelay = 5000)
	public void testSend()
	{
		counter++;
		TestingDTO testingDTO = new TestingDTO();
		testingDTO.setMessage("Message #" + counter);
		messagingTemplate.convertAndSend("/topic/updates", testingDTO);
	}
}

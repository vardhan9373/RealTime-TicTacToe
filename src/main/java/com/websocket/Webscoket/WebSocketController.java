package com.websocket.Webscoket;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.util.HtmlUtils;

import Entity.TictacToe;

@Controller
public class WebSocketController {

	  @MessageMapping("/sendMessage") // Receives messages from "/app/sendMessage"
	    @SendTo("/topic/messages") // Sends messages to "/topic/messages"
	    public TictacToe sendMessage(TictacToe message) {
		  System.out.println("Received: " + message.getValue1() + ", " + message.getValue2());
	        return message;
	    }
	
}

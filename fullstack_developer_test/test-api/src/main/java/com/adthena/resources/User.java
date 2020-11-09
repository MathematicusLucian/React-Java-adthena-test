package com.adthena.resources;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.JsonNode;

public class User {
	@JsonProperty("id")
	private Integer id;
	@JsonProperty("name")
	private String name;
	@JsonProperty("username")
	private String username;
	@JsonProperty("email")
	private String email;
	@JsonProperty("address")
	private JsonNode address;
	@JsonProperty("phone")
	private String phone;
	@JsonProperty("website")
	private String website;
	@JsonProperty("company")
	private JsonNode company;
	@JsonProperty("todos")
	private List<Todo> todos;

	public Integer getID() {
		return id;
	}

	public String getUsername() {
		return username;
	}

	public void setTodos(List<Todo> todosForUser) {
		todos =  todosForUser;
	}

}

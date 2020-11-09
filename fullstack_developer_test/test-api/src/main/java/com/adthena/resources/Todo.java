package com.adthena.resources;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Todo {
	@JsonProperty("userId")
	private Integer userId;
	@JsonProperty("id")
	private Integer id;
	@JsonProperty("title")
	private String title;
	@JsonProperty("completed")
    private Boolean completed;

    public Integer getUserId() {
        return userId;
    }
}

package com.adthena.resources;

import java.io.IOException;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.core.GenericType;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.codahale.metrics.annotation.Timed;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;

@Path("/todos/{username}")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class AdthenaTodoResource {

    public AdthenaTodoResource() {
    }
 
    private static final String REST_URI_USER = "https://jsonplaceholder.typicode.com/users";
    private static final String REST_URI_TODO = "https://jsonplaceholder.typicode.com/todos";

    // do a TodoHealthcheck on the API
 
    private Client client = ClientBuilder.newClient();

    public List<User> getUser(String username) {

        List<User> user = client
        .target(REST_URI_USER)
        .request(MediaType.APPLICATION_JSON)
        .get(Response.class)
        .readEntity(new GenericType<List<User>>() {});

        user.removeIf(x -> !x.getUsername().equals(username));

        return user;

    }

    public List<Todo> getTodo(Integer userId) {
            
        List<Todo> todosForUser = client
                .target(REST_URI_TODO)
                .request(MediaType.APPLICATION_JSON)
                .get(Response.class)
                .readEntity(new GenericType<List<Todo>>() {});

        todosForUser.removeIf(x -> !x.getUserId().equals(userId));

        return todosForUser;

    }

    @GET
    @Timed
    public List<User> fetch(@PathParam("username") String username)
            throws JsonParseException, JsonMappingException, IOException {
        
        if (username != null) {

            List<User> user = getUser(username);
            
            user.forEach((u) -> {

                Integer userId = u.getID();
                List<Todo> todosForUser = getTodo(userId);

                u.setTodos(todosForUser);

            });

            return user;

        }
        throw new WebApplicationException("NOT_FOUND");
    }
}
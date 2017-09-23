package services;

import beans.Quiz;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by Rolv-Arild on 19.09.2017.
 */
@Path("/quizzes/")
public class QuizService {
    private static Map<Integer, Quiz> quizzes = new HashMap<>();
    private static int idCount = 0;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Collection<Quiz> getQuizzes() {
        return quizzes.values();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Quiz getQuiz(@PathParam("id") int id) {
        if (!quizzes.containsKey(id)) throw new NotFoundException("Ikke funnet");
        return quizzes.get(id);
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void addQuiz(Quiz quiz) {
        quiz.setId(++idCount);
        quizzes.putIfAbsent(quiz.getId(), quiz);
    }

    @PUT
    @Path("/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public void changeQuiz(@PathParam("id") int id, Quiz quiz) {
        Quiz q = quizzes.get(id);
        if (q == null) throw new NotFoundException("Not found");
        q.setName(quiz.getName());
        q.setPlayers(quiz.getPlayers());
        q.setQuestions(quiz.getQuestions());
        quizzes.put(id, q);
    }

    @DELETE
    @Path("/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public void deleteQuiz(@PathParam("id") int id) {
        quizzes.remove(id);
    }
}

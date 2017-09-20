package services;

import beans.Question;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Path("/questions/")
public class QuestionService {

    private static Map<Integer, Question> questions = new HashMap<>();

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Collection<Question> getQuestions() {
        return questions.values();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Question getQuestion(@PathParam("id") int id) {
        if (!questions.containsKey(id)) throw new NotFoundException("Not found");
        return questions.get(id);
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void addQuestion(Question question) {
        questions.putIfAbsent(question.getId(), question);
    }

    @PUT
    @Path("/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public void changeQuestion(@PathParam("id") int id, Question question) {
        Question q = questions.get(id);
        if (q == null) throw new NotFoundException("Not found");
        q.setAnswerIndex(question.getAnswerIndex());
        q.setOptions(question.getOptions());
        q.setQuestion(question.getQuestion());
        questions.put(id, q);
    }

    @DELETE
    @Path("/{id}")
    public void deleteQuestion(@PathParam("id") int id) {
        questions.remove(id);
    }
}

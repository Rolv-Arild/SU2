package QuizService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 * Created by Rolv-Arild on 19.09.2017.
 */
@Path("/quizzes/")
public class QuizService {
    private static List<Quiz> quizzes = new ArrayList<>();

    @GET
    @Path("/{quizNavn}")
    @Produces(MediaType.APPLICATION_JSON)
    public Quiz getQuiz(@PathParam("quizNavn") String quizNavn) {
        for (Quiz q : quizzes) {
            if (quizNavn.equals(q.getNavn())) return q;
        }
        throw new NotFoundException("Ikke funnet");
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Collection<Quiz> getQuizzes() {
        return quizzes;
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void addQuiz(Quiz quiz) {
        quizzes.add(quiz);
    }

    @DELETE
    @Path("/{kunder}")
    @Consumes(MediaType.APPLICATION_JSON)
    public void deleteKunde(Quiz quiz) {
        quizzes.remove(quiz);
    }
}

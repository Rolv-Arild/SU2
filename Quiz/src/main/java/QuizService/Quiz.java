package QuizService;

import java.util.ArrayList;
import java.util.Arrays;

/**
 * Created by Rolv-Arild on 19.09.2017.
 */
public class Quiz {
    private String navn;
    private ArrayList<Question> questions;
    private ArrayList<Player> players = new ArrayList<>();

    public Quiz(String navn, Question[] questions) {
        this.navn = navn;
        this.questions = new ArrayList<>(Arrays.asList(questions));
    }

    public String getNavn() {
        return navn;
    }

    public Question getQuestion(int num) {
        if (num > questions.size()) throw new IllegalArgumentException("Question does not exist");
        return questions.get(num-1);
    }

    public boolean addPlayer(String username) {
        Player p = find(username);
        if (p != null) return false;
        players.add(new Player(username));
        return true;
    }

    public int getPlayerScore(String username) {
        Player p = find(username);
        return (p == null) ? -1 : p.getScore();
    }

    public void addPlayerScore(String username, int score) {
        Player p = find(username);
        if (p != null) p.addScore(score);
    }

    private Player find(String user) {
        for (Player p : players) {
            if (user.equals(p.getUsername())) {
                return p;
            }
        }
        return null;
    }
}

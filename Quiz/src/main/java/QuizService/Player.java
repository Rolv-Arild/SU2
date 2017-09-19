package QuizService;

/**
 * Created by Rolv-Arild on 19.09.2017.
 */
public class Player {
    private String username;
    private int score;

    public Player(String username) {
        this.username = username;
        this.score = 0;
    }

    public int getScore() {
        return score;
    }

    public void addScore(int score) {
        this.score += score;
    }

    public String getUsername() {
        return username;
    }
}
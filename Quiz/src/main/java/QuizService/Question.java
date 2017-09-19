package QuizService;

import java.util.ArrayList;
import java.util.Arrays;

/**
 * Created by Rolv-Arild on 19.09.2017.
 */
public class Question {
    private String question;
    private ArrayList<String> options;
    private int answerIndex;

    public Question(String question, String[] options, int answerIndex) {
        this.options = new ArrayList<>(Arrays.asList(options));
        this.answerIndex = answerIndex;
    }

    public Question(String question, String[] options, String answer) {
        this.options = new ArrayList<>(Arrays.asList(options));
        this.answerIndex = this.options.indexOf(answer);
        if (this.answerIndex < 0) this.options.add(answer);
        this.answerIndex = this.options.size()-1;
    }

    public String getQuestion() {
        return question;
    }

    public String[] getOptions() {
        return (String[]) options.toArray();
    }

    public String getAnswer() {
        return options.get(answerIndex);
    }
}

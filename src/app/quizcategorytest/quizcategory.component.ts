import { Component} from '@angular/core';
import { QuizCategoryService } from './quizcategory.service';

@Component({
    selector: 'quizcatcomp',
    templateUrl: './quizcategory.component.html',
    styleUrls: ['./quizcategory.component.css']
})
export class QuizCategoryComponent {
    getQuestion: string;
    getAnswer: string;
    showAnswer: string;
    getType: string;
    getWrong1: string;
    getWrong2: string;
    getWrong3: string;
    Spot1: string;
    Spot2: string;
    Spot3: string;
    Spot4: string;
    Score: number;
    questionsCompleted: number;
    category: number;
    difficulty: string;

// Note, Booleans are not called, multiple choice only for this test, so can safely call the array of inccorect for 0,1,2
    constructor (private httpService: QuizCategoryService) {}
    onTestGet() {
       this.httpService.getQuiz(this.category, this.difficulty).subscribe(
            data => {
                this.getQuestion = JSON.stringify(data['results'][0]['question']);
                this.getAnswer = (data['results'][0]['correct_answer']);
                this.getType = (data['results'][0]['type']);
                this.getWrong1 = (data['results'][0]['incorrect_answers'][0]);
                this.getWrong2 = (data['results'][0]['incorrect_answers'][1]);
                this.getWrong3 = (data['results'][0]['incorrect_answers'][2]);
                this.showAnswer = '';
                this.Spot1 = 'empty';
                this.Spot2 = 'empty';
                this.Spot3 = 'empty';
                this.Spot4 = 'empty';
                if (isNaN(this.Score)) {
                    this.Score = 0;
                }
                if (isNaN(this.questionsCompleted)) {
                    this.questionsCompleted = 0;
                }

                function getRandomInt(min, max) {
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                }

                let randNumb = 0;
                randNumb = getRandomInt(0, 3);
                if (randNumb === 0) {
                    this.Spot1 = this.getAnswer;
                } else if (randNumb === 1) {
                    this.Spot2 = this.getAnswer;
                } else if (randNumb === 2) {
                    this.Spot3 = this.getAnswer;
                } else if (randNumb === 3) {
                    this.Spot4 = this.getAnswer;
                }
                let i = 0;
                for (i; i <= 2; i++) {
                    if (i === 0) {
                        if (this.Spot1 === 'empty') {
                            this.Spot1 = this.getWrong1;
                        } else if (this.Spot2 === 'empty') {
                            this.Spot2 = this.getWrong1;
                        } else if (this.Spot3 === 'empty') {
                            this.Spot3 = this.getWrong1;
                        } else if (this.Spot4 === 'empty') {
                            this.Spot4 = this.getWrong1;
                        }
                    } else if (i === 1) {
                        if (this.Spot1 === 'empty') {
                            this.Spot1 = this.getWrong2;
                        } else if (this.Spot2 === 'empty') {
                            this.Spot2 = this.getWrong2;
                        } else if (this.Spot3 === 'empty') {
                            this.Spot3 = this.getWrong2;
                        } else if (this.Spot4 === 'empty') {
                            this.Spot4 = this.getWrong2;
                        }
                    }else if (i === 2) {
                        if (this.Spot1 === 'empty') {
                            this.Spot1 = this.getWrong3;
                        } else if (this.Spot2 === 'empty') {
                            this.Spot2 = this.getWrong3;
                        } else if (this.Spot3 === 'empty') {
                            this.Spot3 = this.getWrong3;
                        } else if (this.Spot4 === 'empty') {
                            this.Spot4 = this.getWrong3;
                        }
                    }
                }
            },
            error => alert(error),
                () => console.log('Finished')
        );
    }
    setDifficulty(difficulty: string) {
        this.difficulty = difficulty;
    }

    setCategory(category: number) {
        this.category = category;
    }

    onAnswerclick(spot) {
        if (this.showAnswer === '') {
            if (spot === '1') {
                if (this.getAnswer === this.Spot1) {
                    this.Score += 1;
                }
            } else if (spot === '2') {
                if (this.getAnswer === this.Spot2) {
                    this.Score += 1;
                }
            } else if (spot === '3') {
                if (this.getAnswer === this.Spot3) {
                    this.Score += 1;
                }
            } else if (spot === '4') {
                if (this.getAnswer === this.Spot4) {
                    this.Score += 1;
                }
            }
        }
        this.questionsCompleted += 1;
        this.showAnswer = this.getAnswer;
    }
}
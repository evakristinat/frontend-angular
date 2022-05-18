/*score.service.ts sisältää metodit localstoragen käsittelyyn.
Tämä service otetaan käyttäjän Board -komponetin konstruktorissa
seuravasti: constructor(private scoreService: ScoreService)
*/

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ScoreService {

    scoreobj = { 'X': 0, 'O': 0 }; // huomaa että nollan sijasta avaimena on iso O

    public initScores() {
        localStorage.setItem('scores', JSON.stringify(this.scoreobj));
    }

    public getScores() {
        return JSON.parse(localStorage.getItem('scores'));
    }

    public addScore(winner: string) {
        const scores = this.getScores();
        console.log(winner);
        if (winner === 'X') {
            scores.X++;
        }
        else {
            scores.O++;
        }      
        
        localStorage.setItem('scores', JSON.stringify(scores));
    }

}

class Minotaur_1 extends MovableObject{

    constructor(){
        super(); //ruft variablen und constructor funktionen auf
        this.loadImage('assets/crafties/minotaur/Minotaur_1/PNG/PNG Sequences/Idle/0_Minotaur_Idle_000.png');

        this.x = 300 + Math.random() * 500;
        this.x - 1;
    }
}
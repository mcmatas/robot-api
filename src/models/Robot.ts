import { Terreno } from '../models/Terreno';

export class Robot {
    private x: number;
    private y: number;
    private direction: string;
    private terreno: Terreno;
    
    constructor() {
        this.x = 0;
        this.y = 0;
        this.direction = 'N';
        this.terreno = new Terreno(10, 10);
    }
    
    private setPosition(value: number, max: number): number {
        if (value < 0) {
            return max + (value % max);
        } else {
            return value % max;
        }
    }

    public getPosition(): string {
        return `${this.x}:${this.y}:${this.direction}`;
    }
        
    public processCommands(commands: string) {
        for (const command of commands) {
            if (command === 'L' || command === 'R') {
                this.rotate(command);
            } else if (command === 'M') {
                this.move();
            }
        }
    }

    private move() {
    
        switch (this.direction) {
            case 'N':
                this.y = this.setPosition(this.y + 1, this.terreno.getHeight());
                break;
            case 'S':
                this.y = this.setPosition(this.y - 1, this.terreno.getHeight());
                break;
            case 'E':
                this.x = this.setPosition(this.x + 1, this.terreno.getWidth());
                break;
            case 'W':
                this.x = this.setPosition(this.x - 1, this.terreno.getWidth());
                break;
        }
    }

    private rotate(direction: string) {
        if (direction === 'L') {
            switch (this.direction) {
                case 'N':
                    this.direction = 'W';
                    break;
                case 'S':
                    this.direction = 'E';
                    break;
                case 'E':
                    this.direction = 'N';
                    break;
                case 'W':
                    this.direction = 'S';
                    break;
            }
        } else if (direction === 'R') {
            switch (this.direction) {
                case 'N':
                    this.direction = 'E';
                    break;
                case 'S':
                    this.direction = 'W';
                    break;
                case 'E':
                    this.direction = 'S';
                    break;
                case 'W':
                    this.direction = 'N';
                    break;
            }
        }
    }
}
  
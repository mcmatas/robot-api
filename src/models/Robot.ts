export class Robot {
    private x: number;
    private y: number;
    private direction: string;
  
    constructor() {
      this.x = 0;
      this.y = 0;
      this.direction = 'N';
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
        let newX = this.x;
        let newY = this.y;
    
        switch (this.direction) {
          case 'N':
            newY++;
            break;
          case 'S':
            newY--;
            break;
          case 'E':
            newX++;
            break;
          case 'W':
            newX--;
            break;
          default:
            throw new Error('Invalid direction');
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
            default:
                throw new Error('Invalid direction');
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
                default:
                throw new Error('Invalid direction');
            }
        }
    }
  
    public getPosition(): string {
      return `${this.x}:${this.y}:${this.direction}`;
    }

}
  
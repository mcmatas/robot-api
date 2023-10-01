export class Terreno {
    private width: number;
    private height: number;
  
    constructor(width: number = 10, height: number = 10) {
      this.width = width;
      this.height = height;
    }
  
    getWidth(): number {
      return this.width;
    }
  
    getHeight(): number {
      return this.height;
    }
}
  
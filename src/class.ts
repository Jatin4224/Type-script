class player {
  private height;
  weight;

  constructor(height: number, weight: number) {
    this.height = height;
    this.weight = weight;
  }

  myHeight = () => {
    this.height;
  };
}

const abhi = new player(3, 30);

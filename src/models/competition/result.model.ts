export class CompetitorResult {
  points: number[];
  total: number;

  constructor(points: number[]) {
    this.points = points
    this.total = 0
    points.forEach(point => { this.total += point })
  }

  static fromLength(length: number): CompetitorResult {
    const array = []
    for (let i = 0; i < length; i++) {
      array.push(0)
    }
    return new CompetitorResult(array)
  }
}


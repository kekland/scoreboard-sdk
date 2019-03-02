
export class Name {
  first: string;

  middle?: string;

  last: string;

  constructor(first: string, last: string, middle?: string) {
    this.first = first
    this.last = last
    this.middle = middle
  }
}


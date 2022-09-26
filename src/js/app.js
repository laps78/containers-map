// TODO: write your code here
export default class ErrorRepository {
  constructor() {
    this.errMap = new Map();
  }

  set(code, description) {
    this.errMap.set(code, description);
  }

  translate(code) {
    let result;
    if (this.errMap.has(code)) {
      result = this.errMap.get(code);
    } else {
      result = 'Unknown error';
    }
    return result;
  }
}

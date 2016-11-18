import Frequency from './frequency.js';

export default class Habit {
    constructor(description, frequency, reason){
      this.description = description || ""
      this.frequency = frequency || new Frequency()
      this.reason = reason;
    }
}

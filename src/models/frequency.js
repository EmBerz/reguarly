export default class Frequency {
  constructor(amount, unit){
    console.log('here')
    this.amount = amount || null;
    this.unit = unit || null;
  }

  getDescription() {
    return this.perString() + " " + this.unit
  }
  perString(){
    let perString;
    switch(this.amount){
      case 1:
        perString = ' once per ';
        break;
      case 2:
        perString = ' twice per ';
      default:
        perString = this.amount + " times per "
    }

    return perString;
  }
}

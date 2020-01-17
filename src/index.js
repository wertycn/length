// import { Unit } from './unit'

export class Length {
  value
  unit
  Yard = 'yard';
  Foot = 'f';
  Inch = 'inch';
  constructor(value, unit) {
    this.value = value
    this.unit = unit
  }

  getValue() {
    return this.value
  }

  getUnit() {
    return this.unit
  }

  parseTo(targetUnit) {
    let result = this

    if (this.unit === this.Yard) {
      if (targetUnit === this.Foot) {
        result = new Length(this.value * 3, targetUnit)
      } else if (targetUnit === this.Inch) {
        result = new Length(this.value * 36, targetUnit)
      }
    }

    if (this.unit === this.Inch) {
      if (targetUnit === this.Yard) {
        result = new Length(this.value / 36, targetUnit)
      } else if (targetUnit === this.Foot) {
        result = new Length(this.value / 12, targetUnit)
      }
    }

    if (this.unit === this.Foot) {
      if (targetUnit === this.Yard) {
        result = new Length(this.value / 3, targetUnit)
      } else if (targetUnit === this.Inch) {
        result = new Length(this.value * 12, targetUnit)
      }
    }

    return result
  }
}

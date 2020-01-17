import { Unit } from './unit'

export class Length {
  value
  unit
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

    if (this.unit === Unit.Yard) {
      if (targetUnit === Unit.Foot) {
        result = new Length(this.value * 3, targetUnit)
      } else if (targetUnit === Unit.Inch) {
        result = new Length(this.value * 36, targetUnit)
      }
    }

    if (this.unit === Unit.Inch) {
      if (targetUnit === Unit.Yard) {
        result = new Length(this.value / 36, targetUnit)
      } else if (targetUnit === Unit.Foot) {
        result = new Length(this.value / 12, targetUnit)
      }
    }

    if (this.unit === Unit.Foot) {
      if (targetUnit === Unit.Yard) {
        result = new Length(this.value / 3, targetUnit)
      } else if (targetUnit === Unit.Inch) {
        result = new Length(this.value * 12, targetUnit)
      }
    }

    return result
  }
}

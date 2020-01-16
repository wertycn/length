export class Length {
  value
  unit

  constructor(val, uint) {
    this.value = val
    this.unit = uint
  }

  getVal() {
    return this.value
  }

  getUint() {
    return this.unit
  }

  conversionTo(targetUnit) {
    let value = this
    if (this.unit === 'yard') {
      if (targetUnit === 'f') {
        value = new Length(this.value * 3, targetUnit)
      } else if (targetUnit === 'inch') {
        value = new Length(this.value * 36, targetUnit)
      }
    }

    if (this.unit === 'inch') {
      if (targetUnit === 'yard') {
        value = new Length(this.value / 36, targetUnit)
      } else if (targetUnit === 'f') {
        value = new Length(this.value / 12, targetUnit)
      }
    }

    if (this.unit === 'f') {
      if (targetUnit === 'yard') {
        value = new Length(this.value / 3, targetUnit)
      } else if (targetUnit === 'inch') {
        value = new Length(this.value * 12, targetUnit)
      }
    }

    return value
  }
}

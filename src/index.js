export class Length {
  value
  unit
  static YARD = "yard"
  static FOOT = "f"
  static INCH = "inch"
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

  parseTo(u) {
    let len = this
    if (this.unit === Length.YARD) {
      if (u === Length.FOOT) {
        len = new Length(this.value * 3, u)
      } else if (u === Length.INCH) {
        len = new Length(this.value * 36, u)
      }
    }

    if (this.unit === Length.INCH) {
      if (u === Length.YARD) {
        len = new Length(this.value / 36, u)
      } else if (u === Length.FOOT) {
        len = new Length(this.value / 12, u)
      }
    }

    if (this.unit === Length.FOOT) {
      if (u === Length.YARD) {
        len = new Length(this.value / 3, u)
      } else if (u === Length.INCH) {
        len = new Length(this.value * 12, u)
      }
    }

    return len
  }
}

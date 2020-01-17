import { Length } from './index'
import {Unit} from "./unit"

describe('Length', () => {
  it("should 1 'foot' equals 1 'foot'", () => {
    const length = new Length(1, Unit.Foot)

    expect(length.getValue()).toEqual(1)
    expect(length.getUnit()).toEqual(Unit.Foot)
  })

  it("should 1 'foot' equals 12 inches", () => {
    const result = new Length(1, Unit.Foot).parseTo(Unit.Inch)

    expect(result.getValue()).toEqual(12)
    expect(result.getUnit()).toEqual(Unit.Inch)
  })

  it("should 3 feet equals 1 'yard'", () => {
    const result = new Length(3, Unit.Foot).parseTo(Unit.Yard)

    expect(result.getValue()).toEqual(1)
    expect(result.getUnit()).toEqual(Unit.Yard)
  })

  it("should 1 'yard' equals 3 feet", () => {
    const result = new Length(1, Unit.Yard).parseTo(Unit.Foot)

    expect(result.getValue()).toEqual(3)
    expect(result.getUnit()).toEqual(Unit.Foot)
  })

  it("should 1 'yard' equals 36 inches", () => {
    const result = new Length(1, Unit.Yard).parseTo(Unit.Inch)

    expect(result.getValue()).toEqual(36)
    expect(result.getUnit()).toEqual(Unit.Inch)
  })

  it("should 1 'yard' equals 1 'yard'", () => {
    const result = new Length(1, Unit.Yard).parseTo(Unit.Yard)

    expect(result.getValue()).toEqual(1)
    expect(result.getUnit()).toEqual(Unit.Yard)
  })

  it("should 12 inches equals 1 'foot'", () => {
    const result = new Length(12, Unit.Inch).parseTo(Unit.Foot)

    expect(result.getValue()).toEqual(1)
    expect(result.getUnit()).toEqual(Unit.Foot)
  })

  it("should 36 inches equals 1 'yard'", () => {
    const result = new Length(36, Unit.Inch).parseTo(Unit.Yard)

    expect(result.getValue()).toEqual(1)
    expect(result.getUnit()).toEqual(Unit.Yard)
  })

  it("should 1 inch equals 1 'inch'", () => {
    const result = new Length(1, Unit.Inch).parseTo(Unit.Inch)

    expect(result.getValue()).toEqual(1)
    expect(result.getUnit()).toEqual(Unit.Inch)
  })
})

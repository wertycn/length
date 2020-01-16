import { Length } from './index'

describe('Length', () => {
  it("should 1 'foot' equals 1 'foot'", () => {
    const length = new Length(1, 'f')

    expect(length.getVal()).toEqual(1)
    expect(length.getUint()).toEqual('f')
  })

  it("should 1 'foot' equals 12 inches", () => {
    const result = new Length(1, 'f').conversionTo('inch')

    expect(result.getVal()).toEqual(12)
    expect(result.getUint()).toEqual('inch')
  })

  it("should 3 feet equals 1 'yard'", () => {
    const result = new Length(3, 'f').conversionTo('yard')

    expect(result.getVal()).toEqual(1)
    expect(result.getUint()).toEqual('yard')
  })

  it("should 1 'yard' equals 3 feet", () => {
    const result = new Length(1, 'yard').conversionTo('f')

    expect(result.getVal()).toEqual(3)
    expect(result.getUint()).toEqual('f')
  })

  it("should 1 'yard' equals 36 inches", () => {
    const result = new Length(1, 'yard').conversionTo('inch')

    expect(result.getVal()).toEqual(36)
    expect(result.getUint()).toEqual('inch')
  })

  it("should 1 'yard' equals 1 'yard'", () => {
    const result = new Length(1, 'yard').conversionTo('yard')

    expect(result.getVal()).toEqual(1)
    expect(result.getUint()).toEqual('yard')
  })

  it("should 12 inches equals 1 'foot'", () => {
    const result = new Length(12, 'inch').conversionTo('f')

    expect(result.getVal()).toEqual(1)
    expect(result.getUint()).toEqual('f')
  })

  it("should 36 inches equals 1 'yard'", () => {
    const result = new Length(36, 'inch').conversionTo('yard')

    expect(result.getVal()).toEqual(1)
    expect(result.getUint()).toEqual('yard')
  })

  it("should 1 inch equals 1 'inch'", () => {
    const result = new Length(1, 'inch').conversionTo('inch')

    expect(result.getVal()).toEqual(1)
    expect(result.getUint()).toEqual('inch')
  })
})

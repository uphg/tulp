export default (value: unknown, name: string) => Object.prototype.toString.call(value) === `object ${name}`

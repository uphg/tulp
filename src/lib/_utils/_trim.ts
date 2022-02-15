const trim = (string: string) => {
  return String.prototype.trim.call(string)
}

export default trim
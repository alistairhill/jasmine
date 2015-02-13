window.Calculator = {
  current: 0,
  add: function() {
    var sum = this.current
    for (var i = 0, len = arguments.length; i < len; i++) {
      sum += arguments[i]
    }
    this.current = sum
    return sum
  },
  subtract: function() {
    var sum = this.current
    for (var i = 0, len = arguments.length; i <len; i++) {
      sum -= arguments[i]
    }
    this.current = sum
    return sum
  },
  reset: function() {
    return this.current = 0
  }
}
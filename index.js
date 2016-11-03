function takeANumber(katzDeliLine, new_person) {
  katzDeliLine.push(new_person)
  return `Welcome, ${new_person}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var first_person = katzDeliLine.shift()
    return `Currently serving ${first_person}.`
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var array = []
    for (var p = 0; p < line.length; p++) {
      array.push(` ${p+1}. ${line[p]}`)
    }
    return `The line is currently:` + array
  }

}

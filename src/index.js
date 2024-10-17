module.exports = function toReadable (number) {
  let units = ['','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 
                'sixteen', 'seventeen', 'eighteen', 'nineteen']
                
  let tens = ['', '','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'] 

  let other = ['hundred', 'thousand', 'million']
  
  function getUnits(u) {
    return units[u]
  }
  function getTens(t) {
    return tens[t]
  }

  if (number < 20 && number > 0) {
    return getUnits(number)
  } else if(number > 19 &&  number < 100) {
    return `${getTens(~~(number/10))} ${getUnits(number%10)}`.trim()
  } else if(number > 99 && number < 1000) {
    let h = `${getUnits(~~(number/100))} hundred`
    let t = number % 100 < 20 ? `${units[number%100]}` : `${getTens(~~(number % 100 / 10))} ${getUnits(number%10).trim()}`.trim()
    return `${h} ${t}`.trim()
  } else if(number === 0) {
    return 'zero'
  }
}


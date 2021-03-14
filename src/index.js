
exports.min = function min (array) {
  if (array) {
    if (array.length > 0) {
      return Math.min(...array);    
    }
    return 0;  
  }
  return 0;
}

exports.max = function max (array) {
  if (array) {
    if (array.length > 0) {
      return Math.max(...array);
    }
    return 0;
  }
  return 0;
}

exports.avg = function avg (array) {
  if (array) {
    if (array.length > 0) {          
      const result = array.reduce((a, b) => a + b) / (array.length);
      return result;
    } 
    return 0;
  }
  return 0;
}

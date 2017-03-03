// Exercise

function findWhere(array, criteria) {
  return array.find(function(item) {
    var keyName = Object.keys(criteria)[0];
    return item[keyName] === criteria[keyName];
  })
}
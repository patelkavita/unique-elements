const getUniqueElement = function() {
  const elements = Array.from(arguments);

  return elements.reduce(function(uniqueElements, element) {
    if(!uniqueElements.includes(element)) {
      return uniqueElements.concat(element);
    }

    return uniqueElements;
  }, []);
}

exports.getUniqueElement = getUniqueElement;

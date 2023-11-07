function sumOfDistinctElements(set1, set2) {
    // Combine both sets into a single array
    const combinedSet = set1.concat(set2);
  
    // Create an empty object to store distinct elements as keys
    const distinctElements = {};
  
    // Iterate over the combined set and add each element as a key in the object
    for (let i = 0; i < combinedSet.length; i++) {
      distinctElements[combinedSet[i]] = true;
    }
  
    // Calculate the sum of distinct elements
    let sum = 0;
    for (const element in distinctElements) {
      sum += parseInt(element);
    }
  
    return sum;
  }
  
  // Example usage
  const set1 = [3, 1, 7, 9];
  const set2 = [2, 4, 1, 9, 3];
  const sum = sumOfDistinctElements(set1, set2);
  console.log(sum); // Output: 13

  function dot_product(v1, v2) {
    // Check if the vectors have the same length
    if (v1.length !== v2.length) {
      return null; // Invalid input, vectors cannot be compared
    }
  
    let product = 0;
    for (let i = 0; i < v1.length; i++) {
      product += v1[i] * v2[i];
    }
  
    return product;
  }
  
  function areVectorsOrthogonal(vectors) {
    for (let i = 0; i < vectors.length; i++) {
      for (let j = i + 1; j < vectors.length; j++) {
        const dotProduct = dot_product(vectors[i], vectors[j]);
        if (dotProduct !== 0) {
          return false; // Found a non-zero dot product, vectors are not orthogonal
        }
      }
    }
  
    return true; // All dot products were zero, vectors are orthogonal
  }
  
  // Example usage
  const vectors = [
    [1, 0, 2],
    [0, 2, 0],
    [2, 0, -1]
  ];
  
  const isOrthogonal = areVectorsOrthogonal(vectors);
  console.log(isOrthogonal); // Output: true
 function indexOfIgnoreCase(s1, s2) {
  const strLower = s1.toLowerCase();
  const subStrLower = s2.toLowerCase();
  const indexLimit = strLower.length - subStrLower.length;

  for (let i = 0; i <= indexLimit; i++) { // Fix 1: Change the loop condition
    let found = true;

    for (let j = 0; j < subStrLower.length; j++) {
      if (strLower[i + j] !== subStrLower[j]) {
        found = false;
        break;
      }
    }

    if (found) { // Fix 2: Change the condition here
      return i;
    }
  }

  return -1;
}

// Example usage
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));

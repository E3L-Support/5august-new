// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Convert to lowercase and remove non-alphanumeric characters
    str = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
    // Compare the string with its reverse
    return str === str.split('').reverse().join('');
}

// Example usage
console.log(isPalindrome('A man, a plan, a canal, Panama')); // true
console.log(isPalindrome('hello')); // false

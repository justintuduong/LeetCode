// Given a valid (IPv4) IP address, return a defanged version of that IP address. 1108

// A defanged IP address replaces every period "." with "[.]".

// Example 1:
// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"

// Example 2:
// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"
 
// Constraints:

// The given address is a valid IPv4 address.

function defangIPAddress(address) {
    let result = address[0];
    for (let i = 1; i < address.length; i++) {
        if (address[i] !== ".") {
            result+=address[i];
        } else {
            result+="[.]";
        }
    }
    return result;
};

console.log(defangIPAddress("1.1.1.1"));
console.log(defangIPAddress("255.100.50.0"));

function firstNonRepeatedChar(str) {
 // Write your code here
	let obj={};
	for(let i=0;i<str.length;i++){
		const char = str[i];
	    if (char in obj) {
		    obj[char] += 1;
	    } 
		else {
			obj[char] = 1;
	    }
	}
	for (let i = 0; i < str.length; i++) {
		if(obj[str[i]]==1){
			return str[i];
		}
	}
	return "null";
}
firstNonRepeatedChar("aabbcdd");
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 


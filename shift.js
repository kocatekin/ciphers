function shift(text, key) {
	alp_arr = "abcdefghijklmnopqrstuvwxyz".split("");
	key_index = alp_arr.indexOf(key); //get the idx of the key
	//we will shift each letter by the idx of key
	out = [];
	for(let i=0;i<text.length;i++) {
		out.push(alp_arr[(alp_arr.indexOf(text[i]) + key_index) % 26]);
	}
	return out.join("");
}

text = "caesar";
key = "p";
console.log(shift(text,key));

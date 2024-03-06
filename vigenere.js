function vigenere(text,key) {
	alp_arr = "abcdefghijklmnopqrstuvwxyz".split("");
	//we need to check whether the key is shorter than text
	//if so, we need to make it longer so that it has the same length
	new_key = "";
	if(key.length < text.length) {
		for(let i=0;i<text.length;i++) {
			new_key += key[i % key.length];
		}
	}
	else {
		new_key = key.substring(0,text.length);
	}
	console.log(`key is ${new_key}`); //works
	//now we have the new_key and text
	//for every char, we are going to call shift cipher
	vigout = [];
	for(let i=0;i<text.length;i++) {
		idx = alp_arr.indexOf(text[i]);
		vigout.push(shift(text[i],new_key[i]));
	}
	return vigout.join("");
}


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

text = "attackatdawn";
key = "lemon";
console.log(vigenere(text,key));

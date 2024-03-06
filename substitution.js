function subs(text,key) {

alp_arr = "abcdefghijklmnopqrstuvwxyz".split("");
key_arr = key.split("");
//console.log(alp_arr, key_arr);
out = [];
for(let i=0;i<text.length;i++) {
	idx = alp_arr.indexOf(text[i]);
	out.push(key_arr[idx]);
}
  return out.join("");
}

text = "substitution";
key = "kmjzpbodtsgviywlxncqarfeuh";
console.log(subs(text,key));

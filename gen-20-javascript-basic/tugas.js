// no 1
function hitungLuasPersegi(s) {
  return s * s;
}
let s = 5;
let luasPersegi = hitungLuasPersegi(s);
console.log(`1. luas persegi dengan sisi = ${s} adalah ${luasPersegi}`);

console.log();

// no 2
const hitungLuasSegitiga = function (a, t) {
  return (a * t) / 2;
};
let a = 10;
let t = 3;
let luasSegitiga = hitungLuasSegitiga(a, t);
console.log(
  `2. luas segitiga dengan alas = ${a} dan tinggi = ${t} adalah ${luasSegitiga}`
);

console.log();

// no 3
function hitungLuasJajarGenjang(a, t) {
  return a * t;
}

a = 5;
t = 4;
let luasJajarGenjang = hitungLuasJajarGenjang(a, t);
console.log(
  `3. luas jajar genjang dengan alas = ${a} dan tinggi = ${t} adalah ${luasJajarGenjang}`
);
console.log();

// no 4
const hitungLuasPersegiPanjang = (p, l) => p * l;
let p = 15;
let l = 5;
let luasPersegiPanjang = hitungLuasPersegiPanjang(p, l);
console.log(
  `4. luas persegi panjang dengan panjang = ${p} dan lebar = ${l} adalah ${luasPersegiPanjang}`
);

console.log();

// no 5
function hitungLuasLingkarang(r) {
  const phi = Math.PI;
  return phi * r * r;
}
let r = 14;
let luasLingkaran = hitungLuasLingkarang(r);
console.log(
  `5. luas lingkaran dengan jari-jari = ${r} adalah ${Math.ceil(luasLingkaran)}`
);

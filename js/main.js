// 정규 표현식

let str = `
010-5605-2258
dpldpl123456@naver.com
dpldpl12345@naver.com
The quick brown fox jumps over the lazy dog.
theabbcccdddd
동해물과 백두산이 마르고 닳도록
`;
// const regexp = new RegExp("the", "gi");
const regexp = /fox/gi;
const regexp2 = /KitsuNeko/gi;
console.log(regexp.test(str));
console.log(regexp2.test(str));

console.log(str.replace(regexp, "AAA"));
// str = str.replace(regexp, "AAA");
console.log(str);

const regexp3 = /the/gi;
console.log(str.match(regexp3));

const regexp4 = /\.$/gim;
console.log(str.match(regexp4));

console.log(str.match(/d$/gm));
console.log(str.match(/^t/gim));
console.log(str.match(/./g));
console.log(str.match(/d.l/g));
console.log(str.match(/q...k/g));
console.log(str.match(/fox|dog/g));
console.log(str.match(/dpldpl123456?/g));
console.log(str.match(/d{2}/g));
console.log(str.match(/d{2,}/g));
console.log(str.match(/d{2,3}/g));
console.log(str.match(/\w{2,3}/g));
console.log(str.match(/\b\w{2,3}\b/g));
console.log(str.match(/[fox]/g));
console.log(str.match(/[0-9]{1,}/g));
console.log(str.match(/[가-힣]{1}/g));
console.log(str.match(/\w/g));
console.log(str.match(/\b/g));
console.log(str.match(/\bf\w{1,}\b/g));
console.log(str.match(/\d{1,}/g));
console.log(str.match(/\s/g));

const h = `  the hello  world   !

`;

console.log(h.replace(/\s/g, ""));

console.log(str.match(/.{1,}(?=@)/g));
console.log(str.match(/(?<=@).{1,}/g));

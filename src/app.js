console.log("merhaba kodlama")

var dolarDun= 9.20
var dolanBugun=9.30

const euroDun=11.2
// euroDun=11  böyle birşey yapamıyoruz

//array isimlendirirken çoğul isimlendiriyoruz
//camelCasing(ilk kelimenin hrfi küçük 2.büyük)
//PascalCasing(kelimelerin baş harfi büyük)

let konutKredileri= [
    "Konut kredisi",
    "Emlak konut kredisi",
    "Kamu konut kredisi"
]
console.log(konutKredileri)

//konutkredilerinin sayısı kadar döndür
for(let i=0; i<konutKredileri.length; i++){
    //sonra her bir elemanını listele
    console.log("<li>"+konutKredileri[i]+"</li>")
}


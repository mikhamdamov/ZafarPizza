let nonY = document.querySelector(".yupqa");
let nonQ = document.querySelector(".qalin");
let colbasa = document.querySelector(".colbasaa");
let colbasaa = document.querySelector(".yo");
let colbasas = document.querySelector(".colbasas");
let mo = document.querySelector(".mo");
let ket = document.querySelector(".ket");
let sirr = document.querySelector(".sirr");
let z = document.querySelector(".z");
let y = document.querySelector(".y");
let zaytun = document.querySelector(".zaytun");
let q = document.querySelector(".q");
let sir = document.querySelector(".sir");
let h1 = document.querySelector(".total");
let total = +h1.innerHTML
let aler = document.querySelector('.aler')

nonY.addEventListener("click", () => {
    let a = (h1.innerHTML = +h1.innerHTML + 1 );
    // h1.innerHTML = a = a + 1
});
mo.addEventListener("click", () => {
    let a = (h1.innerHTML = +h1.innerHTML + 2 );
    // h1.innerHTML = a = a + 1
});
aler.addEventListener("click", () => {
   alert('Xaridingiz uchun rahmat')
    // h1.innerHTML = a = a + 1
});
ket.addEventListener("click", () => {
  let a = (h1.innerHTML = +h1.innerHTML + 2);
  // h1.innerHTML = a = a + 1
});
sirr.addEventListener("click", () => {
  let a = (h1.innerHTML = +h1.innerHTML + 2);
  // h1.innerHTML = a = a + 1
});
z.addEventListener("click", () => {
  let a = (h1.innerHTML = +h1.innerHTML + 5);
  // h1.innerHTML = a = a + 1
});
nonQ.addEventListener("click", () => {
    h1.innerHTML = total + 2;
});

colbasa.addEventListener("click", () => {
    let b = (h1.innerHTML = +h1.innerHTML+2 );
//   h1.innerHTML = b = a +1;
});
colbasaa.addEventListener("click", () => {
   colbasas.classList.add('none')
});
y.addEventListener("click", () => {
   zaytun.classList.add('none')
});
q.addEventListener("click", () => {
   sir.classList.add("none");
});

// h1.addEventListener("click", () => {
//        console.log(123);
// });

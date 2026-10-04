// console.log(document.title);
// console.log(document.head);
// console.log(document.body);

// getElementByTagName

// const myH1 = document.getElementsByTagName("h1");
// console.log(myH1.length);

// const id = document.getElementById("id-1");
// console.log(id);

// const cls = document.getElementsByClassName("cls-1");
// console.log(cls);

// const qs = document.querySelectorAll(".cls");
// console.log(qs);

// const ali = document.querySelectorAll("li");
// console.log(ali);

// const akagami = document.getElementsByTagName("h4");
// console.log(akagami);

// const g = document.getElementsByClassName("green");
// console.log(g);

// const b = document.getElementById("blue");

// console.log(b);

// const y = document.querySelector("#yello");
// console.log(y);

// const at = document.querySelectorAll(".teal");

// console.log(at);

// const p = document.querySelector("p");
// console.log(p.innerText);
// console.log(p.textContent);
// console.log(p.innerHTML);

// const h1 = document.querySelector("h1");
// h1.innerText = "Heeee Haaaaaaw"
// h1.innerHTML = "<del>hello</del>"
// console.log(h1);

// const p1 = document.querySelector(".p1");
// // console.log(p1.innerText);
// const p2 = document.querySelector("#p2");
// // console.log(p2.textContent);

// const p3 = document.querySelector(".p3");
// console.log(p3.innerHTML);

// const h1 = document.querySelector("h1");
// h1.classList.add("styles");
// h1.classList.add("five");
// h1.classList.remove("styles");
// h1.classList.remove("five");
// h1.classList.toggle("styles");
// h1.classList.toggle("five");
// h1.classList.toggle("styles");
// h1.classList.toggle("five");
// console.log(h1.classList);

// const a = document.querySelector("a");
// a.href = "https://www.youtube.com/@meow-codes201";
// a.target = "_blank";
// console.log(a.href);
// const input = document.querySelector("input");
// input.value = "hellllo";
// input.type = "password";

// console.log(input.type);

// console.log(input.getAttribute("value"));
// input.value = "";
// input.setAttribute("placeholder", "Enter strong password");

// const a = document.querySelector("a");
// const hhref = a.getAttribute("href");
// console.log(hhref);

// const a2 = document.querySelector(".a-2");

// a2.setAttribute("href","https://www.youtube.com/@meow-codes201")
// console.log(a2.href);

// const ul = document.querySelector("ul");
// const li = document.querySelector("li");
// const fo = document.querySelector(".fo");
// console.log(li.parentElement.parentElement.parentElement.parentElement);

// console.log((ul.children[0].innerText = "one"));
// console.log(ul.children[4]);

// let fli = document.querySelector("li");
// console.log(fli.textContent);
// console.log(fli.nextElementSibling.textContent);
// console.log(fli.nextElementSibling.nextElementSibling.textContent);
// console.log(fli.nextElementSibling.nextElementSibling.nextElementSibling.textContent);
// console.log(fli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent);
// console.log(fli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent);

// let fo = document.querySelector(".fo");
// console.log(fo.textContent);
// console.log(fo.previousElementSibling.textContent);
// console.log(fo.previousElementSibling.previousElementSibling.textContent);
// console.log(fo.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
// console.log(fo.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent);

// style in JS
// const h1 = document.querySelector("h1");
// console.log(h1.style);
// h1.style.color = "teal";
// h1.style.backgroundColor = "lightpink";

// const ctr = document.querySelector(".ctr");
// const main = document.querySelector(".main");
// const sub = document.querySelector(".sub");
// const btn = document.querySelector(".btn");

// ctr.style.height = "400px";

// ctr.style.backgroundColor = "teal";
// main.style.color = "skyblue";
// sub.style.fontFamily = "sans-serif";
// sub.style.color = "white";
// btn.style.color = "pink";

// const h1 = document.createElement("h1");
// const body = document.body;
// h1.textContent = "Hello World";
// h1.classList.add("head");
// h1.style.color = "forestgreen";
// body.appendChild(h1);

// console.log(h1.classList);

// const ul = document.createElement("ul");
// const newLi = document.createElement("li");
// newLi.innerText = "Li Lo Ve Yo";
// ul.appendChild(newLi);
// const lii = document.createElement("li");
// lii.innerText = "xoxo";
// ul.insertBefore(newLi, lii);

// const ul = document.querySelector("ul");
// const newLi = document.createElement("li");
// newLi.innerText = "Hello";
// ul.insertBefore();
// ul.appendChild(newLi);
// const faLi = document.querySelector("li");

// ul.insertBefore( newLi,faLi);

// const p = document.querySelector("p");
// const i = document.createElement("i");
// i.innerText = "italic";
// p.insertAdjacentElement("beforeend", i);
// p.insertAdjacentElement("beforebegin", i);
// p.insertAdjacentElement("afterbegin", i);
// p.insertAdjacentElement("afterend", i);

// append
// prepend
// const s = document.querySelector("section");

// const i = document.createElement("i");
// i.innerText = "HEYYYYY";
// const sp = document.createElement("span");
// sp.innerText = "Haoao";
// s.append(i, sp);
// s.prepend(i, sp);

// s.removeChild(i);
// s.remove()

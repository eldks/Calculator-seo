// document.body.innerHTML = "";
// let name = "이서연";
// const age = 18;

function printf(contents) {
  document.body.innerHTML += contents;
  document.body.innerHTML += "<br>";
}
// printf(name);
// printf(age);
// printf(typeof name);
// printf(typeof age);
// printf

// name = [
//   "이서연",
//   "한건호",
//   "김효진",
//   "송가은",
//   "이지호",
//   "윤지영",
//   "최윤하"];

// document.body.innerHTML += "<br>";
// for (let i = 0; i < name.length; i++) {
//   if (i % 2 === 1) {
//     printf(name[i]);
//   }
// }

const input = document.getElementById("input");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const x = document.getElementById("x");
const divide = document.getElementById("divide");
const result = document.getElementById("result");
const ol = document.getElementById("ol");

let list = [];

plus.onclick = function() {
  list.push(input.value);
  list.push("+");
  input.value = "";
};
minus.onclick = function() {
  list.push(input.value);
  list.push("-");
  input.value = "";
};
x.onclick = function() {
  list.push(input.value);
  list.push("*");
  input.value = "";
};
divide.onclick = function() {
  list.push(input.value);
  list.push("%");
  input.value = "";
};

result.onclick = function() {
  list.push(input.value);
  let result = "<li>" + list[0] + list[1] + list[2] + " = ";
  if (list[1] == "+") {
    result += Number(list[0]) + Number(list[2]);
  } else if (list[1] == "-") {
    result += Number(list[0]) - Number(list[2]);
  } else if (list[1] == "*") {
    result += Number(list[0]) * Number(list[2]);
  } else if (list[1] == "%") {
    result += Number(list[0]) % Number(list[2]);
  }
  ol.innerHTML += result + "</li>";
  list = [];
};

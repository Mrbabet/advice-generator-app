const url = "https://api.adviceslip.com/advice";
const advice = document.querySelector(".advice");
const callApiBtn = document.querySelector(".call-api");
advice.textContent = "";
const fetchData = async function () {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const loadData = async function () {
  const value = await fetchData().catch((err) => handle(err));
  advice.textContent = value.slip.advice;
};
loadData();

callApiBtn.addEventListener("click", loadData);

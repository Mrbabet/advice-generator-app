const url = "https://api.adviceslip.com/advice";
const advice = document.querySelector(".advice");
const callApiBtn = document.querySelector(".call-api");
advice.textContent = "";
const fetchData = async function () {
  const response = await fetch(url);
  const data = await response.json();
  if (!response.ok) {
    switch (response.status) {
      case 400:
        console.log("error 400");
        break;
      case 401:
        console.log("error 401");
        break;
      case 404:
        console.log("error 404");
        break;
      case 500:
        console.log("error 500");
        break;
    }
  }
  return data;
};

const loadData = async function () {
  const value = await fetchData();
  advice.textContent = value.slip.advice;
};
loadData();

callApiBtn.addEventListener("click", loadData);

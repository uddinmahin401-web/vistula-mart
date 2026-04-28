let basket = [];

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const basketCount = document.getElementById("basketCount");
const buyNowBtn = document.getElementById("buyNowBtn");
const categoryList = document.getElementById("categoryList");

searchBtn.addEventListener("click", () => {
  if (searchInput.value.trim() === "") return;
  console.log(searchInput.value);
});

searchInput.addEventListener("keydown", e => {
  if (e.key === "Enter") searchBtn.click();
});

buyNowBtn.addEventListener("click", () => {
  basket.push("Plant-based cheese");
  basketCount.textContent = basket.length;
});

categoryList.addEventListener("click", e => {
  if (e.target.tagName === "LI") {
    document.querySelectorAll("#categoryList li").forEach(li => li.classList.remove("active"));
    e.target.classList.add("active");
  }
});

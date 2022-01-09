const gallery = document.querySelector(".gallery");
const searchBtn = document.querySelector("button");
const searchInput = document.querySelector('[type="text"]');

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  searchPics(searchInput.value);
});

function searchPics(e) {
  const query = e.replace(" ", "+");
  console.log(query);
  fetch(`https://pixabay.com/api/?key=25104926-a59023414a51cd57f14644fee&q=${query}&image_type=photo&pretty=true`)
    .then((e) => e.json())
    .then((e) => {
      console.log(e);
      for (let i = 0; i < e.hits.length; i++) {
        gallery.innerHTML += `<div class="pic">
            <img src="${e.hits[i].largeImageURL}">
            <p>Tags: ${e.hits[i].tags}</p>
        </div>`;
      }
    });
}

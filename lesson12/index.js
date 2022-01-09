const gallery = document.querySelector(".gallery");
const searchBtn = document.querySelector("button");
const searchInput = document.querySelector('[type="text"]');
const pagination = document.querySelector(".pagination");
let perPage = 10;

searchBtn.disabled = true;
searchInput.addEventListener("input", () => {
  searchBtn.disabled = !searchInput.value;
});

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  searchPics(1, searchInput.value);
});

function searchPics(page = 1, searchQuery) {
  gallery.innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Loader.gif/600px-Loader.gif'>";
  pagination.innerHTML = "";
  const tempSearch = searchQuery.replace(/\s+/g, "+");
  fetch(`https://pixabay.com/api/?key=25104926-a59023414a51cd57f14644fee&q=${tempSearch}&image_type=photo&pretty=true&per_page=${perPage}&page=${page}`)
    .then((e) => e.json())
    .then((e) => {
      let html = "";
      let ogjTags = {};
      for (let i = 0; i < e.hits.length; i++) {
        html += `
        <div class="pic">
            <img src="${e.hits[i].largeImageURL}">
            <p>Tags: ${e.hits[i].tags}</p>
        </div>`;
        let tags = e.hits[i].tags;
        let tagsArr = tags.replace(/\,/g, "").split(" ");
        // норкомания ?
        tagsArr.forEach((element) => {
          if (`${element}` in ogjTags) {
            ogjTags[`${element}`] = ogjTags[`${element}`] + 1;
          } else {
            ogjTags[`${element}`] = 1;
          }
        });
      }
      // Меняем заголовок страницы на самое повторяющееся слово среди тэгов
      document.title = maxObjectElement(ogjTags);
      gallery.innerHTML = html;

      const pagesCount = Math.round(e.totalHits / perPage);
      if (pagesCount < 1) {
        pagination.innerHTML = "<a>0</a>";
      } else {
        generateHREF(1, tempSearch, pagination);
        if (page < 4) {
          for (let i = 2; i < 6 && i < pagesCount; i++) {
            generateHREF(i, tempSearch, pagination);
          }
          generateHREF("...", tempSearch, pagination);
        }
        if (page >= 4 && page <= pagesCount - 4) {
          generateHREF("...", tempSearch, pagination);
          for (let i = page - 2; i < page + 3 && i < pagesCount; i++) {
            generateHREF(i, tempSearch, pagination);
          }
          generateHREF("...", tempSearch, pagination);
        }
        if (page > pagesCount - 4) {
          generateHREF("...", tempSearch, pagination);
          for (let i = pagesCount - 4; i < pagesCount; i++) {
            generateHREF(i, tempSearch, pagination);
          }
        }
        generateHREF(pagesCount + 1, tempSearch, pagination);
      }
    });
}

function generateHREF(pagesCount = 1, textSearch, pagination) {
  const a = document.createElement("a");
  a.innerHTML = pagesCount;
  pagination.appendChild(a);
  a.onclick = (e) => {
    e.preventDefault();
    page = e.target.outerText;
    searchPics(pagesCount, textSearch);
  };
}

function maxObjectElement(object) {
  let temp = 0;
  let max = "";
  for (e in object) {
    if (object[e] > temp) {
      temp = object[e];
      max = `${e}`;
    }
  }
  return `${max}: ${temp}`;
}

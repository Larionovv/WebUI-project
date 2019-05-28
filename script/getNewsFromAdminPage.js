window.onload = () => {
  let newsContainer = document.getElementById('container-for-news');
  let newsArray = JSON.parse(localStorage.getItem("newsArray"));

  // newsArray.forEach((content) => {

    for (let index = 0; index < newsArray.length ; index+=1) {
      newsContainer.insertAdjacentHTML(
        "beforebegin", `<article class="card p-3 mb-2 mx-auto" style="width: 16rem;">
                             <img src="./img/add_photo.png"
                             class="card-img-top" alt="...">
                        <article class="card-body">
                            <h5 class="card-title"> ${newsArray[index]} </h5>
                            <p class="card-text"> ${newsArray[index+=1]} </p>
                        </article>

                </article>`);
    }
};

document.getElementById('getNews').onclick = () => {
  event.preventDefault();
  const newsTitle = document.getElementById('newsTitle').value.toString();
  const newsDescription = document.getElementById('newsDescription').value.toString();
  putNewsInPage(newsTitle,newsDescription);
};

const putNewsArrayInLocalStorage = (newsTitle, newsDescription) => {
  let newsArray = JSON.parse(localStorage.getItem("newsArray")) || [];
  newsArray.unshift(newsTitle,newsDescription);
  localStorage.setItem("newsArray", JSON.stringify(newsArray));
};

const putNewsInPage = (newsTitle, newsDescription) => {
  let form = document.getElementById('newsForm');

  if (newsTitle.trim() === false && newsDescription.trim() ===false) {
    form.classList.add("was-validated");
    event.stopPropagation();
  } else {
    putNewsArrayInLocalStorage(newsTitle, newsDescription);
    form.classList.remove("was-validated");
    document.getElementById('newsTitle').value = '';
    document.getElementById('newsDescription').value = '';

  }
};


window.onload = () => {
  let commentsContainer = document.getElementById('container-for-fan');
  let fanPostArray = JSON.parse(localStorage.getItem("allFanPost"));

  fanPostArray.forEach((post) => {
      commentsContainer.insertAdjacentHTML(
        "beforeend", `<article class="text-justify container-for-fun-post" id="fanPost">
                <p class="text-in-fun-post">${post}</p>
                    <section class="row p-30">
                        <p class="date col-2"  id="postDate"> ${getPostDate()}  </p>
                        <p class="name col-4-5" id="userName"> ${getUserName()} </p>
                    </section>
            </article>`)
    }
  )
};

document.getElementById('getFansPost').onclick = () => {
  event.preventDefault();
  const fansPostText = document.getElementById('fansPostText').value.toString();
  putPostInPage(fansPostText);
};


const getPostDate = () => {
  let today = new Date();
  let hour = String(today.getHours()).padStart(2, '0');
  let min = String(today.getMinutes()).padStart(2, '0');
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  return hour + ':' + min + ' ' + mm + '.' + dd + '.' + yyyy;
};

const getUserName = () => {
  let userName = 'user';
  if (localStorage.getItem('userLogin') !== null) {
    userName = localStorage.getItem('userLogin');
  }
  return userName;
};


const putFanPostArrayInLocalStorage = (fansPostText) => {
  let fanPostArray = JSON.parse(localStorage.getItem("allFanPost")) || [];
  fanPostArray.push(fansPostText);
  localStorage.setItem("allFanPost", JSON.stringify(fanPostArray));
  putPostInPage(fanPostArray);
};

const putPostInPage = (fansPostText) => {
  let form = document.getElementById('fanPostForm');
  let commentsContainer = document.getElementById('container-for-fan');

  if (fansPostText.trim() === false) {
    form.classList.add("was-validated");
    event.stopPropagation();
  } else {
    commentsContainer.insertAdjacentHTML(
      "beforeend", `<article class="text-justify container-for-fun-post" id="fanPost">
                <p class="text-in-fun-post">${fansPostText}</p>
                    <section class="row p-30">
                        <p class="date col-2"  id="postDate"> ${getPostDate()}  </p>
                        <p class="name col-4-5" id="userName"> ${getUserName()} </p>
                    </section>
            </article>`);
    form.classList.remove("was-validated");
    document.getElementById('fansPostText').value = '';
    putFanPostArrayInLocalStorage(fansPostText);
  }
};

export default function Card(name, imgUrl) {
  const article = document.createElement("article");
  const imgElement = document.createElement("img");
  const nameElement = document.createElement("h2");

  article.classList.add("card");
  imgElement.classList.add("card__img");
  nameElement.classList.add("card__name");

  imgElement.src = imgUrl;
  nameElement.textContent = name;

  article.appendChild(imgElement);
  article.appendChild(nameElement);

  return article;
}

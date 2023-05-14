import SectionCard from "./section-card.js";

const printElements = async () => {
  const section = await SectionCard();

  console.log(section);

  document.body.appendChild(section);
};

printElements();

export const btnsData = [
  {
    id: 1,
    position: "livingHouse",
    color: "blue",
    description: "Жилой дом",
  },
  {
    id: 2,
    position: "stadium",
    color: "green",
    description: "Стадион",
  },
  {
    id: 3,
    position: "bridge",
    color: "blue",
    description: "Мост",
  },
  {
    id: 4,
    position: "redWhiteHouse",
    color: "blue",
    description: "Жилой дом",
  },
  {
    id: 5,
    position: "arch",
    color: "green",
    description: "Арка",
  },
  {
    id: 6,
    position: "pillar",
    color: "blue",
    description: "Столб",
  },
  {
    id: 7,
    position: "buffet",
    color: "blue",
    description: "Буфет",
  },
  {
    id: 8,
    position: "library",
    color: "green",
    description: "Библиотека",
  },
  {
    id: 9,
    position: "deansOffice",
    color: "blue",
    description: "Деканат",
  },
  {
    id: 10,
    position: "roof",
    color: "green",
    description: "Крыша",
  },
];

const btns = document.querySelector(".btns");

btnsData.forEach((btn) => {
  const button = document.createElement("button");
  button.innerHTML = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="41"
      height="41"
      viewBox="0 0 41 41"
      fill="none"
    >
      <circle opacity="0.7" cx="20" cy="20" r="20" fill="currentColor" />
      <path d="M20 15V25M15 20H25" stroke="white" stroke-width="2" />
    </svg>
  `;
  button.classList.add("button", btn.position, btn.color);
  btns.appendChild(button);
});

export const btnsData = [
  {
    id: 1,
    position: "livingHouse",
    color: "blue",
    description: "Жилой дом",
    isActive: false,
  },
  {
    id: 2,
    position: "stadium",
    color: "green",
    description: "Стадион",
    isActive: false,
  },
  {
    id: 3,
    position: "bridge",
    color: "blue",
    description: "Мост",
    isActive: false,
  },
  {
    id: 4,
    position: "redWhiteHouse",
    color: "blue",
    description: "Жилой дом",
    isActive: false,
  },
  {
    id: 5,
    position: "arch",
    color: "green",
    description: "Арка",
    isActive: false,
  },
  {
    id: 6,
    position: "pillar",
    color: "blue",
    description: "Столб",
    isActive: false,
  },
  {
    id: 7,
    position: "buffet",
    color: "blue",
    description: "Буфет",
    isActive: false,
  },
  {
    id: 8,
    position: "library",
    color: "green",
    description: "Библиотека",
    isActive: false,
  },
  {
    id: 9,
    position: "deansOffice",
    color: "blue",
    description: "Деканат",
    isActive: false,
  },
  {
    id: 10,
    position: "roof",
    color: "green",
    description: "Крыша",
    isActive: false,
  },
];

const inActiveBtnSvg = `
<svg width="41" height="41" viewBox="0 0 41 41" fill="none">
<circle opacity="0.7" cx="20" cy="20" r="20" fill="currentColor" />
<path d="M20 15V25M15 20H25" stroke="white" stroke-width="2" />
</svg>
`;
const activeBtnSvg = `<svg width="10" height="2" viewBox="0 0 10 2" fill="white" xmlns="http://www.w3.org/2000/svg">
<path d="M0 1H10" stroke="white" stroke-width="2"/>
</svg>`;
const btns = document.querySelector(".btns");

const createBtns = () => {
  btns.innerHTML = "";
  btnsData.forEach((btn) => {
    const button = document.createElement("button");
    if (btn.isActive) {
      const buttonText = document.createTextNode(btn.description);
      button.innerHTML = activeBtnSvg;
      button.appendChild(buttonText);
    } else {
      button.innerHTML = inActiveBtnSvg;
    }
    button.setAttribute("data-id", btn.id);
    const classNames = `button ${btn.position} ${
      btn.isActive ? `active bg-${btn.color}` : btn.color
    }`;
    button.classList.add(...classNames.split(" "));
    btns.appendChild(button);
  });
};

const setActiveBtn = (currentId) => {
  btnsData.forEach((btn) => {
    btn.isActive = btn.id === currentId ? !btn.isActive : false;
  });
};

btns.addEventListener("click", (e) => {
  const closestBtn = e.target.closest("button");
  console.log("eeee", e.target, closestBtn);
  const closestBtnId = closestBtn.getAttribute("data-id");
  setActiveBtn(+closestBtnId);
  createBtns();
});

createBtns();

// data
const incubatorInfo = {
  title: "it-incubator",
  graduatesCount: 2000,
  areYouChampion: true,
  tecnologies: [{ title: "Front" }, { title: "Back" }, { title: "DevOps" }],
};

//render
let pageTitleElement = document.createElement("h1");
pageTitleElement.innerText = incubatorInfo.title;
document.body.append(pageTitleElement);

let graduatesCountElement = document.createElement("input");
graduatesCountElement.value = incubatorInfo.graduatesCount;
graduatesCountElement.type = "number";
document.body.append(graduatesCountElement);

let areYouChampionElement = document.createElement("input");
areYouChampionElement.type = "checkbox";
areYouChampionElement.checked = incubatorInfo.areYouChampion;
document.body.append(areYouChampionElement);

let techSelectElement = document.createElement("s");

export const affiche = async (e) => {
  const list = await fetch("./data.json", {
    method: "GET",
    headers: {
      "content-type": "application/json",
    }
  })
    .then((res) => res.json());
  return list;
}

export const afficheUser = async (e) => {
  const list = await fetch("./data-students.json", {
    method: "GET",
    headers: {
      "content-type": "application/json",
    }
  })
    .then((res) => res.json());
  return list;
}

let thm = ""
fetch("./data.json")
  .then((res) => res.json())
  .then(function (data) {
    console.log(data);
    for (let da of data) {
      thm += `
        <a href="./projects-fields-page/index.html?id=${da.id}" data-name="${da.category}" data-id="${da.id}">
              <div class="cardHebergementMarseille">
                <img
                  class="cardImageHebergementMarseille"
                  src="${da.cover}"
                  alt="hebergementPicture"
                />

                <div class="cardBodyHebergementMarseille">
                  <h4>${da.titre}</h4>
                  <p>${da.diplome}</p>

                  <div class="cardNote">
                    <p>${da.time}</p>
                  </div>
                </div>
              </div>
            </a>`
    }
    document.getElementById("herbe").insertAdjacentHTML("beforeend", thm);
    let pelt = document.querySelectorAll(".cardHebergementMarseille")
    
    for (let ety of pelt) {
      ety.addEventListener("click", () => {
        const elt = ety.closest("a")
        const att = elt.getAttribute('data-id');
        console.log(att)
        let tableau=[]
      })
    }
  })
  .catch((err) => {
    console.log(err);
  })

const displayCategory = (category) => {
  let categories = ""
  for (let ca of category) {
    categories += `
    <a href="./projects-fields-page/index.html?id=${ca.id}" data-name="${ca.category}" data-id="${ca.id}">
              <div class="cardHebergementMarseille">
                <img
                  class="cardImageHebergementMarseille"
                  src="${ca.cover}"
                  alt="hebergementPicture"
                />

                <div class="cardBodyHebergementMarseille">
                  <h4>${ca.titre}</h4>
                  <p>${ca.diplome}</p>

                  <div class="cardNote">
                    <p>${ca.time}</p>
                  </div>
                </div>
              </div>
            </a>`
  }
  document.getElementById("herbe").innerHTML = ""
  document.getElementById("herbe").insertAdjacentHTML("beforeend", categories);
}

const elt = document.getElementsByClassName("item");
const func = async () => {
  const data = await affiche();
  for (let i = 0; i < elt.length; i++) {
    const indi = elt[i];
    elt[i].addEventListener("click", () => {
      console.log(elt[i])
      const objet = data.filter(compteur => compteur.category === indi.dataset.name);
      console.log(objet.length)
      if (objet.length != 0) {
        return displayCategory(objet)
      } else {
        document.getElementById("herbe").innerHTML = "<h2>Ce parcours est en construction</h2>"
      }

    })
  }
}
func()

const annonc = document.querySelector(".bloc-anonce p")
const image = document.querySelector(".student-image")
const namestuden = document.querySelector(".student-name")
const pnamestudent = document.querySelector(".student-pname")
const dot = document.querySelectorAll(".dot")
dot.forEach(element => {
  element.addEventListener("click", ()=>{
    const elt = element.closest("div")
    const dpro = elt.getAttribute("data-name")
    displayAnonc(dpro)
  })
})

const displayAnonc = async (positions) =>{
  const data = await afficheUser()
  console.log(data)
  const dataa = data.filter(e=>e.position === positions)
  annonc.innerHTML = dataa[0].description
  image.src = dataa[0].image
  namestuden.innerHTML =  dataa[0].name
  pnamestudent.innerHTML = dataa[0].pname
  console.log(pnamestudent)
}






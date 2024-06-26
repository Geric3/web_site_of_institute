export const affiche = async (e) => {
  const list = await fetch("./data-boostEn.json", {
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
fetch("./data-upliftEn.json")
  .then((res) => res.json())
  .then(function (data) {

    for (let da of data) {
      thm += `
            <a href="#"  data-id="${da.id}">
                  <div class="cardHebergementMarseille borderr">
                    <h2>${da.title}</h2>
    
                    <div class="cardBodyHebergementMarseille size-item">
                      
                      <p> ${da.text}</p>
    
                      <div class="cardNote">
                        <p> ${da.more}</p>
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

        let tableau = []
      })
    }
  })
  .catch((err) => {
    console.log(err);
  })


const annonc = document.querySelector(".bloc-anonce p")
const image = document.querySelector(".student-image")
const namestuden = document.querySelector(".student-name")
const pnamestudent = document.querySelector(".student-pname")
const dot = document.querySelectorAll(".dot")
dot.forEach(element => {
  element.addEventListener("click", () => {
    const elt = element.closest("div")
    const dpro = elt.getAttribute("data-name")
    displayAnonc(dpro)
  })
})

const displayAnonc = async (positions) => {
  const data = await afficheUser()

  const dataa = data.filter(e => e.position === positions)
  annonc.innerHTML = dataa[0].description
  image.src = dataa[0].image
  namestuden.innerHTML = dataa[0].name
  pnamestudent.innerHTML = dataa[0].pname

}


const funMsg = () => {
  emailjs.init("9vm4t5UUKnD--qr0z");
};
funMsg()

// listen to the form submission

const error = document.querySelector(".error-msg")

document
  .getElementById("myForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const sub = document.querySelector("#subject").value
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const msg = document.getElementById("message").value


    const serviceID = "service_1yic4fc";
    const templateID = "template_9qyxtlc";

    if (sub != "" && name != "" && email != "" && msg != "") {
      error.innerHTML = ""
      // send the email here
      emailjs.sendForm(serviceID, templateID, this).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("SUCCESS! votre message a été envoyé");
        },
        (error) => {
          console.log("FAILED...", error);
          alert("FAILED...", error);
        }
      );
    } else {
      error.innerHTML = "Remplissez tous les champs !!!"
      error.style.color = "red"
    }
  });


const desc = document.querySelector("#item")
const dis = document.querySelector(".arrow-down-icon")
//const divAll = document.querySelector(".displayt").style.display="none"

let tes = false

const acordions = document.querySelectorAll(".accordions-items")

acordions.forEach(item => {
  const element = item.querySelector(".collapse-descrip")
  element.addEventListener("click", () => {
    item.classList.toggle("active")
    //dis.style.rotate="180deg"
  })
})
// code canvas
// mon élément canvas
var canvas = document.querySelector('#canvas');
// truc à faire pour écrire ou lire
var ctx = canvas.getContext('2d');
ctx.lineWidth = 5;
ctx.stokeStyle = "black";

// on crée une image temporaire
var img_tmp = new Image();

// on ajoute un écouteur qui surveille le chargement de la src
img_tmp.addEventListener('load', function () { // *
  // on clone et on place à 0,0 notre image
  ctx.drawImage(img_tmp, 0, 0, 790, 790);
});

// on donne une source à notre image_tmp (ce qui lancera le load de la ligne *)
img_tmp.src = document.querySelector('#imgA').src;

/* ctx.drawImage(image, dx, dy); // d => destination
ctx.drawImage(image, dx, dy, dWidth, dHeight);
ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight); // s => source */


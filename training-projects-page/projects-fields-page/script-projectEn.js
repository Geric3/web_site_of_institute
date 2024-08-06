export const affiche = async (e) => {
    const list = await fetch("../dataEn.json", {
        method: "GET",
        headers: {
            "content-type": "application/json",
        }
    })
        //recuperer la reponse au format JSON
        .then((res) => res.json());
    return list;
    // console.log(list);
}


export const affichetwo = async (e) => {
    const list = await fetch("../data-missionEn.json", {
        method: "GET",
        headers: {
            "content-type": "application/json",
        }
    })
        //recuperer la reponse au format JSON
        .then((res) => res.json());
    return list;
    // console.log(list);
}

export const affichetname = async (e) => {
    const list = await fetch("../data-user.json", {
        method: "GET",
        headers: {
            "content-type": "application/json",
        }
    })
        //recuperer la reponse au format JSON
        .then((res) => res.json());
    return list;
    // console.log(list);
}

let  dpro = ""
let pelt = document.getElementsByClassName("projects")
let url = new URL(document.location.href)
let orderId = url.searchParams.get('id');
const idvar = orderId; 

const title_project = document.querySelector(".title h1")
let nbproject = document.querySelector(".projects")

let changedLang = document.querySelector(".page")

changedLang.addEventListener("click", ()=>{
    
        document.location.href='index.html?id='+ idvar;
   
    
    console.log("bbbobobobob");
    console.log(idvar);
    //display()
})
let tab = []
let  displa = ""
const display = async () => {
    const data = await affiche();
    const datamisio = await affichetwo()

    let projectField = ""

    const p_titre = document.querySelector(".title p")

    const elt = data.filter(compteur => compteur.id === orderId)
    tab = Object.values(elt)

    if(elt.length===0){
        return document.location.href='../indexEn.html';
    }
    
    title_project.innerHTML = elt[0].titre
    nbproject.innerHTML = elt[0].projects.length

    if (elt[0].titre === "Python Developer") {
        p_titre.innerHTML = "Build powerful web applications using the popular programming language, Python and the Django framework."
    } 

    if (elt[0].titre === "JavaScript Developer") {
        p_titre.innerHTML = "Create website interfaces, styles, and animations like the ones you know and use everyday."
    }

    if (elt[0].titre === "Cybersecurity Analyst") {
        p_titre.innerHTML = "Learn how to detect cybersecurity incidents, protect, defend a business and acquire professional Cybersecurity Analyst skills."
    }


    if (elt[0].titre === "Back-end Developer: Java") {
        p_titre.innerHTML = "Learn software development using Java, one of the most widely-used programming languages in the world."
    }

    if (elt[0].titre === "Android Developer") {
        p_titre.innerHTML = "Build robust and accessible Android apps with Kotlin and Java programming languages."
    }

    if (elt[0].titre === "Web Developer") {
        p_titre.innerHTML = "Start your career in web development by learning to build responsive, dynamic websites."
    }

    if (elt[0].titre === "Full Stack Developer") {
        p_titre.innerHTML = "Become an expert in full-stack programming with Ruby and React in software design and quality."
    }
    


    if (elt[0].titre === "IT Support Technician") {
        p_titre.innerHTML = "Enter the field of information technology by learning how to manage IT equipment and provide user support."
    }

    if (elt[0].titre === "iOS Developer") {
        p_titre.innerHTML = "Build robust and accessible iOS apps with Swift and Objective-C programming languages."
    }


    if (elt[0].titre === "Web and Mobile App Developer") { 
        p_titre.innerHTML = "Discover the world of web development by learning to create sites with React, robust and accessible Android applications with the Kotlin and Java programming languages."
    }

    for (let p = 0; p < elt[0].projects.length; p++) {
        projectField += `
        <a href="#" class="bloc-projects-field" data-name="Project ${p + 1}">
                        <div class="bloc-type-twins engagement-bloc">

                            <div class="bloc-type-twins-second project-descrip">
                                <p> ${elt[0].description[p]}
                                </p>
                                <!-- <p> Nos parcours vous permettent d’apprendre par la pratique. Vous gagnerez donc un
                                véritable savoir-faire
                                ainsi qu’un portfolio pour le démontrer.
                            </p> -->

                            </div>
                            <div class="bloc-type-twins-first project-title">
                                <!-- <img src="../img/img-projet.png" alt=""> -->
                                <h2>Project ${p + 1}</h2>
                                <p> ${elt[0].projects[p]}
                                </p>
                                
                            </div>

                        </div>
                    </a>`
    }
    document.getElementById("Allprojects").insertAdjacentHTML("beforeend", projectField);

    const eltmision = datamisio.filter(compteur => compteur.title === elt[0].titre)

    const ulelet = document.querySelector(".bloc-items-mission")
    const elp = document.querySelector(".bloc-items-oppotu")
    const lan = document.querySelector(".languages")
    elp.innerHTML = eltmision[0].work
    if(eltmision[0].title === "Marketing Digital" || eltmision[0].title === "Bureautique" || eltmision[0].title === "IT Support Technician"){
        const divv = document.querySelector(".language")
        divv.style.display = "none"
    }else{
        lan.innerHTML = eltmision[0].language
    }
    

    for (let k = 0; k < eltmision[0].description.length; k++) {
        const elt_li = document.createElement("li")
        elt_li.innerHTML = eltmision[0].description[k]
        ulelet.appendChild(elt_li)
    }

    const alldivproject = document.querySelectorAll(".bloc-projects-field")
    const el_modal = document.getElementById("modal1")
    const el_affich = document.querySelector(".displa-mode")
    const project_name = document.querySelector(".name-project")
    alldivproject.forEach(element => {
        element.addEventListener("click", () => {
            const elta = element.closest("a")
             dpro = elta.getAttribute("data-name")
            console.log(dpro)
            document.querySelector(".displa-mode").style.display = "block"
            project_name.innerHTML = dpro
            displa += `
            `
    
        })
    });
}
display()

const displayMission = async () => {
    const data = await affichetwo()
}

document.querySelector(".account").addEventListener("click", ()=>{
    document.querySelector(".displa-mode").style.display = "none"
    document.querySelector(".displa-mode2").style.display = "block"
})

document.querySelector(".modal-close").addEventListener("click", ()=>{
    document.querySelector(".displa-mode").style.display = "none"
    //document.querySelector(".displa-mode2").style.display = "none"
}) 

document.querySelector(".modal1-close").addEventListener("click", ()=>{
    document.querySelector(".displa-mode2").style.display = "none"
}) 

document.querySelector(".modal2-close").addEventListener("click", ()=>{
    document.querySelector(".displa-mode1").style.display = "none"
    window.location.reload()
}) 

const nam = document.getElementById("LastName")
const pname = document.getElementById("FirstName")
let tablo =[]
let urle = new URL(document.location.href)
let orderIde = urle.searchParams.get('LastName');
let orderIdes = urle.searchParams.get('FirstName');


const confirmRegister = async (namm,pnamm)=>{
    const data = await affichetname()
   
    document.querySelector(".displa-mode1").style.display = "block"
    const confir = data.filter(els => els.name === namm && els.pname === pnamm)

    if(confir.length != 0){
        document.querySelector(".confirm").innerHTML = "Super!!! terminez le projet sur lequel vous êtes en train de travailler et votre encadreur vous donnera accès au projet suivant."
    }
    else{
        document.querySelector(".confirm").innerHTML = "Oups!!! Vous n'etes pas un etudiant de cet etablissement. Inscrivez vous!!!"
    }
}

document.querySelector(".senddata").addEventListener("click", (e)=>{
    e.preventDefault()
    tablo.push({name : nam.value, pname: pname.value});
    localStorage.setItem("dataUser", JSON.stringify(tablo));
    const local= localStorage.getItem("dataUser")
    if(local){
        tablo=JSON.parse(local)
    }
    const nom = tablo[0].name
    const pnom = tablo[0].pname
    console.log("le nom est"+ tablo[0].name);
    document.querySelector(".displa-mode2").style.display = "none"
    confirmRegister(nom,pnom)
    document.getElementById("LastName").innerHTML = ""
    document.getElementById("FirstName").innerHTML = ""
    localStorage.clear()
}) 





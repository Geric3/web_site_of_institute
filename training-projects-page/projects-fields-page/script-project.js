export const affiche = async (e) => {
    const list = await fetch("../data.json", {
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
    const list = await fetch("../data-mission.json", {
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
console.log(orderId)
const title_project = document.querySelector(".title h1")
let nbproject = document.querySelector(".projects")
let tab = []
let  displa = ""
const display = async () => {
    const data = await affiche();
    const datamisio = await affichetwo()

    let projectField = ""

    const p_titre = document.querySelector(".title p")

    const elt = data.filter(compteur => compteur.id === orderId)
    tab = Object.values(elt)
    console.log(elt[0].category);
    console.log(tab[0].category);
    console.log(nbproject);
    title_project.innerHTML = elt[0].titre
    nbproject.innerHTML = elt[0].projects.length

    if (elt[0].titre === "Développeur d'application Python") {
        p_titre.innerHTML = "Construisez des applications web en utilisant le langage de programmation Python et le framework Django."
    }

    if (elt[0].titre === "Développeur d'application JavaScript") {
        p_titre.innerHTML = "Construisez des applications web en utilisant le langage de programmation JavaScript, le framework React et construisez des sites web dynamique robuste."
    }

    if (elt[0].titre === "Développeur d'application Java") {
        p_titre.innerHTML = "Construisez des applications ou logiciel sécurisé en utilisant le langage de programmation Java et le framework Spring."
    }

    if (elt[0].titre === "Développeur d'application PHP") {
        p_titre.innerHTML = "Construisez des applications ou logiciel sécurisé en utilisant le langage de programmation PHP et les framework Symfony et Laravel."
    }

    if (elt[0].titre === "Développeur d'application Android") {
        p_titre.innerHTML = "Créez des applications Android robustes et accessibles avec les langages de programmation Kotlin et Java."
    }

    if (elt[0].titre === "Développeur Web") {
        p_titre.innerHTML = "Faites vos premiers pas dans le monde du développement web en apprenant à créer des sites avec React !"
    }

    if (elt[0].titre === "Développeur Full Stack") {
        p_titre.innerHTML = "Devenez un expert en programmation full-stack avec Java et Angular en conception et qualité logicielle."
    }
    
    if (elt[0].titre === "Marketing Digital") {
        p_titre.innerHTML = "Garantissez la cohérence de marque et l'application de la stratégie marketing de votre entreprise."
    }

    if (elt[0].titre === "Responsable en sécurité des systèmes d'information") {
        p_titre.innerHTML = "Mettez en œuvre une stratégie de cybersécurité dans votre entreprise et déployez-la en continu."
    }

    if (elt[0].titre === "Administrateur des systèmes et réseaux informatique") {
        p_titre.innerHTML = "Concevez et gérez les réseaux et systèmes d’information des entreprises, ainsi que leur sécurité."
    }

    if (elt[0].titre === "Développeur WordPress") {
        p_titre.innerHTML = "Découvrez le monde du développement web en apprenant à créer des sites WordPress !"
    }

    if (elt[0].titre === "Community Manager") {
        p_titre.innerHTML = "Gérez la présence des marques pour lesquelles vous travaillez sur les réseaux sociaux !"
    }
    
    if (elt[0].titre === "Analyste Cybersécurité") {
        p_titre.innerHTML = "Détectez les incidents de cybersécurité et agissez pour la protection de votre entreprise"
    }

    if (elt[0].titre === "Développeur web et mobile") {
        p_titre.innerHTML = "Découvrez le monde du développement web en apprenant à créer des sites avec React, des applications Android robustes et accessibles avec les langages de programmation Kotlin et Java."
    }

    for (let p = 0; p < elt[0].projects.length; p++) {
        projectField += `
        <a href="#" class="bloc-projects-field" data-name="Projet ${p + 1}">
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
                                <h2>Projet ${p + 1}</h2>
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
    if(eltmision[0].title === "Marketing Digital" || eltmision[0].title === "Bureautique" || eltmision[0].title === "Responsable en sécurité des systèmes d'information"){
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
console.log(nam);
console.log(pname);

const confirmRegister = async (namm,pnamm)=>{
    const data = await affichetname()
    console.log(data);
    document.querySelector(".displa-mode1").style.display = "block"
    const confir = data.filter(els => els.name === namm && els.pname === pnamm)
    console.log(confir);
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





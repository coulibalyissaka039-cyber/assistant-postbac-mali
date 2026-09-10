/* =========================================================
   ASSISTANT POST-BAC MALI
   APPLICATION COMPLÈTE — VERSION MONOFICHIER
   ========================================================= */


/* =========================================================
   DONNÉES INITIALES
   ========================================================= */

const defaultUniversities = [

{
id:"ussgb",
name:"Université des Sciences Sociales et de Gestion de Bamako",
short:"USSGB",
city:"Bamako",
type:"public",
description:"Université publique orientée vers les sciences sociales, l'économie et la gestion.",
official:"https://dg-enseignementsup.ml/",
status:"verified",
formations:["eco","gestion"]
},

{
id:"usttb",
name:"Université des Sciences, des Techniques et des Technologies de Bamako",
short:"USTTB",
city:"Bamako",
type:"public",
description:"Université publique couvrant les sciences, les technologies et les sciences de la santé.",
official:"https://www.usttb.edu.ml/",
status:"verified",
formations:["informatique","sante"]
},

{
id:"usjpb",
name:"Université des Sciences Juridiques et Politiques de Bamako",
short:"USJPB",
city:"Bamako",
type:"public",
description:"Université publique spécialisée dans les sciences juridiques et politiques.",
official:"https://dg-enseignementsup.ml/",
status:"verified",
formations:["droit"]
},

{
id:"ulshb",
name:"Université des Lettres et Sciences Humaines de Bamako",
short:"ULSHB",
city:"Bamako",
type:"public",
description:"Université publique dédiée aux lettres, langues et sciences humaines.",
official:"https://dg-enseignementsup.ml/",
status:"verified",
formations:["lettres"]
},

{
id:"ipr-ifra",
name:"Institut Polytechnique Rural de Formation et de Recherches Appliquées de Katibougou",
short:"IPR/IFRA",
city:"Katibougou",
type:"public",
description:"Institut public de référence en agronomie, élevage et sciences rurales.",
official:"https://dg-enseignementsup.ml/",
status:"verified",
formations:["agronomie"]
},

{
id:"eni-abt",
name:"École Nationale d'Ingénieurs Abderhamane Baba Touré",
short:"ENI-ABT",
city:"Bamako",
type:"public",
description:"École publique d'ingénieurs couvrant le génie civil, les mines, l'électromécanique et les travaux publics.",
official:"https://dg-enseignementsup.ml/",
status:"verified",
formations:["genie-civil"]
},

{
id:"uniseg",
name:"Université de Ségou",
short:"UNI-SÉGOU",
city:"Ségou",
type:"public",
description:"Université publique régionale offrant des formations dans plusieurs filières.",
official:"https://dg-enseignementsup.ml/",
status:"pending",
formations:[]
},

{
id:"ukm",
name:"Université Kankou Moussa",
short:"UKM",
city:"Bamako",
type:"prive",
description:"Établissement privé reconnu, particulièrement fort en sciences de la santé (soins infirmiers, sages-femmes, imagerie) et en gestion.",
official:"https://dg-enseignementsup.ml/rubrique/universites/etablissements-prives-denseignement-superieur/",
status:"pending",
formations:["sante"]
},

{
id:"isgmali",
name:"Institut Supérieur de Gestion Mali",
short:"ISG Mali",
city:"Bamako",
type:"prive",
description:"Établissement privé spécialisé en gestion et en management.",
official:"https://dg-enseignementsup.ml/rubrique/universites/etablissements-prives-denseignement-superieur/",
status:"pending",
formations:["gestion"]
}

];


const defaultFormations = [

{
id:"eco",
name:"Économie",
level:"Licence",
domain:"Économie & gestion",
duration:"3 ans",
description:"Formation consacrée à l'étude des mécanismes économiques, des marchés et des politiques économiques.",
subjects:[
"Microéconomie",
"Macroéconomie",
"Mathématiques",
"Statistiques",
"Comptabilité"
],
jobs:[
"Assistant chargé d'études",
"Analyste junior",
"Assistant administratif",
"Chargé de projet"
],
universities:["ussgb"],
status:"verified"
},

{
id:"gestion",
name:"Gestion",
level:"Licence",
domain:"Économie & gestion",
duration:"3 ans",
description:"Formation centrée sur la gestion des organisations, la comptabilité, la finance et le management.",
subjects:[
"Comptabilité",
"Finance",
"Marketing",
"Management",
"Droit"
],
jobs:[
"Assistant comptable",
"Assistant de gestion",
"Commercial",
"Assistant RH"
],
universities:["ussgb","isgmali"],
status:"verified"
},

{
id:"informatique",
name:"Informatique",
level:"Licence",
domain:"Informatique & numérique",
duration:"3 ans",
description:"Formation consacrée à la programmation, aux systèmes, aux réseaux et au développement numérique.",
subjects:[
"Algorithmique",
"Programmation",
"Bases de données",
"Réseaux",
"Développement web"
],
jobs:[
"Développeur web",
"Technicien informatique",
"Administrateur systèmes",
"Assistant développeur"
],
universities:["usttb"],
status:"verified"
},

{
id:"sante",
name:"Sciences de la santé",
level:"Licence",
domain:"Santé",
duration:"Selon la filière",
description:"Domaine regroupant différentes formations liées aux sciences médicales et paramédicales.",
subjects:[
"Anatomie",
"Physiologie",
"Biologie",
"Santé publique"
],
jobs:[
"Professionnel de santé",
"Technicien",
"Assistant spécialisé"
],
universities:["usttb","ukm"],
status:"verified"
},

{
id:"lettres",
name:"Lettres et Sciences Humaines",
level:"Licence",
domain:"Sciences sociales",
duration:"3 ans",
description:"Formation consacrée aux langues, à la littérature, à l'histoire, à la géographie et aux sciences humaines.",
subjects:[
"Littérature",
"Linguistique",
"Histoire",
"Géographie",
"Philosophie"
],
jobs:[
"Enseignant",
"Assistant de rédaction",
"Traducteur",
"Assistant culturel"
],
universities:["ulshb"],
status:"verified"
},

{
id:"agronomie",
name:"Agronomie & Sciences Rurales",
level:"Licence",
domain:"Agriculture",
duration:"3 à 5 ans selon le cycle",
description:"Formation consacrée à la production agricole, à l'élevage, à l'environnement et au développement rural.",
subjects:[
"Agronomie générale",
"Zootechnie",
"Sol et fertilisation",
"Économie rurale",
"Environnement"
],
jobs:[
"Technicien agricole",
"Assistant en développement rural",
"Conseiller agricole",
"Assistant d'exploitation"
],
universities:["ipr-ifra"],
status:"verified"
},

{
id:"genie-civil",
name:"Génie Civil & Ingénierie",
level:"Licence",
domain:"Sciences",
duration:"5 ans (cycle ingénieur)",
description:"Formation d'ingénieur couvrant la construction, les travaux publics, l'électromécanique et les mines.",
subjects:[
"Résistance des matériaux",
"Mathématiques appliquées",
"Topographie",
"Construction",
"Électromécanique"
],
jobs:[
"Technicien BTP",
"Assistant ingénieur",
"Conducteur de travaux junior",
"Dessinateur technique"
],
universities:["eni-abt"],
status:"verified"
},

{
id:"droit",
name:"Droit",
level:"Licence",
domain:"Droit",
duration:"3 ans",
description:"Formation consacrée à l'étude des règles juridiques et des institutions.",
subjects:[
"Droit constitutionnel",
"Droit civil",
"Droit administratif",
"Droit pénal",
"Droit des affaires"
],
jobs:[
"Assistant juridique",
"Juriste",
"Assistant administratif"
],
universities:["usjpb"],
status:"verified"
}

];


const defaultNews = [

{
id:"news1",
title:"Préinscription dans l'enseignement supérieur",
category:"INSCRIPTION",
date:"À vérifier pour chaque campagne",
description:"Les périodes et modalités de préinscription doivent être vérifiées auprès des plateformes officielles.",
link:"https://portail.campusmali.edu.ml/",
status:"verified"
},

{
id:"news2",
title:"Actualités de l'enseignement supérieur",
category:"OFFICIEL",
date:"Mise à jour régulière",
description:"Consulte les annonces publiées par les autorités compétentes.",
link:"https://dg-enseignementsup.ml/",
status:"verified"
},

{
id:"news3",
title:"Bourses et opportunités",
category:"BOURSES",
date:"Selon les appels",
description:"Les appels à candidatures doivent être vérifiés selon chaque programme.",
link:"https://dg-enseignementsup.ml/",
status:"pending"
},

{
id:"news4",
title:"Résultats du baccalauréat 2026",
category:"RÉSULTATS",
date:"Session 2026",
description:"Le taux d'admission au bac 2026 a légèrement progressé par rapport à l'année précédente. Consulte la source officielle pour les chiffres détaillés et les prochaines étapes d'orientation.",
link:"https://dg-enseignementsup.ml/",
status:"pending"
},

{
id:"news5",
title:"Vérifier une école privée avant de payer",
category:"CONSEIL",
date:"Utile toute l'année",
description:"Avant toute inscription dans un établissement privé, vérifie qu'il figure bien sur la liste officielle des établissements reconnus par l'État et que ta filière précise y est habilitée.",
link:"https://dg-enseignementsup.ml/rubrique/universites/etablissements-prives-denseignement-superieur/",
status:"verified"
}

];


const jobs = [

{
title:"Développeur web",
domain:"Numérique",
formation:"Informatique",
description:"Conçoit et développe des sites et applications web."
},

{
title:"Assistant comptable",
domain:"Gestion",
formation:"Gestion / Comptabilité",
description:"Participe à la tenue des comptes et au suivi financier."
},

{
title:"Assistant chargé d'études",
domain:"Économie",
formation:"Économie / Statistiques",
description:"Participe à la collecte et à l'analyse des données."
},

{
title:"Assistant administratif",
domain:"Administration",
formation:"Gestion / Droit",
description:"Participe à l'organisation et au suivi administratif."
}

];


const checklistItems = [

{id:"identity",name:"Pièce d'identité"},

{id:"birth",name:"Acte de naissance ou document équivalent"},

{id:"bac",name:"Attestation / preuve de réussite au bac"},

{id:"grades",name:"Relevé de notes du bac"},

{id:"photos",name:"Photos d'identité"},

{id:"online",name:"Préinscription en ligne effectuée"},

{id:"fees",name:"Vérification des frais et modalités"}

];


/* =========================================================
   CHARGEMENT / SAUVEGARDE
   ========================================================= */

let universities =
JSON.parse(localStorage.getItem("apbm_universities"))
|| structuredClone(defaultUniversities);

let formations =
JSON.parse(localStorage.getItem("apbm_formations"))
|| structuredClone(defaultFormations);

let news =
JSON.parse(localStorage.getItem("apbm_news"))
|| structuredClone(defaultNews);


function saveAll(){

localStorage.setItem(
"apbm_universities",
JSON.stringify(universities)
);

localStorage.setItem(
"apbm_formations",
JSON.stringify(formations)
);

localStorage.setItem(
"apbm_news",
JSON.stringify(news)
);

}


/* =========================================================
   MENU
   ========================================================= */

document
.getElementById("menuBtn")
.addEventListener("click",()=>{

document
.getElementById("nav")
.classList.toggle("open");

});


document
.querySelectorAll("nav a")
.forEach(a=>{

a.addEventListener("click",()=>{

document
.getElementById("nav")
.classList.remove("open");

});

});


/* =========================================================
   UNIVERSITÉS
   ========================================================= */

function renderUniversities(){

const container =
document.getElementById("universities");

const q =
(document.getElementById("universitySearch").value||"")
.toLowerCase();

const type =
document.getElementById("universityType").value;

const list =
universities.filter(u=>{

return (

(!q ||
u.name.toLowerCase().includes(q) ||
u.short.toLowerCase().includes(q) ||
u.city.toLowerCase().includes(q))

&&

(!type || u.type===type)

&&

u.status!=="draft"

);

});


if(!list.length){

container.innerHTML=
`<div class="empty">Aucun établissement trouvé.</div>`;

return;

}


container.innerHTML =
list.map(u=>`

<article class="card">

<div class="icon">🏫</div>

<span class="tag">
${u.type==="public"?"PUBLIC":"PRIVÉ"}
</span>

<h3>${escapeHTML(u.name)}</h3>

<p>
📍 ${escapeHTML(u.city)}
</p>

<p style="margin-top:8px">
${escapeHTML(u.description)}
</p>

<div class="card-bottom">

<span>
${u.formations.length} formation(s)
</span>

<button
class="text-btn"
onclick="openUniversity('${u.id}')">
Voir →
</button>

</div>

</article>

`).join("");

}


/* =========================================================
   FORMATIONS
   ========================================================= */

function renderFormations(){

const container =
document.getElementById("formationsList");

const q =
(document.getElementById("formationSearch").value||"")
.toLowerCase();

const level =
document.getElementById("formationLevel").value;


const list =
formations.filter(f=>{

return (

(!q ||
f.name.toLowerCase().includes(q) ||
f.domain.toLowerCase().includes(q))

&&

(!level || f.level===level)

&&

f.status!=="draft"

);

});


if(!list.length){

container.innerHTML=
`<div class="empty">Aucune formation trouvée.</div>`;

return;

}


container.innerHTML =
list.map(f=>`

<article class="card">

<div class="icon">📚</div>

<span class="tag">
${escapeHTML(f.level)}
</span>

<h3>${escapeHTML(f.name)}</h3>

<p>
${escapeHTML(f.domain)}
</p>

<p style="margin-top:8px">
${escapeHTML(f.description)}
</p>

<div class="card-bottom">

<span>
⏱ ${escapeHTML(f.duration)}
</span>

<button
class="text-btn"
onclick="openFormation('${f.id}')">
Découvrir →
</button>

</div>

</article>

`).join("");

}


/* =========================================================
   ORIENTATION
   ========================================================= */

function orientation(){

const bac =
document.getElementById("bac").value;

const interest =
document.getElementById("interest").value;

const result =
document.getElementById("orientationResult");


if(!bac || !interest){

result.innerHTML=
`<div class="notice">
⚠️ Choisis ton bac et ton domaine d'intérêt.
</div>`;

return;

}


const domainsByInterest = {
"économie":["Économie & gestion"],
"informatique":["Informatique & numérique"],
"santé":["Santé"],
"droit":["Droit"],
"sciences":["Sciences"],
"agriculture":["Agriculture"],
"social":["Sciences sociales"]
};

const matchingDomains =
domainsByInterest[interest] || [];

const list =
formations.filter(f=>
matchingDomains.includes(f.domain)
);


result.innerHTML=`

<div class="orientation-result">

<strong>
Profil : Bac ${escapeHTML(bac)}
</strong>

<p style="margin-top:7px;color:#cfe2da">
Voici les formations correspondant le mieux
au domaine choisi.
</p>

${
list.length

?

list.map(f=>`

<button
class="recommendation"
onclick="openFormation('${f.id}')">

<span>
📚 <strong>${escapeHTML(f.name)}</strong>
</span>

<span>→</span>

</button>

`).join("")

:

`<p style="margin-top:15px">
Aucune correspondance automatique.
Explore toutes les formations.
</p>`

}

</div>
`;

}


/* =========================================================
   DOSSIER
   ========================================================= */

function renderChecklist(){

const box =
document.getElementById("checklist");

let saved =
JSON.parse(
localStorage.getItem("apbm_checklist")
|| "{}"
);


box.innerHTML =
checklistItems.map(item=>`

<label class="check">

<input
type="checkbox"
data-check="${item.id}"
${saved[item.id]?"checked":""}>

<span>${escapeHTML(item.name)}</span>

</label>

`).join("");


box
.querySelectorAll("input")
.forEach(input=>{

input.addEventListener(
"change",
updateChecklist
);

});


updateChecklist();

}


function updateChecklist(){

const inputs =
document.querySelectorAll(
"[data-check]"
);

let completed=0;

let data={};

inputs.forEach(input=>{

data[input.dataset.check]=
input.checked;

if(input.checked)
completed++;

});


localStorage.setItem(
"apbm_checklist",
JSON.stringify(data)
);


const percent =
inputs.length
?Math.round(completed/inputs.length*100)
:0;


document
.getElementById("progress")
.style.width=
percent+"%";


document
.getElementById("progressText")
.textContent=
percent+"% terminé";

}


function resetChecklist(){

localStorage.removeItem(
"apbm_checklist"
);

renderChecklist();

}


/* =========================================================
   MÉTIERS
   ========================================================= */

function renderJobs(){

document.getElementById("jobs").innerHTML =
jobs.map(job=>`

<article class="card">

<div class="icon">💼</div>

<span class="tag">
${escapeHTML(job.domain)}
</span>

<h3>${escapeHTML(job.title)}</h3>

<p>${escapeHTML(job.description)}</p>

<div class="card-bottom">

<span>
Formation
</span>

<strong style="font-size:10px;color:var(--green)">
${escapeHTML(job.formation)}
</strong>

</div>

</article>

`).join("");

}


/* =========================================================
   ACTUALITÉS
   ========================================================= */

function renderNews(){

const container =
document.getElementById("news");

const list =
news.filter(n=>n.status!=="draft");


container.innerHTML =
list.map(n=>`

<article class="news">

<span class="tag">
${escapeHTML(n.category)}
</span>

<h3>${escapeHTML(n.title)}</h3>

<small>
${escapeHTML(n.date)}
</small>

<p>
${escapeHTML(n.description)}
</p>

<a
href="${safeURL(n.link)}"
target="_blank"
rel="noopener">
Vérifier la source officielle →
</a>

</article>

`).join("");

}


/* =========================================================
   MODALES
   ========================================================= */

function openModal(){

document
.getElementById("modal")
.classList.add("show");

}


function closeModal(){

document
.getElementById("modal")
.classList.remove("show");

}


document
.getElementById("modal")
.addEventListener("click",e=>{

if(e.target.id==="modal")
closeModal();

});


document.addEventListener(
"keydown",
e=>{

if(e.key==="Escape")
closeModal();

});


function openUniversity(id){

const u =
universities.find(x=>x.id===id);

if(!u)return;


const related =
formations.filter(
f=>f.universities.includes(id)
);


document.getElementById("modalBody").innerHTML=`

<span class="eyebrow">ÉTABLISSEMENT</span>

<h2>${escapeHTML(u.name)}</h2>

<p style="color:var(--muted)">
📍 ${escapeHTML(u.city)}
</p>

<p style="margin-top:14px;color:var(--muted)">
${escapeHTML(u.description)}
</p>

<hr>

<h3>Formations référencées</h3>

<div class="pills">

${
related.length

?

related.map(f=>`

<button
class="pill"
onclick="openFormation('${f.id}')"
style="border:0;cursor:pointer">

${escapeHTML(f.name)}

</button>

`).join("")

:

"<span>Aucune formation détaillée.</span>"

}

</div>

<div class="official">

<strong>Source officielle</strong>

<a
href="${safeURL(u.official)}"
target="_blank"
rel="noopener">

Consulter la source officielle →

</a>

</div>

<div class="notice">

⚠️ Vérifie toujours les conditions,
frais, dates et documents auprès de l'établissement
avant toute inscription.

</div>

`;

openModal();

}


function openFormation(id){

const f =
formations.find(x=>x.id===id);

if(!f)return;


const uni =
f.universities
.map(id=>
universities.find(u=>u.id===id)
)
.filter(Boolean);


document.getElementById("modalBody").innerHTML=`

<span class="eyebrow">FORMATION</span>

<h2>${escapeHTML(f.name)}</h2>

<div class="pills" style="margin:15px 0">

<span class="pill">${escapeHTML(f.level)}</span>

<span class="pill">${escapeHTML(f.duration)}</span>

<span class="pill">${escapeHTML(f.domain)}</span>

</div>

<p style="color:var(--muted)">
${escapeHTML(f.description)}
</p>

<hr>

<h3>Matières</h3>

<div class="pills">

${f.subjects
.map(s=>`<span class="pill">${escapeHTML(s)}</span>`)
.join("")}

</div>

<h3>Débouchés possibles</h3>

<div class="pills">

${f.jobs
.map(j=>`<span class="pill">💼 ${escapeHTML(j)}</span>`)
.join("")}

</div>

<h3>Établissements</h3>

<div class="pills">

${
uni.length

?

uni.map(u=>`

<button
class="pill"
onclick="openUniversity('${u.id}')"
style="border:0">

🏫 ${escapeHTML(u.short)}

</button>

`).join("")

:

"<span>À compléter</span>"

}

</div>

<div class="notice">

⚠️ Les conditions d'admission, frais,
dates et documents doivent être vérifiés
auprès de la source officielle.

</div>

`;

openModal();

}


/* =========================================================
   ADMIN — OUVERTURE
   ========================================================= */

function openAdmin(){

document
.getElementById("admin")
.scrollIntoView();

}


function loginAdmin(){

const password =
document.getElementById("adminPassword").value;


if(password==="admin123"){

sessionStorage.setItem(
"apbm_admin",
"1"
);

showAdmin();

}else{

alert("Mot de passe incorrect.");

}

}


function showAdmin(){

document
.getElementById("adminLogin")
.style.display="none";

document
.getElementById("adminContent")
.classList.add("active");

refreshAdmin();

}


function logoutAdmin(){

sessionStorage.removeItem(
"apbm_admin"
);

document
.getElementById("adminLogin")
.style.display="block";

document
.getElementById("adminContent")
.classList.remove("active");

}


if(
sessionStorage.getItem("apbm_admin")==="1"
){

showAdmin();

}


/* =========================================================
   ADMIN — ONGLETS
   ========================================================= */

function showAdminTab(id,button){

document
.querySelectorAll("#adminContent > .admin-content")
.forEach(x=>{
x.classList.remove("active");
});


document
.getElementById(id)
.classList.add("active");


document
.querySelectorAll(".admin-tab")
.forEach(x=>{
x.classList.remove("active");
});


button.classList.add("active");

}


/* =========================================================
   ADMIN — STATISTIQUES
   ========================================================= */

function refreshAdmin(){

document
.getElementById("statUniversities")
.textContent=
universities.length;

document
.getElementById("statFormations")
.textContent=
formations.length;

document
.getElementById("statNews")
.textContent=
news.length;

const pending =
[
...universities,
...formations,
...news
]
.filter(x=>x.status==="pending")
.length;

document
.getElementById("statPending")
.textContent=
pending;

renderUniversityAdmin();
renderFormationAdmin();
renderNewsAdmin();

}


/* =========================================================
   ADMIN — UNIVERSITÉS
   ========================================================= */

function addUniversity(){

const name =
document.getElementById("uName").value.trim();

if(!name){

alert("Le nom est obligatoire.");

return;

}


const item={

id:"u_"+Date.now(),

name,

short:
document.getElementById("uShort").value.trim(),

city:
document.getElementById("uCity").value.trim(),

type:
document.getElementById("uType").value,

official:
document.getElementById("uOfficial").value.trim(),

description:
document.getElementById("uDescription").value.trim(),

formations:[],

status:
document.getElementById("uStatus").value

};


universities.push(item);

saveAll();

clearInputs([
"uName",
"uShort",
"uCity",
"uOfficial",
"uDescription"
]);

refreshAdmin();
renderUniversities();

alert("Université ajoutée.");

}


function renderUniversityAdmin(){

const body =
document.getElementById("universityAdminTable");

body.innerHTML =
universities.map(u=>`

<tr>

<td>${escapeHTML(u.name)}</td>

<td>${escapeHTML(u.city)}</td>

<td>${u.type}</td>

<td>
${u.status==="verified"
?"✅ Vérifié"
:"⚠️ À vérifier"}
</td>

<td>

<div class="admin-actions">

${
u.status!=="verified"

?

`<button
class="small-btn publish"
onclick="verifyUniversity('${u.id}')">
✓
</button>`

:""

}

<button
class="small-btn delete"
onclick="deleteUniversity('${u.id}')">
🗑
</button>

</div>

</td>

</tr>

`).join("");

}


function verifyUniversity(id){

const u =
universities.find(x=>x.id===id);

if(!u)return;

u.status="verified";

saveAll();
refreshAdmin();
renderUniversities();

}


function deleteUniversity(id){

if(!confirm("Supprimer cette université ?"))
return;

universities=
universities.filter(x=>x.id!==id);

formations.forEach(f=>{
f.universities=
f.universities.filter(x=>x!==id);
});

saveAll();
refreshAdmin();
renderUniversities();
renderFormations();

}


/* =========================================================
   ADMIN — FORMATIONS
   ========================================================= */

function addFormation(){

const name =
document.getElementById("fName").value.trim();

if(!name){

alert("Le nom est obligatoire.");

return;

}


const item={

id:"f_"+Date.now(),

name,

level:
document.getElementById("fLevel").value,

domain:
document.getElementById("fDomain").value.trim(),

duration:
document.getElementById("fDuration").value.trim(),

description:
document.getElementById("fDescription").value.trim(),

subjects:
document.getElementById("fSubjects")
.value
.split(",")
.map(x=>x.trim())
.filter(Boolean),

jobs:
document.getElementById("fJobs")
.value
.split(",")
.map(x=>x.trim())
.filter(Boolean),

universities:[],

status:
document.getElementById("fStatus").value

};


formations.push(item);

saveAll();

clearInputs([
"fName",
"fDomain",
"fDuration",
"fDescription",
"fSubjects",
"fJobs"
]);

refreshAdmin();
renderFormations();

alert("Formation ajoutée.");

}


function renderFormationAdmin(){

const body =
document.getElementById("formationAdminTable");

body.innerHTML =
formations.map(f=>`

<tr>

<td>${escapeHTML(f.name)}</td>

<td>${escapeHTML(f.level)}</td>

<td>${escapeHTML(f.domain)}</td>

<td>
${f.status==="verified"
?"✅ Vérifié"
:"⚠️ À vérifier"}
</td>

<td>

<div class="admin-actions">

${
f.status!=="verified"

?

`<button
class="small-btn publish"
onclick="verifyFormation('${f.id}')">
✓
</button>`

:""

}

<button
class="small-btn delete"
onclick="deleteFormation('${f.id}')">
🗑
</button>

</div>

</td>

</tr>

`).join("");

}


function verifyFormation(id){

const f =
formations.find(x=>x.id===id);

if(!f)return;

f.status="verified";

saveAll();
refreshAdmin();
renderFormations();

}


function deleteFormation(id){

if(!confirm("Supprimer cette formation ?"))
return;

formations=
formations.filter(x=>x.id!==id);

universities.forEach(u=>{
u.formations=
u.formations.filter(x=>x!==id);
});

saveAll();

refreshAdmin();
renderFormations();
renderUniversities();

}


/* =========================================================
   ADMIN — ACTUALITÉS
   ========================================================= */

function addNews(){

const title =
document.getElementById("nTitle").value.trim();

if(!title){

alert("Le titre est obligatoire.");

return;

}


const item={

id:"n_"+Date.now(),

title,

category:
document.getElementById("nCategory").value.trim(),

date:
document.getElementById("nDate").value.trim(),

description:
document.getElementById("nDescription").value.trim(),

link:
document.getElementById("nLink").value.trim(),

status:
document.getElementById("nStatus").value

};


news.unshift(item);

saveAll();

clearInputs([
"nTitle",
"nCategory",
"nDate",
"nDescription",
"nLink"
]);

refreshAdmin();
renderNews();

alert("Actualité ajoutée.");

}


function renderNewsAdmin(){

const body =
document.getElementById("newsAdminTable");

body.innerHTML =
news.map(n=>`

<tr>

<td>${escapeHTML(n.title)}</td>

<td>${escapeHTML(n.category)}</td>

<td>${escapeHTML(n.date)}</td>

<td>
${n.status==="verified"
?"✅ Vérifié"
:"⚠️ À vérifier"}
</td>

<td>

<div class="admin-actions">

${
n.status!=="verified"

?

`<button
class="small-btn publish"
onclick="verifyNews('${n.id}')">
✓
</button>`

:""

}

<button
class="small-btn delete"
onclick="deleteNews('${n.id}')">
🗑
</button>

</div>

</td>

</tr>

`).join("");

}


function verifyNews(id){

const n =
news.find(x=>x.id===id);

if(!n)return;

n.status="verified";

saveAll();
refreshAdmin();
renderNews();

}


function deleteNews(id){

if(!confirm("Supprimer cette actualité ?"))
return;

news=
news.filter(x=>x.id!==id);

saveAll();

refreshAdmin();
renderNews();

}


/* =========================================================
   EXPORT / RESET
   ========================================================= */

function exportData(){

const data={
exportDate:new Date().toISOString(),
universities,
formations,
news
};


const blob =
new Blob(
[JSON.stringify(data,null,2)],
{type:"application/json"}
);


const url =
URL.createObjectURL(blob);

const a =
document.createElement("a");

a.href=url;

a.download=
"assistant-postbac-mali-data.json";

a.click();

URL.revokeObjectURL(url);

}


function resetData(){

if(!confirm(
"Restaurer les données initiales ?"
))
return;


universities=
structuredClone(defaultUniversities);

formations=
structuredClone(defaultFormations);

news=
structuredClone(defaultNews);

saveAll();

refreshAdmin();

renderUniversities();
renderFormations();
renderNews();

alert("Données restaurées.");

}


/* =========================================================
   UTILITAIRES
   ========================================================= */

function clearInputs(ids){

ids.forEach(id=>{

const el =
document.getElementById(id);

if(el)
el.value="";

});

}


function escapeHTML(value){

return String(value??"")
.replaceAll("&","&amp;")
.replaceAll("<","&lt;")
.replaceAll(">","&gt;")
.replaceAll('"',"&quot;")
.replaceAll("'","&#039;");

}


function safeURL(url){

if(!url)
return "#";

try{

const u=
new URL(url);

if(
u.protocol==="https:" ||
u.protocol==="http:"
){

return u.href;

}

return "#";

}catch{

return "#";

}

}


/* =========================================================
   INITIALISATION
   ========================================================= */

document.getElementById("year")
.textContent=
new Date().getFullYear();

renderUniversities();
renderFormations();
renderJobs();
renderNews();
renderChecklist();

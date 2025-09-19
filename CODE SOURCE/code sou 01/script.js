const formations = {
   "A7SAN STRIMR": "ILYASSS LMAMKII1",
      "TSMA3 SMIYTO TFKR F PISRI ": "PISRI",
      "YASKONO FI LBAHRY WA YOHIBOHO NASS": "SPONJ BOPP",
      "A7SAN SAHAFA F MGHRIBB": "CHOF TV",
      "O9SIMO AN A9OLA LHA9": "3LALE L9ADOUS",
      "A7SANE 3TSAA ": "CHAB L ARBY",
      "A7SN DEVLOPER": "FOAD CODE",
      "A7SANE ECOLE": "SOULI CODE"
    };


const codes = {};
for (let nom in formations) {
  codes[formations[nom]] = nom;
}

let score = 0;
let total = 0;
let codeChoisi = "";

function normaliserTexte(texte) {
  return texte
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function nouvelleQuestion() {
  const tousLesCodes = Object.keys(codes);
  const aleatoire = Math.floor(Math.random() * tousLesCodes.length);
  codeChoisi = tousLesCodes[aleatoire];
  document.getElementById("question").innerText =
    `À quelle formation correspond le code : "${codeChoisi}" ?`;
  document.getElementById("reponse").value = "";
  document.getElementById("feedback").innerText = "";
}

function valider() {
  const reponse = document.getElementById("reponse").value;
  const bonneFormation = codes[codeChoisi];
  total++;

  if (normaliserTexte(reponse) === normaliserTexte(bonneFormation)) {
    score++;
    document.getElementById("feedback").innerText = "✅ Bonne réponse !";
    document.getElementById("feedback").style.color = "green";
  } else {
    document.getElementById("feedback").innerText =
      `❌ Mauvaise réponse. La bonne réponse était : "${bonneFormation}".`;
    document.getElementById("feedback").style.color = "red";
  }

  document.getElementById("score").innerText = `📊 Score : ${score}/${total}`;

  setTimeout(nouvelleQuestion, 2000);
}

document.getElementById("btn-valider").addEventListener("click", valider);
document.getElementById("reponse").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    valider();
  }
});

nouvelleQuestion();

const sos = ["C1", "C3", "C2", "C1", "C8", "C1", "C3", "C2"];

const codeRecherche = prompt("Entrez le code de compétence à compter (ex: C1, C2, ...)");

if (codeRecherche) {
  const rar = codeRecherche.trim().toUpperCase();
  const occurrences = sos.filter(code => code === rar).length;
  console.log(`Le code "${rar}" apparaît ${occurrences} fois dans le tableau.`);
} else {
  console.log("Aucun code saisi.");
}
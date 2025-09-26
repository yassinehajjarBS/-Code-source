let code00 = ["C1", "C4", "C2", "C1", "C8", "C1", "C3", "C2"];
let code01 = prompt("Quel code de compétence voulez-vous compter ?");
let compteur = 0;
for (let code of code00) {
  if (code === code01) {
    compteur++;
  }
}
console.log(`Le code "${code01}" apparaît ${compteur} fois.`);
function creerCompteur() {
  let valeur = 0;
  return () => ++valeur;
}
const prochain = creerCompteur();
console.log(prochain(), prochain());
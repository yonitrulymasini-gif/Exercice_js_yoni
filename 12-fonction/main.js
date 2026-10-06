function calculerTTC(prixHT, taux) {
    prixHT = 100;
    taux = 20;
    return prixHT * (1 + taux / 100);
}

console.log(calculerTTC());
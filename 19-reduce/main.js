const panier = [{ prix: 10, quantite: 2 }, { prix: 7, quantite: 3 }];
// Complétez ici.
const total = panier.reduce((somme, produit) => {
    return somme + produit.prix * produit.quantite;
    },
0);
console.log(total);
const produits = [{ id: 1, prix: 20 }, { id: 2, prix: 80 }];
// Complétez ici.
const produit = produits.find(produit => produit.id === 2);
console.log(produit);
const prix = produits.some(produit => produit.prix > 50);
console.log(prix)
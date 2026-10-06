const produits = [ { nom: 'A', stock: 2 }, { nom: 'B', stock: 0 }, { nom: 'C', stock: 4 } ];

const nomsProduits = produits
    .filter(produit => produit.stock > 0)
    .map(produit => produit.nom);

console.log(nomsProduits);
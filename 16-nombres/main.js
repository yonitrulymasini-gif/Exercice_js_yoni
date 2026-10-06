const prix = 12.345;

const prixArrondi = Math.round(prix * 100) / 100;
const formateurPrix = new Intl.NumberFormat('fr-FR', {
  style: 'currency',
  currency: 'EUR',
});

console.log(formateurPrix.format(prixArrondi));

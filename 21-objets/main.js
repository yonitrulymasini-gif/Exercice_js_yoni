const profil = { nom: 'Maya', role: 'membre' };
// Complétez ici.
const {nom , ville = "Inconnue"} = profil

const nouveauprofil = {
    ...profil,
    role: 'admin'
};

console.log(nom, ville);
console.log(nouveauprofil);
console.log(profil.role);
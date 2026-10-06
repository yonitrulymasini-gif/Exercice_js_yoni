const age = 16;
//Moins de 12 ans : 5 € ; 12 à 17 ans : 8 € ; à partir de 18 ans : 12 €. Affichez le tarif pour 16 ans.
if (age<=12) {
    console.log("5€")
} else if (age > 12 || age < 17) {
    console.log("8€")
} else if (age > 18) {
    console.log("12€")
};
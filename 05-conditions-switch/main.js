const statut = 'expédie';
switch (statut) {
    case 'expédie':
        console.log('Votre commande a été expédiée');
        break;
    case 'En livraison':
        console.log('Votre commande est en livraison');
        break;
    case 'Nouveau':
        console.log('Vous avez une nouvelle commande');
        break;
    case 'Livré':
        console.log('Votre commande a été livrée');
        break;
    default:
        console.log('Statut inconnu');
}
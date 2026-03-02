* JS

function simuler() {

    // Récupération des valeurs
    let budget = parseFloat(document.getElementById("budget").value);
    let cpc = parseFloat(document.getElementById("cpc").value);
    let conversion = parseFloat(document.getElementById("conversion").value) / 100;
    let panier = parseFloat(document.getElementById("panier").value);
    let retention = parseFloat(document.getElementById("retention").value) / 100;

    // Vérification simple
    if (!budget || !cpc || !conversion || !panier) {
        alert("Merci de remplir tous les champs !");
        return;
    }

    // Calculs
    let clics = budget / cpc;
    let clients = clics * conversion;
    let ca = clients * panier;
    let ca_total = ca + (ca * retention);
    let roi = ((ca_total - budget) / budget) * 100;

    // Affichage
    document.getElementById("resultats").innerHTML = `
        <h3>Résultats :</h3>
        <p>Clics estimés : ${clics.toFixed(0)}</p>
        <p>Clients estimés : ${clients.toFixed(0)}</p>
        <p>Chiffre d'affaires estimé : ${ca_total.toFixed(2)} MAD</p>
        <p>ROI : ${roi.toFixed(2)} %</p>
    `;
}



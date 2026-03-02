* JS



function simuler() {



&nbsp; const budget = parseFloat(document.getElementById("budget").value);

&nbsp; const cpc = parseFloat(document.getElementById("cpc").value);

&nbsp; const conversion = parseFloat(document.getElementById("conversion").value) / 100;

&nbsp; const panier = parseFloat(document.getElementById("panier").value);

&nbsp; const retention = parseFloat(document.getElementById("retention").value) / 100;



&nbsp; if(!budget || !cpc || !conversion || !panier || !retention){

&nbsp;   alert("Veuillez remplir tous les champs.");

&nbsp;   return;

&nbsp; }



&nbsp; function calculerStrategie(budget, conversion, panier){

&nbsp;   const trafic = budget / cpc;

&nbsp;   const clients = trafic \* conversion;

&nbsp;   const ca = clients \* panier;

&nbsp;   const cac = budget / clients;

&nbsp;   const roi = ((ca - budget) / budget) \* 100;

&nbsp;   return {trafic, ca, cac, roi};

&nbsp; }



&nbsp; const strategieA = calculerStrategie(budget \* 1.2, conversion, panier);

&nbsp; const strategieB = calculerStrategie(budget, conversion \* 1.15, panier);

&nbsp; const strategieC = calculerStrategie(budget, conversion, panier \* 1.1);



&nbsp; const strategies = \[

&nbsp;   {nom: "Augmentation Budget", ...strategieA},

&nbsp;   {nom: "Optimisation Conversion", ...strategieB},

&nbsp;   {nom: "Augmentation Panier Moyen", ...strategieC}

&nbsp; ];



&nbsp; strategies.sort((a,b)=> b.roi - a.roi);



&nbsp; let output = "<h3>Résultats :</h3>";



&nbsp; strategies.forEach(s=>{

&nbsp;   output += `

&nbsp;     <p><strong>${s.nom}</strong><br>

&nbsp;     Trafic : ${Math.round(s.trafic)} visiteurs<br>

&nbsp;     CA : ${Math.round(s.ca)} MAD<br>

&nbsp;     CAC : ${Math.round(s.cac)} MAD<br>

&nbsp;     ROI : ${s.roi.toFixed(2)} %</p>

&nbsp;   `;

&nbsp; });



&nbsp; output += `<h3>Stratégie la plus rentable : ${strategies\[0].nom}</h3>`;



&nbsp; if(strategies\[0].nom === "Optimisation Conversion"){

&nbsp;   output += `<p>Analyse : L’amélioration du taux de conversion maximise la rentabilité sans augmenter le budget, ce qui améliore directement le ROI.</p>`;

&nbsp; }

&nbsp; else if(strategies\[0].nom === "Augmentation Budget"){

&nbsp;   output += `<p>Analyse : L’augmentation du budget permet de générer plus de trafic mais augmente aussi les coûts d’acquisition.</p>`;

&nbsp; }

&nbsp; else{

&nbsp;   output += `<p>Analyse : L’augmentation du panier moyen améliore la valeur client et renforce la rentabilité globale.</p>`;

&nbsp; }



&nbsp; document.getElementById("resultats").innerHTML = output;

}


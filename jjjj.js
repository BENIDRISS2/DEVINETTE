     /*_____________________________________________________________________________________*/
// /**Soit le tableau var mois - [ 'janvier', février, mars, avril, mai, juin, juillet;

//     Retirer la dernière valeur du tableau moi
//     Afficher les valeurs du tableau en utilisant la méthode document.write
//     Ajouter la valeur «août » à la fin du tableau
//     Remplacer la valeur 'février' par février'
//     Afficher le nombre de valeurs du tableau en utilisant la méthode document.write
//     Afficher la troisième valeur du tableau

// Projet 1:

// Écrire un script en javascript pour un petit jeu « Deviner un nombre ».

// Le principe de ce jeu est le suivant :

// l’ordinateur choisit un nombre aléatoire entre 10 et 100.

// Le but est deviner ce nombre, quirere dans la zone de text.

// À chaque fois qu’on propose un nombre, sur l’est-à-dire sur l’est deviner est plus petit ou plus grand que ce-ci.

// Le nombre d’essai autorisé est de 10, l’utilisateur est averti chaque essai concernant le nombre d’essai restant

// Quand l’utilisateur gagne, sur l’ affiche le nombre de coups qu’il est un oreille.

// Le schémas suivant représente le résultat souhaité

// Lus utiles
// non définis

// Pièce-xilo : */
var mois = [ 'janvier',' février',' mars', 'avril',' mai',' juin', 'juillet'];
mois.pop();
mois.push('Aout');
console.log(mois);
for(let i=0 ;  i<mois.length;i++){
document.write(mois[i]+"<br>")
 
 }
 // J'Affiche le nombre de valeurs du tableau
   document.write("Nombre de valeurs dans le tableau : " + mois.length);

 
      
      
      //ESSAYER DE Générer un nombre aléatoire entre 10 et 100
        const nombretour = Math.floor(Math.random() * 91) + 10;
        console.log('Nombre aléatoire pour test: ' + nombretour);
        let essaifautil = 10; 
        const submit = document.querySelector('button');
        const input = document.getElementById('input');
        const message = document.getElementById('my-sms');
        const essaisrestan = document.getElementById('essais-restan');

        submit.addEventListener('click', function() {
            const nombreessai = parseInt(input.value, 10);
            if (isNaN(nombreessai)) {
                message.innerHTML = '<span style="color:red;">Veuillez saisir un nombre</span>';
                return; // Sortir de la fonction si ce n'est pas un nombre
            }

            essaifautil--;
            essaisrestan.innerHTML = essaifautil; 

            if (nombreessai === nombretour) {
                message.innerHTML = `<span style="color:green;">FÉLICITATION, vous avez deviné le nombre en ${10 - essaifautil} tentatives</span>`;
                submit.disabled = true; 
            } else if (nombreessai > nombretour) {
                message.innerHTML = '<span style="color:red;">Votre nombre est trop grand</span>';
            } else {
                message.innerHTML = '<span style="color:blue;">Votre nombre est trop petit</span>';
            }

            if (essaifautil === 0 && nombreessai !== nombretour) {
                message.innerHTML = `<span style="color:red;">Désolé, vous avez épuisé tous vos essais. Le nombre était ${nombretour}.</span>`;
                submit.disabled = true; 
            }
        });





// function name() {





//     // const roundnumber = Math.floor(Math.random()*91)+10;
//     // let esaisi =0;
//     // const maxmum =10;
//     // while (esaisi<maxmum) {
//     //     const saisi =  (prompt('sisissez un nombre'))
//     //     esaisi++;

//     //     console.log(saisi)
//     //     console.log(roundnumber)
//     //     const nombresaisi= parseInt(saisi);
//     //     console.log(nombresaisi)
//     //     if(isNaN(nombresaisi)){
//     //         alert('veuillez saisir un nombre')
//     //     }
//     //     else if(nombresaisi>=roundnumber){
//     //         alert('votre nombre est tres grand')
//     //     }
//     //     else if(nombresaisi <= roundnumber) {
//     //         alert('votre nombre est tres petit')
//     //     } else {
//     //         alert(`Félicitations ! Vous avez deviné le nombre en ${esaisi} tentatives`);
//     //      break;
//     //     }

//     //     if(esaisi===maxmum){
//     //         alert('Désolé, vous avez atteint le nombre maximum de tentatives.')

//     //     };
//     // }
//     let submit = document.querySelector('button');
//     let caseremplo= document.getElementById('input');
//     let nombreessai= document.querySelector('span');

   

//     submit.addEventListener('click',
//     function resultat(){
//     let saisi=0;
//     const maximum=10;
  
//     var resultat=document.querySelector('strong');
//     let caseremploVa = parseInt(caseremplo.value, 10);// Récupérer la valeur de l'input et la convertir en nombre
//     console.log(caseremploVa)
//     let roundnombre =Math.floor(Math.random()*91)+10;

//         //nombre de la machine et convertir en entier

//         while(saisi<maximum){
//             resultat.innerHTML='<span style="color: red;">saisissez un nombre</span>'
//             saisi++;
//             nombreessai.innerHTML=saisi.lenght;
//             // const nombresaisi=parseInt()
//             if(isNaN(caseremploVa)){
//                 resultat.innerHTML='<span style="color: red;">veuillez saisir un nombre</span>'}


//                 else if(caseremploVa>=roundnombre){
//                     resultat.innerHTML='<span style="color: red;">votre nombre est tres grand</span>'
//                         }
//                         else if(caseremploVa <=roundnombre) {
//                             resultat.innerHTML='<span style="color: blue;">votre nombre est tres petit</span>'
//                         } else {
//                             resultat.innerHTML=`<span style="color: green;">Félicitations ! Vous avez deviné le nombre en ${saisi} tentatives</span>`;
//                          break;
//                         }
                
                        
                

//         }


//     }
// ) 



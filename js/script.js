/*
1. Chiedo di inserire l'email per giocare
2. Verifico se l'email è in lista (nell'array)
3. Se l'email non è nell'array chiedo di aggiungerlo per giocare altrimenti lo invito ad uscire
4. Se decide di aggiungerlo inserisco l'email nell'array e lo faccio giocare, altrimenti gli mostro un messaggio che mi dispiace
5. Se gioca invito a cliccare per lanciare i dadi
6. Stampo sui dati tutti i dati generati randomicamente
7. Verifico il risultato e mostro un messaggio di win oppure lose con un pulsante per riprovare
*/

const listaEmail = ['info@pietrobrighella.com'];
const btnEmail = document.getElementById('btnVerificaEmail');
btnEmail.addEventListener('click', verificaEmail);

function verificaEmail() {
    let myAlert = document.getElementById('myAlert');
    let warningAlert = document.getElementById('warningAlert');
    const emailInserita = document.getElementById('emailUtente').value;
    for (let i = 0; i < listaEmail.length; i++){
        let check = false;
        if (emailInserita === listaEmail[i]){
            check = true;
            let lancioDadiUtente = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
            console.log(lancioDadiUtente);
            let lancioDadiComputer = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
            if (lancioDadiUtente > lancioDadiComputer){
                console.log('You Win!');
            } else if (lancioDadiUtente < lancioDadiComputer){
                console.log('You Lose!');
            } else {
                console.log('Pareggio');
            }
        } else {
            const newAlert = document.createElement('div');
            newAlert.classList.add('alert','alert-warning','d-grid');
            newAlert.innerHTML = `
            Clicca sul pulsante per registrarti e giocare.
            <button class="btn btn-warning">Registrati ora!</button>
            `;
            myAlert.append(newAlert);
            const newWarningAlert = document.createElement('div');
            newWarningAlert.classList.add('alert','alert-danger');
            newWarningAlert.innerHTML = `
            <div class="alert alert-danger mt-3">Spiacente! <strong>${emailInserita}</strong> non è presente.</div>
            `
            warningAlert.append(newWarningAlert);
        }
    }
}
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

function reload() {
    location.reload();
  }

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
                let myGame = document.querySelector('.myContainer');
                myGame.innerHTML = `
                <div class="row row-cols-2 text-center">
                    <div class="col display-1 fw-bold bg-info">You<br>${lancioDadiUtente}</div>
                    <div class="col display-1 fw-bold bg-secondary text-light">Cpu<br>${lancioDadiComputer}</div>
                </div>
                <div class="row alert alert-success mt-3">Hai vinto!</div>
                <div class="row">
                    <button id="btnGiocaDiNuovo" class="btn btn-primary btn-lg mb-3">Rilancia di nuovo i dadi</button>
                </div>
                `
                const btnGiocaDiNuovo = document.getElementById('btnGiocaDiNuovo');
                btnGiocaDiNuovo.addEventListener('click', reload);
            } else if (lancioDadiUtente < lancioDadiComputer){
                let myGame = document.querySelector('.myContainer');
                myGame.innerHTML = `
                <div class="row row-cols-2 text-center">
                    <div class="col display-1 fw-bold bg-info">You<br>${lancioDadiUtente}</div>
                    <div class="col display-1 fw-bold bg-secondary text-light">Cpu<br>${lancioDadiComputer}</div>
                </div>
                <div class="row alert alert-danger mt-3">Hai perso!</div>
                <div class="row">
                    <button id="btnGiocaDiNuovo" class="btn btn-primary btn-lg mb-3">Rilancia di nuovo i dadi</button>
                </div>
                `
                const btnGiocaDiNuovo = document.getElementById('btnGiocaDiNuovo');
                btnGiocaDiNuovo.addEventListener('click', reload);
            } else {
                let myGame = document.querySelector('.myContainer');
                myGame.innerHTML = `
                <div class="row row-cols-2 text-center">
                    <div class="col display-1 fw-bold bg-info">You<br>${lancioDadiUtente}</div>
                    <div class="col display-1 fw-bold bg-secondary text-light">Cpu<br>${lancioDadiComputer}</div>
                </div>
                <div class="row alert alert-warning mt-3">Ops! Pareggio ...</div>
                <div class="row">
                    <button id="btnGiocaDiNuovo" class="btn btn-primary btn-lg mb-3">Rilancia di nuovo i dadi</button>
                </div>
                `
                const btnGiocaDiNuovo = document.getElementById('btnGiocaDiNuovo');
                btnGiocaDiNuovo.addEventListener('click', reload);
            }
        } else {
            const newAlert = document.createElement('div');
            newAlert.classList.add('alert','alert-warning','d-grid');
            newAlert.innerHTML = `
            Spiacente, la tua email non è presente!<br>
            Clicca sul pulsante per registrarti e giocare.
            <button id="btnRegistra" class="btn btn-warning mt-3">Registra l'email e riprova</button>
            `
            myAlert.append(newAlert);
            
            let btnRegistra = document.getElementById('btnRegistra');

            btnRegistra.addEventListener('click', function nuovaEmail() {listaEmail.push(emailInserita);}, reload);
        }
    }
}

console.log(listaEmail);
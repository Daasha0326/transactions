const clients = [
    {
        id: 1,
        nom: "Mane",
        prenom: "Adama",
        number: "771233445",
        mail: "cou@gmail.com",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        transactions: {
            sens: [1, -1, -1, 1],
            montants: [14000, 3000, 2000, 3500]
        }
    },
    {
        id: 2,
        nom: "Mane",
        prenom: "Bineta",
        number: "771236789",
        mail: "bsr@gmail.com",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHdvbWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        transactions: {
            sens: [1, -1, 1],
            montants: [10000, 15000, 12500]
        }
    },
    {
        id: 3,
        nom: "Ndiaye",
        prenom: "Maimouna",
        number: "771233456",
        mail: "bjr@gmail.com",
        image: "https://images.unsplash.com/photo-1579610520129-963c74781ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        transactions: {
            sens: [1, -1],
            montants: [30000, 4000]
        }
    }
];


const lastname = document.querySelector('#lastname');
const firstname = document.querySelector('#firstname');
const phone = document.querySelector('#phone');
const email = document.querySelector('#email');
const photo = document.querySelector('img');
const body = document.querySelector('tbody');
const transactions = document.querySelector(".transactions tbody");
const count = document.querySelector("code");
const btn = document.getElementById("btnDetail");
const next = document.querySelector(".navigation .next");
let solde = document.querySelector('#solde');
let form = document.querySelector('.form');
let save = form.children[2];
let bt = document.querySelector('.bout')
let select = document.querySelector('#trans');
let input = document.querySelector('#mnt');
let msg = document.querySelector('.non');
let trf = document.querySelector('.transfert');
let search = document.querySelector('#searchInput');
let icone = document.querySelector('.fa-solid');

const saveClient = document.querySelector('.save')
const closeModal = document.querySelector('.cancel')
const openModal = document.querySelector('.open-modal')
const addClientModal = document.querySelector('.modal-add-client')

const nom = document.querySelector('#nom')
const prenom = document.querySelector('#prenom')
const mail = document.querySelector('#mail')
const newPhone = document.querySelector('#new-tel')

var obj = [

]

// console.log(saveClient);
saveClient.addEventListener('click', () => {
    const firstName = prenom.value
    const lastName = nom.value
    const telephone = newPhone.value
    const email = mail.value

    const newClient = {
        id: clients[clients.length - 1].id + 1,
        nom: lastName,
        prenom: firstName,
        number: telephone,
        mail: email,
        solde: 0,
        transactions: {},
        image: "https://images.unsplash.com/photo-1606416132922-22ab37c1231e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8RmVtbWVzJTIwbm9pcmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    }

    clients.push(newClient)
})
saveClient.addEventListener('click', () => addClientModal.style.display = 'none')

bt.addEventListener('click', () => {

    for (let j = 0; j < obj.length; j++) {
        if (obj[j].indclient1 === i) {
            // console.log(clients[j])
            clients[i].transactions.montants.push(obj[j].montant)
            clients[i].transactions.sens.push(1)
            clients[obj[j].indclient2].transactions.montants.push(obj[j].montant)
            clients[obj[j].indclient2].transactions.sens.push(-1)
                //creerClients(clients[obj[i].indclient2])
            createTransaction(clients[i].transactions.montants, clients[i].transactions.sens, date)
        }

    }
    input.value = "";
    trf.value=""
    console.log(obj)
    solde.innerText = getSoldeByClient(clients[i])
    // console.log(clients[i].transactions.1]montants[clients[i].transactions.montants.length-1]);
})

trf.addEventListener('keyup', function () {
    const meth = trf.value;
    let resultat = clients.filter(item => item.number.includes(meth))
    let sugges = "";
    if (input != "") {
        resultat.forEach(resultatItem =>
            sugges += `
            <div class="sugges">${resultatItem.number}</div>
            `
        )
    } else {
        input.value = " "
    }
    document.getElementById("suggess").innerHTML = sugges
    let sugess = document.querySelectorAll(".sugges")
    sugess.forEach(su => {
        su.addEventListener('click', function () {
            const index = clients.findIndex(cl => cl.number == su.textContent)
            creerClients(clients[index])
        })
    });
})

search.addEventListener('keyup', function () {
    const input = search.value;
    console.log(input);
    let result = clients.filter(item => item.number.includes(input))

    console.log(result);

    let suggest = "";
    if (input != "") {
        result.forEach(resultItem =>
            suggest += `
            <div class="suggest">${resultItem.number}</div>
            `
        )
    }
    document.getElementById("suggests").innerHTML = suggest
    let suggests = document.querySelectorAll(".suggest")
    console.log(suggests);
    suggests.forEach(sug => {
        sug.addEventListener('click', function () {
            // creerClients(i)
            const index = clients.findIndex(cl => cl.number == sug.textContent)
            creerClients(clients[index])
        })
    });
})

icone.addEventListener('click', function () {
    const val = clients.find(client => client.number === trf.value)

    creerClients(val);
    createTransaction(val.transactions.montants, val.transactions.sens, '31/03/2023')
    solde.innerText = getSoldeByClient(val);
})


let i = Math.floor(Math.random() * clients.length);


function creerClients(client) {
    lastname.innerHTML = client.nom
    firstname.innerHTML = client.prenom
    phone.innerHTML = client.number
    email.innerHTML = client.mail
    photo.src = client.image
}
creerClients(clients[i]);
createTransaction(clients[i].transactions.montants, clients[i].transactions.sens, '31/03/2023')

btn.addEventListener('click', () => {
    if (form.style.display === 'none') {
        form.style.display = 'block'
    } else {
        form.style.display = 'none'
    }
})

const date = new Date().toLocaleDateString()

save.addEventListener('click', () => {
    msg.innerHTML = ' '
    if (input.value === '') {
        msg.innerHTML = 'Impossible'
    } else if (input.value < 500) {
        msg.innerHTML = 'Impossible'
    }

    else if (select.value == 'd') {
        if (trf.value === "") {
            clients[i].transactions.montants.push(parseFloat(input.value))
            clients[i].transactions.sens.push(1)
            solde.innerText = getSoldeByClient(clients[i])
            createTransaction(clients[i].transactions.montants, clients[i].transactions.sens, date)
            input.value = "";
        }
        else {
            const val = clients.find(client => client.number === trf.value)
            // console.log(val)
            if (val === undefined) {
                // yoné(clients[i], val, parseFloat(input.value));
                clients[i].transactions.sens.push(-1);
                clients[i].transactions.montants.push(parseFloat(input.value))
                createTransaction(clients[i].transactions.montants, clients[i].transactions.sens, date)
                solde.innerText = getSoldeByClient(clients[i])
                setTimeout(() => {
                    clients[i].transactions.sens.push(1);
                    clients[i].transactions.montants.push(parseFloat(input.value))
                    createTransaction(clients[i].transactions.montants, clients[i].transactions.sens, date)
                    solde.innerText = getSoldeByClient(clients[i])
                    input.value = "";
                }, 3000);

            }
            else {
                yoné(clients[i], val, parseFloat(input.value));
                obj.push({
                    indclient1: i,
                    indclient2: numIndice(val.number),
                    montant: parseFloat(input.value),
                })

                // msg.innerHTML = 'numero non valide';
            }
        }
    }

    else if (select.value == 'r') {
        if (getSoldeByClient(clients[i]) < input.value) {
            msg.innerHTML = 'solde insuffisant'
        } else {
            clients[i].transactions.montants.push(parseFloat(input.value))
            clients[i].transactions.sens.push(-1)
            input.value = "";
        }
        solde.innerText = getSoldeByClient(clients[i])
        createTransaction(clients[i].transactions.montants, clients[i].transactions.sens, '31/03/2023')
    }
    
})
save.addEventListener('click', () => bt.style.display = 'block')


solde.innerText = getSoldeByClient(clients[i])

next.addEventListener('click', () => {
    i = Math.floor(Math.random() * clients.length);
    if (clients.length > i) {
        creerClients(clients[i])
        createTransaction(clients[i].transactions.montants, clients[i].transactions.sens, '31/03/2023')
        solde.innerText = getSoldeByClient(clients[i])
    }

})

function createTransaction(montants, sens, date) {
    body.innerHTML = ''
    count.innerHTML = montants.length
    for (let i = 0; i < montants.length; i++) {
        // let trbody = document.querySelector("tbody")
        let trans = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = i
        // td1.appendChild(trash)

        // console.log(td1);
        let td2 = document.createElement("td");

        td2.innerText = date

        let td3 = document.createElement("td");

        td3.innerText = sens[i] == 1 ? "depot" : "retrait";
        if (td3.innerText == "depot") {
            td3.style.color = 'chartreuse'

        } else {
            td3.style.color = 'mediumBlue'

        }

        let td4 = document.createElement("td");

        td4.innerText = montants[i]

        trans.append(td1, td2, td3, td4)
        body.appendChild(trans)
    }
}
function getSoldeByClient(client) {
    let solde = 0;
    for (let i = 0; i < client.transactions.montants.length; i++) {
        solde = solde + client.transactions.montants[i] * client.transactions.sens[i]
    }
    return solde

}
console.log(getSoldeByClient(clients[1]));


function yoné(client1, client2, somme) {
    client1.transactions.montants.push(somme);
    client1.transactions.sens.push(-1)
    client2.transactions.montants.push(somme);
    client2.transactions.sens.push(1)
    createTransaction(client1.transactions.montants, client1.transactions.sens, date)
    // createTransaction(client2.transactions.montants, client2.transactions.sens, date)
    solde.innerText = parseFloat(solde.innerText) - somme;
}
function numIndice(numero) {
    for (let i = 0; i < clients.length; i++) {
        if (clients[i].number === numero) {
            return i;
        }
    }
    return -1;
}

openModal.addEventListener('click', () => addClientModal.style.display = 'block')
closeModal.addEventListener('click', () => addClientModal.style.display = 'none')

function annulerTransac(montans) {
    for (let i = 0; i < montans.length; i++) {
        if (select.value == 'd') {
            if (trf.value === "") {
                clients[i].transactions.montants.push(parseFloat(input.value))
                clients[i].transactions.sens.push(1)
                solde.innerText = getSoldeByClient(clients[i])
                createTransaction(clients[i].transactions.montants, clients[i].transactions.sens, date)
                input.value = "";
            }
            else {
                const val = clients.find(client => client.number === trf.value)
                if (val) {
                    yoné(clients[i], val, parseFloat(input.value));
                    input.value = "";
                }
            }
        }
        else {

        }
    }
}
// trash.addEventListener('click', ()=>{
//     if (sens[i]) {

//     }
// })

// else if (select.value == 'd' && trf.value !=='') {
//     let b = trf.value
//     let bb=verExistNum(b)
//     if (bb===false) {
//         msg.innerHTML='ce numero existe pas'
//         // alert(`ce numero n'existe pas`)
//     }
//     else
//     {
//         let a=numIndice(b)
//         console.log(a)
//         // if (a==clients[i].number) {
//         //     return i;
//         // }


//     }
// }
// console.log(a);
// let a=numIndice(numero)
// function verExistNum(numero) {
//     for (let i = 0; i < clients.length; i++) {
//         // if (select.value == 'd' && input.value == 'number') {
//         //     clients[i].transactions.montants.push(parseFloat(input.value))
//         //     clients[i].transactions.push(-1)
//         // }
//         // else if (!phone) {
//         //     msg.innerHTML = 'IMPOSSIBLE'
//         // }
//         if (clients[i].number===numero) {
//             return true;
//         }
//     }
//     return false;
// }


// if (verExistNum(numero)==true) {

    // }
    // console.log(input);
    // if () {

    // }
    // else if (select.value == 'd' && trf.value==='') {
    //     clients[i].transactions.montants.push(parseFloat(input.value))
    //     clients[i].transactions.sens.push(1)
    //     solde.innerText = getSoldeByClient(clients[i])
    //     createTransaction(clients[i].transactions.montants, clients[i].transactions.sens, '31/03/2023')


    // }

    // console.log(clients[0].transactions.sens[0]);
// console.log(clients[0].transactions.montants[0]);

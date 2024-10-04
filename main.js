const form = document.getElementById('form-contatos');
const nomes = [];
const numeros = []
let linhas ='';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionarContatos();
    atualizarContatos();
})

function adicionarContatos(){
    const nomeContato = document.getElementById('nome-contato');
    const numeroContato = document.getElementById('numero-contato');
    if (nomes.includes(nomeContato.value)) {
        alert(`O nome: ${nomeContato.value} já existe na agenda!`)
    }
    else{
        nomes.push(nomeContato.value);
        numeros.push(numeroContato.value);

        let linha = '<tr>';
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${numeroContato.value}</td>`;
        linha += '</tr>';
        linhas += linha
    }
    nomeContato.value='';
    numeroContato.value='';
}

function atualizarContatos(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
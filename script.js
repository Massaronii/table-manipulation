document
  .getElementById("formCliente")
  .addEventListener("submit", function (event) {
    event.preventDefault()

    let nome = document.getElementById("nome").value
    let sobrenome = document.getElementById("sobrenome").value
    let dataNascimento = document.getElementById("dataNascimento").value
    let email = document.getElementById("email").value
    let endereco = document.getElementById("endereco").value

    let nomeCompleto = nome + " " + sobrenome

    adicionarNaTabela(nomeCompleto, dataNascimento, email, endereco)

    alert("Cliente adicionado com sucesso!")

    document.getElementById("formCliente").reset()
  })

function adicionarNaTabela(nome, dataNascimento, email, endereco) {
  let tabela = document.getElementById("tabelaClientes")

  let novaLinha = tabela.insertRow()

  novaLinha.insertCell(0).textContent = tabela.rows.length 
  novaLinha.insertCell(1).textContent = nome
  novaLinha.insertCell(2).textContent = dataNascimento
  novaLinha.insertCell(3).textContent = email
  novaLinha.insertCell(4).textContent = endereco
}

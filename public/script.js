fetch("http://localhost:3000/api/dados")
    .then(response => response.json())
    .then(data => {
        const lista = document.getElementById("lista");
        data.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.nome}: ${item.descricao}`;
            lista.appendChild(li);
        });
    })
    .catch(error => console.error("Erro ao buscar dados:", error));

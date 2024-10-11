let itens = [];

const carregarDiv = (cs) => {
    const div = document.getElementById("itensDiv");

    let properties = Object.keys(cs[0]).slice(2);
    let tableColumns = properties
        .map((p) => `<th>${p.charAt(0).toUpperCase() + p.slice(1)}</th>`)
        .join("");
    let tableRows = cs.map((c) => {
        let row = "<tr>";
        for (let property of properties) {
            row += `<td>${c[property]}</td>`;
        }
        return row + "</tr>";
    });
    let tableHtml = `<table>
        <thead>
            <tr>${tableColumns}</tr>
        </thead>
        <tbody>
            ${tableRows}
        </tbody>
      </table>`;

    div.innerHTML = tableHtml;
};

function carregarItens(items = "beers") {
    fetch("https://random-data-api.com/api/v2/" + items + "?size=3")
        .then((res) => res.json())
        .then((json) => carregarDiv(json))
        .catch(
            (err) =>
                (document.getElementById("itensDiv").innerHTML = `Fudeu... ${err}`)
        );

    document.getElementById("itensDiv").innerHTML = `Fazendo requisição`;
}

let botao = document.getElementById("botaoCarregar");

botao.addEventListener("click", () => carregarItens("banks"));
let items = [];

const carregarDiv = (cs) => {
    const div = document.getElementById("itensDiv");

    let properties = Object.keys(cs[0]).slice(2);
    let tableColumns = properties.map((p) => `<th>${p.charAt(0).toUpperCase() + p.slice(1)}</th>`).join("");
    let tableRows = cs.map(c => {
        let row = '<tr>';
        for(let property of properties){
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

async function carregarItens(item = 'beers') {
    try {
        let res = await fetch(
            `https://random-data-api.com/api/v2/${item}?size=3`
        );

        items = await res.json();

        carregarDiv(items);
    } catch (err) {
        document.getElementById("itensDiv").innerHTML = "Fudeu...";
    }
}
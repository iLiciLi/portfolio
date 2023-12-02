function renderVestinu(v) {
    const card = document.createElement('div');
    card.className = `card card-body d-flex flex-column align-items-center gap-3 ${v.class} col-6 col-sm-4 col-md-4 col-lg-3`;
    
    const cardContent = `
        <img style="height: 100px;width: auto;" src='${v.slika}' alt='${v.naziv} logo' />
        <div style="color: white;" class='card-text naslovKartice'>${v.naziv}</div>
        <div style="color: white;" class='card-text'>Ocena: ${v.ocena}</div>
        <div style="color: white;" class='card-text'>Iskustvo: ${v.godina_iskustva} godine</div>
    `;
    
    card.innerHTML = cardContent;

    return card;
}

function renderVestine(data, containerSelector) {
    const container = document.querySelector(containerSelector);

    data.forEach((item) => {
        const card = renderVestinu(item);
        container.appendChild(card);
    });
}


document.addEventListener('DOMContentLoaded', function () {
    renderVestine(vestineData, '#vestineContainer');
});
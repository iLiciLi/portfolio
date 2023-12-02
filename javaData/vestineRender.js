function renderVestinu(v) {
    const card = document.createElement('div');
    card.className = `card card-body d-flex flex-column align-items-center gap-3 col-6 col-sm-4 col-md-4 col-lg-3`;
    card.id = `${v.Id}`
    
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


function filtriranjeVestina(data)
{
    var currentBrojZvezdica = document.getElementById("filterZvezdica").value;

    data.forEach((item)=>{
        if(item.ocena<currentBrojZvezdica)
        {
            document.getElementById(item.Id).style.opacity=0;
        }
        else if(item.ocena>=currentBrojZvezdica)
        {
            document.getElementById(item.Id).style.opacity=1;
        }
    })
}

function restartovanjeVestina(data)
{
    document.getElementById('filterZvezdica').value = 0;
    document.getElementById('outputID').innerHTML = '0'
    filtriranjeVestina(data);
}


document.addEventListener('DOMContentLoaded', function () {
    renderVestine(vestineData, '#vestineContainer');
});
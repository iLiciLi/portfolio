function renderVestinu(v)
{
    $kartica = $(`<div class='card col></div>`);
    $pozadina = $(`<div class='card-body d-flex flex-column align-items-center'></div>`);
    $pozadina.prepend(`<img id='htmlSlika' src=v['slika'] alt=v['naziv'] +' logo' />`);
    $pozadina.text(v['naziv']);
    $pozadina.append(`<div class='card-body d-flex flex-column align-items-center'>'Ocena : ' + v['ocena']</div>`);
    $pozadina.append(`<div class='card-body d-flex flex-column align-items-center'>'Iskustvo : ' + v['godina_iskustva']</div>`);
    $kartica.append($pozadina);
    return $kartica;
}

function renderVestineL(putanja,vestine)
{
    vestine.map(vestina=>$(putanja).append(renderVestinu(vestina)));
}
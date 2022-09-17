document.forms[0].addEventListener("submit", function (e)  {

    if ((parseFloat(document.getElementById("iSalario").value) <=0) || document.
    getElementById("iSalario").value === "") {
        window.alert("O Salário deve ser maior que zero!");
        document.getElementById("iSalario").focues(); e.preventDefalult();

    }

});


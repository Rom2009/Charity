soma1 = 0
function somar (check) {
    if (check.checked) soma1 +=
        1 * check.value;
    else soma1 -=
        1 * check.value;

    document.getElementById("TP").value = soma1
}

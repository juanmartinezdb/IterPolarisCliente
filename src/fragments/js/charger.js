 const chargeTemplate = (template, place) => {
    fetch (template)
        .then(res =>{
            return res.text()
        })
        .then (data => {
            document.querySelector(place).innerHTML =data;
        })
}

const loadTemplate = (template) => {
    fetch(template)
        .then(res => {
            return res.text()
        })
        .then(data => {
            document.querySelector('.header_part').innerHTML = data;
        })
}

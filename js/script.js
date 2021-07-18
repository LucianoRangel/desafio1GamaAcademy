const form = document.getElementById('form')

form.addEventListener('submit',(e) =>{
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    if ((nome === null) || (nome === ''))
    {
        alert("Digite algum nome para ser cadastrado!")
        document.getElementById('nome').focus();
        return
    }
    let email = document.getElementById('email').value;
    if ((email === null) || (email === '') || (email.indexOf('@') == -1) || (email.indexOf('.') == -1))
    {
        alert("Digite um e-mail válido!");
        document.getElementById('email').focus();
        return
    }
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data);
    localStorage.setItem('lead',convertData);
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('nome').placeholder = "Insira seu nome!";
    document.getElementById('email').placeholder = "Insira seu e-mail!";
    document.getElementById('nome').focus();
})
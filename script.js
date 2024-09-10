document.getElementById('formEndereco').addEventListener('submit', async (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;
    
    const addressData = {
        nome,
        cpf,
        telefone,
       
    };
    try {
        const response = await fetch('http://localhost:3000/api/enderecos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addressData)
        });
    
        const result = await response.json();
    
        if (response.ok) {
            document.getElementById('message').innerText = 'Endereço enviado com sucesso!';
            document.getElementById('formEndereco').reset();
        } else {
            document.getElementById('message').innerText = `Erro: ${result.message}`;
        }
    } catch (error) {
        document.getElementById('message').innerText = 'Erro na comunicação com o servidor.';
    }    
});

   
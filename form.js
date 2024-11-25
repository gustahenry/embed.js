(function () {

  let source;
  const scripts = document.querySelectorAll('script');
  
  scripts.forEach(script => {
    const src = script.src;
    if (src.includes('button.js')) { 
      const urlParams = new URLSearchParams(src.split('?')[1]);
      source = urlParams.get('source');
    }
  });

  // Função para criar o modal
  function createModal() {
    const modal = document.createElement('div');
    modal.innerHTML = `
      <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); display: flex; justify-content: center; align-items: center; z-index: 9999;">
        <div style="background: white; padding: 20px; border-radius: 8px; width: 100%; max-width: 400px; font-family: 'Roboto', sans-serif; position: relative;">
          <!-- Cabeçalho do modal com o botão de fechar -->
          <button id="close-modal" style="position: absolute; top: 10px; right: 10px; background: transparent; border: none; font-size: 18px; cursor: pointer;">&times;</button>
          
          <h3 style="text-align: center;">Contact Us</h3>
          
          <!-- Formulário de contato -->
          <form id="contact-form" style="max-width: 100%;">
            <div style="margin-bottom: 15px;">
              <label for="name" style="display: block; font-size: 14px; font-weight: bold;">Name</label>
              <input type="text" id="name" style="padding: 10px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px; font-family: inherit; width: 100%; box-sizing: border-box;" required />
            </div>
            <div style="margin-bottom: 15px;">
              <label for="phone" style="display: block; font-size: 14px; font-weight: bold;">Phone</label>
              <input
                type="text"
                id="phone"
                style="padding: 10px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px; font-family: inherit; width: 100%; box-sizing: border-box;"
                required
                maxlength="15"
                placeholder="(XX) XXXXX-XXXX"
              />
            </div>
            <button type="submit" style="width: 100%; padding: 10px; background-color: #007bff; color: white; border: none; border-radius: 4px; font-size: 14px; cursor: pointer;">Submit</button>
          </form>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    // Fecha o modal
    document.getElementById('close-modal').addEventListener('click', () => {
      modal.remove();
    });

    // Função para submeter o formulário
    document.getElementById('contact-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;

      try {
          // const apiUrl = 'http://localhost:8000';
        const apiUrl = 'http://92.112.176.242:8000';
        const response = await fetch(`${apiUrl}/api/submit-data`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, phone, source }), // Passa o valor de 'source' junto com os outros dados
        });

        if (!response.ok) {
          throw new Error('Submission failed.');
        }

        // alert('Data submitted successfully.');
        modal.remove();

        // Redireciona para o WhatsApp após o envio dos dados
        // const whatsappLink = `https://api.whatsapp.com/send/?phone=5511987170001&text=Ol%C3%A1%2C+vim+da+Home+Page+e+quero+informa%C3%A7%C3%B5es+de+Hipnose+Ericksoniana&type=phone_number&app_absent=0`;
        // window.location.href = whatsappLink; // Redireciona para o WhatsApp
      } catch (error) {
        alert('Error submitting data.');
      }
    });

    // Função para aplicar a máscara de telefone
    document.getElementById('phone').addEventListener('input', function (e) {
      let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não for número
      if (value.length > 11) value = value.slice(0, 11); // Limita a 11 números

      // Aplica a máscara
      if (value.length <= 10) {
        e.target.value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
      } else {
        e.target.value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
      }
    });
  }

  // Tornando a função acessível globalmente
  window.showModal = createModal;
})();

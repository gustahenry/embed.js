// (function () {
//   // Cria um botão no site
//   const button = document.createElement('button');
//   button.style.position = 'fixed';
//   button.style.bottom = '20px';
//   button.style.right = '20px';
//   button.style.width = '60px';
//   button.style.height = '60px';
//   button.style.border = 'none';
//   button.style.borderRadius = '50%';
//   button.style.background = '#25D366'; // Cor oficial do WhatsApp
//   button.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.2)';
//   button.style.cursor = 'pointer';
//   button.style.display = 'flex';
//   button.style.alignItems = 'center';
//   button.style.justifyContent = 'center';
//   button.style.zIndex = '9999'; // Garante que o botão fique no topo
//   document.body.appendChild(button);

//   // Adiciona o ícone do WhatsApp
//   const icon = document.createElement('img');
//   icon.src = 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'; // Ícone SVG do WhatsApp
//   icon.alt = 'WhatsApp Icon';
//   icon.style.width = '30px';
//   icon.style.height = '30px';
//   icon.style.objectFit = 'contain';
//   button.appendChild(icon);

//   // Adiciona o evento de clique
//   button.addEventListener('click', function () {
      
//       // const apiUrlEmbed = 'http://localhost:8000';
//       const apiUrlEmbed = 'https://cdn.jsdelivr.net/gh/gustahenry/embed.js';
//       const script = document.createElement('script');

//       script.src = `https://cdn.jsdelivr.net/gh/gustahenry/embed.js/modal.js`; // URL do modal.js
//       script.onload = function () {
//           // Exibe o modal quando carregado
//           if (typeof showModal === 'function') {
//               showModal();
//           }
//       };
//       document.body.appendChild(script);
//   });
// })();

(function () {
    // Parte 1: Criação do botão flutuante no site
    const button = document.createElement('button');
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
    button.style.width = '60px';
    button.style.height = '60px';
    button.style.border = 'none';
    button.style.borderRadius = '50%';
    button.style.background = '#25D366'; // Cor oficial do WhatsApp
    button.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.2)';
    button.style.cursor = 'pointer';
    button.style.display = 'flex';
    button.style.alignItems = 'center';
    button.style.justifyContent = 'center';
    button.style.zIndex = '9999'; // Garante que o botão fique no topo
    document.body.appendChild(button);
  
    // Adiciona o ícone do WhatsApp
    const icon = document.createElement('img');
    icon.src = 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'; // Ícone SVG do WhatsApp
    icon.alt = 'WhatsApp Icon';
    icon.style.width = '30px';
    icon.style.height = '30px';
    icon.style.objectFit = 'contain';
    button.appendChild(icon);
  
    // Parte 2: Função para criar o modal
    function createModal() {
      const modal = document.createElement('div');
      modal.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); display: flex; justify-content: center; align-items: center; z-index: 9999;">
          <div style="background: white; padding: 20px; border-radius: 8px; width: 100%; max-width: 400px; font-family: 'Roboto', sans-serif; position: relative;">
            <button id="close-modal" style="position: absolute; top: 10px; right: 10px; background: transparent; border: none; font-size: 18px; cursor: pointer;">&times;</button>
            <h3 style="text-align: center;">Contact Us</h3>
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
  
      // Submeter o formulário
      document.getElementById('contact-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
  
        try {
          const apiUrl = 'http://92.112.176.242:8000'; // Atualize conforme necessário
          const response = await fetch(`${apiUrl}/api/submit-data`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, phone }),
          });
  
          if (!response.ok) {
            throw new Error('Submission failed.');
          }
  
          modal.remove(); // Fecha o modal após o envio
  
          // Redirecionar para o WhatsApp
          const whatsappLink = `https://api.whatsapp.com/send/?phone=5511987170001&text=Ol%C3%A1%2C+enviei+meus+dados+e+gostaria+de+mais+informações&type=phone_number&app_absent=0`;
          window.location.href = whatsappLink;
        } catch (error) {
          alert('Error submitting data.');
        }
      });
  
      // Máscara de telefone
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
  
    // Tornando a função do modal acessível
    window.showModal = createModal;
  
    // Parte 3: Adiciona o evento de clique no botão
    button.addEventListener('click', function () {
      createModal(); // Chama diretamente o modal
    });
  })();
  



(function () {
  // Cria um botão no site
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

  // Adiciona o evento de clique
  button.addEventListener('click', function () {
      
      // const apiUrlEmbed = 'http://localhost:8000';
      const apiUrlEmbed = 'https://cdn.jsdelivr.net/gh/gustahenry/embed.js';
      const script = document.createElement('script');

      script.src = `https://cdn.jsdelivr.net/gh/gustahenry/embed.js/form2.js`; // URL do modal.js
      script.onload = function () {
          // Exibe o modal quando carregado
          if (typeof showModal === 'function') {
              showModal();
          }
      };
      document.body.appendChild(script);
  });
})();

  



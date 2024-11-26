
(function () {

  
    var source;
    const scripts = document.querySelectorAll('script');
    
    scripts.forEach(script => {
      const src = script.src;
      if (src.includes('embed.js')) { 
        const urlParams = new URLSearchParams(src.split('?')[1]);
        source = urlParams.get('source');
      }
    });
  
    console.log(source);
    // Cria um contêiner para o botão e a expansão
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.bottom = '20px';
    container.style.right = '20px';
    container.style.zIndex = '9999';
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'flex-end';
    container.style.overflow = 'hidden';
    container.style.width = '60px'; // Largura inicial do contêiner
    document.body.appendChild(container);
  
    // Cria a expansão (atrás do botão)
    const expansion = document.createElement('div');
    expansion.style.position = 'absolute';
    expansion.style.bottom = '0';
    expansion.style.right = '13px';
    expansion.style.height = '60px';
    expansion.style.background = '#25D366'; // Mesma cor do botão
    expansion.style.borderRadius = '30px';
    expansion.style.color = '#fff';
    expansion.style.fontSize = '14px';
    expansion.style.fontWeight = 'bold';
    expansion.style.display = 'flex';
    expansion.style.flexDirection = 'column';
    expansion.style.alignItems = 'center';
    expansion.style.justifyContent = 'center';
    expansion.style.padding = '0px 30px 0px 5px';
    expansion.style.whiteSpace = 'nowrap';
    expansion.style.width = '0'; // Largura inicial
    expansion.style.transition = 'width 0.3s ease';
    expansion.style.zIndex = '998';
    container.appendChild(expansion);
  
    // Adiciona os textos
    const textTop = document.createElement('span');
    textTop.textContent = 'Fale agora';
    textTop.style.fontFamily = 'Roboto, sans-serif';
    textTop.style.opacity = '0'; 
    textTop.style.transition = 'opacity 0.3s ease';
  
    const textBottom = document.createElement('span');
    textBottom.textContent = 'por WhatsApp';
    textBottom.style.fontFamily = 'Roboto, sans-serif';
    textBottom.style.opacity = '0'; 
    textBottom.style.transition = 'opacity 0.3s ease';
  
    expansion.appendChild(textTop);
    expansion.appendChild(textBottom);
  
    // Cria o botão principal
    const button = document.createElement('button');
    button.style.position = 'relative';
    button.style.width = '60px';
    button.style.height = '60px';
    button.style.border = '3px solid white';
    button.style.borderRadius = '50%';
    button.style.background = '#25D366';
    button.style.cursor = 'pointer';
    button.style.display = 'flex';
    button.style.alignItems = 'center';
    button.style.justifyContent = 'center';
    button.style.zIndex = '999';
    button.style.transition = 'transform 0.3s ease';
    container.appendChild(button);
  
    // Adiciona o ícone do WhatsApp ao botão principal
    const icon = document.createElement('img');
    icon.src = 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg';
    icon.alt = 'WhatsApp Icon';
    icon.style.width = '30px';
    icon.style.height = '30px';
    button.appendChild(icon);
  
    // Eventos de mouse no botão principal
    button.addEventListener('mouseenter', function () {
        expansion.style.width = '150px';
        container.style.width = '200px';
        textTop.style.opacity = '1';
        textBottom.style.opacity = '1';
    });
  
    button.addEventListener('mouseleave', function () {
        expansion.style.width = '0';
        textTop.style.opacity = '0';
        textBottom.style.opacity = '0';
    });
  
    // Evento de clique no botão principal #095f54
    button.addEventListener('click', function () {
        container.style.display = 'none'; // Oculta o botão
        showModal();
    });
  
    // Função para criar a caixa de contato
    function showModal() {
        const box = document.createElement('div');
        box.innerHTML = `
            <div id="contact-box" style="position: fixed; bottom: 0; right: 0; width: 100%; max-width: 400px; background: white; padding: 0px; border-radius: 0px; font-family: 'Roboto', sans-serif; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); transform: translateY(100%); transition: transform 0.5s ease;">
                <div style="background-color: #095f54; height: 80px; color:#fff;">
                  <button id="close-box" style="position: absolute; top: 10px; right: 10px; background: transparent; border: none; font-size: 18px; cursor: pointer; color: white;">&times;</button>
                  <h3 style="text-align: left; margin:0px; padding:20px 10px;">Seja bem vindo</h3>
                </div>
                <div style="
                    width: 100%; 
                    height: 100px; 
                    background-color: #E5DDD5;
                    background-image: radial-gradient(circle, rgba(0, 0, 0, 0.05) 1px, rgba(0, 0, 0, 0) 1px); 
                    background-size: 10px 10px;
                    padding:30px 0px;
                ">
                  <div style="background-color:#fff; padding:10px; margin: 0px 50px 0px 10px; border-radius:2px;">
                    Olá quer participar da Promoção?<br />
                    Digite seu numero de Celular para continuar
                  </div>
                </div>
                <form id="contact-form">
                    <div style="margin-bottom: 15px;">
                        <input type="text" id="phone" required maxlength="15" placeholder="Informe seu telefone por favor:" style="width: 100%; padding: 10px; border-top: 1px solid #ddd; border-bottom: 1px solid #ddd; border-left: none; border-right: none; border-radius: 0px;" onfocus="this.style.outline='none';" />
                    </div>
                    <div style="width: 100%; text-align: right; margin: 10px 0px;">
                      <button type="submit" style="padding: 10px 50px; background-color: #25D366; color: white; border: none; border-radius: 40px; transition: background-color 0.3s, transform 0.3s; cursor: pointer;" onmouseover="this.style.backgroundColor='#128C7E'" onmouseout="this.style.backgroundColor='#25D366'">
                          Start chat
                      </button>
                    </div>
                </form>
            </div>`;
        document.body.appendChild(box);
  
        setTimeout(() => {
            document.getElementById('contact-box').style.transform = 'translateY(0)';
        }, 0);
  
        document.getElementById('close-box').addEventListener('click', () => {
            document.getElementById('contact-box').style.transform = 'translateY(100%)';
            setTimeout(() => {
                box.remove();
                container.style.display = 'flex'; // Reexibe o botão
            }, 500);
        });
  
        document.getElementById('contact-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            // const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
  
            try {
                const apiUrl = 'http://localhost:8000';
                const response = await fetch(`${apiUrl}/api/submit-data`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({phone, source}),
                });
                if (!response.ok) throw new Error('Submission failed.');
  
                const whatsappUrl = `https://api.whatsapp.com/send/?phone=5511987170001&text=Ol%C3%A1%2C+vim+da+Home+Page+e+quero+informa%C3%A7%C3%B5es+de+Hipnose+Ericksoniana&type=phone_number&app_absent=0`;
                window.location.href = whatsappUrl;
  
                box.remove();
                container.style.display = 'flex'; // Reexibe o botão após o envio
            } catch (error) {
                alert('Error submitting data.');
            }
        });
  
        document.getElementById('phone').addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.length > 11 ? value.slice(0, 11) : value;
            e.target.value = value.length <= 10 ? value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3') : value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
        });
    }
  
    // Tornando a função acessível globalmente
    window.showModal = showModal;
  })();
  
    
    
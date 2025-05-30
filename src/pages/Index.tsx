
import { useEffect } from "react";

const Index = () => {
  // CONFIGURE O LINK DE DESTINO AQUI
  const baseRedirectUrl = "https://pay.hotmart.com/F99929935R?bid=1748611806470";
  
  useEffect(() => {
    // Captura os parâmetros UTM da URL atual
    const urlParams = new URLSearchParams(window.location.search);
    const utmParams = new URLSearchParams();
    
    // Lista de parâmetros UTM para capturar
    const utmKeys = [
      'utm_source',
      'utm_medium', 
      'utm_campaign',
      'utm_term',
      'utm_content',
      'fbclid',
      'gclid'
    ];
    
    // Adiciona os parâmetros UTM encontrados
    utmKeys.forEach(key => {
      const value = urlParams.get(key);
      if (value) {
        utmParams.append(key, value);
      }
    });
    
    // Constrói a URL final com os parâmetros UTM
    let finalUrl = baseRedirectUrl;
    if (utmParams.toString()) {
      finalUrl += '&' + utmParams.toString();
    }
    
    console.log('Redirecionando para:', finalUrl);
    window.location.href = finalUrl;
  }, []);

  return null;
};

export default Index;

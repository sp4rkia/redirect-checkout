
import { useEffect } from "react";

const Index = () => {
  // CONFIGURE O LINK DE DESTINO AQUI
  const baseRedirectUrl = "https://pay.hotmart.com/F99929935R?bid=1748611806470";
  
  useEffect(() => {
    // Captura os parâmetros UTM da URL atual
    const urlParams = new URLSearchParams(window.location.search);
    
    // Define a ordem específica dos parâmetros UTM
    const utmOrder = [
      'utm_source',
      'utm_campaign',
      'utm_medium',
      'utm_content',
      'utm_term',
      'xcod'
    ];
    
    // Constrói a string de parâmetros na ordem específica
    const utmParts = [];
    utmOrder.forEach(key => {
      const value = urlParams.get(key);
      if (value) {
        utmParts.push(`${key}=${encodeURIComponent(value)}`);
      }
    });
    
    // Constrói a URL final com os parâmetros UTM na ordem correta
    let finalUrl = baseRedirectUrl;
    if (utmParts.length > 0) {
      finalUrl += '&' + utmParts.join('&');
    }
    
    console.log('Redirecionando para:', finalUrl);
    window.location.href = finalUrl;
  }, []);

  return null;
};

export default Index;


import { useEffect } from "react";
import { useParams } from "react-router-dom";

// Configuração dos links de redirecionamento
const redirectLinks = {
  "recetamel": "https://pay.hotmart.com/A100394805G",
  "recetabicarbonato": "https://pay.hotmart.com/A100395802S?bid=1750422773449",
  "recetacanelateste": "https://pay.hotmart.com/S100395327O",
  "recetadelcanelat": "https://pay.hotmart.com/D100035039I?off=bzgv2k5y",
};

const RedirectPage = () => {
  const { linkId } = useParams<{ linkId: string }>();
  
  useEffect(() => {
    // Busca o link base usando o linkId
    const baseRedirectUrl = redirectLinks[linkId as keyof typeof redirectLinks];
    
    if (!baseRedirectUrl) {
      window.location.href = "/";
      return;
    }
    
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
    
    window.location.href = finalUrl;
  }, [linkId]);

  return null;
};

export default RedirectPage;

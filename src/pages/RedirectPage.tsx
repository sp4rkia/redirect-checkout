
import { useEffect } from "react";
import { useParams } from "react-router-dom";

// Configuração dos links de redirecionamento
const redirectLinks = {
  "recetacanela": "https://pay.hotmart.com/D100035039I?off=bzgv2k5y&bid=1748701268238",
  "recetacompleta": "https://pay.hotmart.com/F99929935R?bid=1748611806470",
  "recetacompleta2": "https://pay.hotmart.com/F99929935R?off=rd6yb5zv&bid=1748815150823",
};

const RedirectPage = () => {
  const { linkId } = useParams<{ linkId: string }>();
  
  useEffect(() => {
    // Busca o link base usando o linkId
    const baseRedirectUrl = redirectLinks[linkId as keyof typeof redirectLinks];
    
    if (!baseRedirectUrl) {
      console.error(`Link não encontrado para: ${linkId}`);
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
    
    console.log(`Redirecionando ${linkId} para:`, finalUrl);
    window.location.href = finalUrl;
  }, [linkId]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">Redirecionando...</h2>
        <p className="text-gray-600">Aguarde um momento.</p>
      </div>
    </div>
  );
};

export default RedirectPage;


import { useEffect, useState } from "react";
import { ExternalLink, RotateCw } from "lucide-react";

const Index = () => {
  const [isRedirecting, setIsRedirecting] = useState(false);
  
  // CONFIGURE O LINK DE DESTINO AQUI
  const redirectUrl = "https://pay.hotmart.com/F99929935R?bid=1748611806470";
  
  useEffect(() => {
    setIsRedirecting(true);
    // Redireciona imediatamente
    window.location.href = redirectUrl;
  }, [redirectUrl]);

  const handleManualRedirect = () => {
    window.location.href = redirectUrl;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 text-center">
          {/* Ícone animado */}
          <div className="mb-6">
            <RotateCw className="w-16 h-16 mx-auto text-blue-500 animate-spin" />
          </div>

          {/* Título */}
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Redirecionando...
          </h1>

          {/* Descrição */}
          <p className="text-gray-600 mb-6">
            Aguarde um momento, você será redirecionado automaticamente.
          </p>

          {/* Barra de progresso completa */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-6 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300 ease-linear w-full"
            />
          </div>

          {/* URL de destino */}
          <div className="bg-gray-50 rounded-lg p-3 mb-6">
            <p className="text-xs text-gray-500 mb-1">Destino:</p>
            <p className="text-sm font-mono text-gray-700 break-all">{redirectUrl}</p>
          </div>

          {/* Botão manual */}
          <button
            onClick={handleManualRedirect}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105 active:scale-95"
          >
            Ir Agora
          </button>

          {/* Texto pequeno */}
          <p className="text-xs text-gray-400 mt-4">
            Clique no botão acima para ser redirecionado imediatamente
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;

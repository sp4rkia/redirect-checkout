
import { useEffect, useState } from "react";
import { ExternalLink, RotateCw } from "lucide-react";

const Index = () => {
  const [countdown, setCountdown] = useState(2);
  const [isRedirecting, setIsRedirecting] = useState(false);
  
  // CONFIGURE O LINK DE DESTINO AQUI
  const redirectUrl = "https://pay.hotmart.com/F99929935R?bid=1748611806470";
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setIsRedirecting(true);
          clearInterval(timer);
          // Redireciona após 1 segundo adicional para mostrar a animação
          setTimeout(() => {
            window.location.href = redirectUrl;
          }, 1000);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [redirectUrl]);

  const handleManualRedirect = () => {
    setIsRedirecting(true);
    setTimeout(() => {
      window.location.href = redirectUrl;
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 text-center">
          {/* Ícone animado */}
          <div className="mb-6">
            {isRedirecting ? (
              <RotateCw className="w-16 h-16 mx-auto text-blue-500 animate-spin" />
            ) : (
              <ExternalLink className="w-16 h-16 mx-auto text-blue-500 animate-pulse" />
            )}
          </div>

          {/* Título */}
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {isRedirecting ? "Redirecionando..." : "Redirecionamento Automático"}
          </h1>

          {/* Descrição */}
          <p className="text-gray-600 mb-6">
            {isRedirecting 
              ? "Aguarde um momento, você será redirecionado automaticamente."
              : `Você será redirecionado em ${countdown} segundos.`
            }
          </p>

          {/* Barra de progresso */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-6 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-linear"
              style={{ width: `${((2 - countdown) / 2) * 100}%` }}
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
            disabled={isRedirecting}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
          >
            {isRedirecting ? "Redirecionando..." : "Ir Agora"}
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

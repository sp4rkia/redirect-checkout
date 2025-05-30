
import { useEffect } from "react";

const Index = () => {
  // CONFIGURE O LINK DE DESTINO AQUI
  const redirectUrl = "https://pay.hotmart.com/F99929935R?bid=1748611806470";
  
  useEffect(() => {
    window.location.href = redirectUrl;
  }, [redirectUrl]);

  return null;
};

export default Index;

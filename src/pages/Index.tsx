
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const availableLinks = [
    { id: "hotmart1", name: "Hotmart Link 1", description: "Link principal do Hotmart" },
    { id: "hotmart2", name: "Hotmart Link 2", description: "Link secundário do Hotmart" },
    { id: "hotmart3", name: "Hotmart Link 3", description: "Link terciário do Hotmart" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sistema de Redirecionamento
          </h1>
          <p className="text-xl text-gray-600">
            Selecione o link de destino para redirecionamento com UTMs
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {availableLinks.map((link) => (
            <Card key={link.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{link.name}</CardTitle>
                <CardDescription>{link.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link to={`/redirect/${link.id}`}>
                  <Button className="w-full">
                    Acessar Link
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Como usar:</h2>
          <div className="space-y-3 text-gray-700">
            <p><strong>Formato da URL:</strong> /redirect/[linkId]?utm_source=...&utm_campaign=...</p>
            <p><strong>Exemplo:</strong> /redirect/hotmart1?utm_source=FB&utm_campaign=CampanhaTeste</p>
            <p>Os parâmetros UTM serão automaticamente passados para o link de destino na ordem correta.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

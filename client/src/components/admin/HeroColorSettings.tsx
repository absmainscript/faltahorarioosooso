import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette } from "lucide-react";

export function HeroColorSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Palette className="w-5 h-5" />
          Configuração de Cores
        </CardTitle>
        <CardDescription>
          As configurações de cores foram movidas para a aba "Personalizar Cores" para melhor organização.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-800">
            💡 <strong>Nova Localização:</strong> Todas as configurações de cores, incluindo a cor do botão "Agendar Consulta", 
            agora estão disponíveis na aba "Personalizar Cores" do painel administrativo.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
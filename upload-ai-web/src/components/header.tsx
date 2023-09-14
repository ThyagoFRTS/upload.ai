import React from "react";
import { Github } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

// import { Container } from './styles';

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between border-b py-3 px-6">
      <h1 className="text-xl font-bold">upload.ai</h1>
      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground">
          Desenvolvido com 💛 no NLW by ThyagoFRTS
        </span>
        <Separator orientation="vertical" className="h-6" />
        <a href="https://github.com/ThyagoFRTS/upload.ai">
          <Button variant="outline">
            <Github className="w-4 h-4 mr-2" />
            Gitihub
          </Button>
        </a>
      </div>
    </header>
  );
};

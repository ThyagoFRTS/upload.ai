import React, { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { api } from "@/lib/axios";

// import { Container } from './styles';
interface Prompt {
  id: string;
  title: string;
  template: string;
}

interface Props {
  onPromptSelected: (template: string) => void;
}

export const PromptSelect: React.FC<Props> = ({ onPromptSelected }) => {
  const [prompts, setPrompts] = useState<Prompt[] | null>();

  useEffect(() => {
    api.get("/prompts").then((resp) => setPrompts(resp.data));
  }, []);

  const handlePromptSelected = (promptId: string) => {
    const selectedPrompt = prompts?.find((prompt) => prompt.id === promptId);
    if (!selectedPrompt) return;
    onPromptSelected(selectedPrompt.template);
  };

  return (
    <Select onValueChange={handlePromptSelected}>
      <SelectTrigger>
        <SelectValue placeholder="Selecione um prompt" />
      </SelectTrigger>
      <SelectContent>
        {prompts?.map((item) => (
          <SelectItem key={item.id} value={item.id}>
            {item.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

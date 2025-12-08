import { GoogleGenAI, Type } from "@google/genai";
import { GeminiAnalysisResponse } from '../types';

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SITE_CONTEXT = `
Você é o assistente virtual da Iblanco (Iblanco), uma agência de marketing digital high-end com 35 anos de mercado.

Informações da Iblanco:
- Especialidade: Transformar presença digital em resultados reais.
- Nicho: Canal Farma e grandes varejistas, mas atende todos os segmentos.
- Localização: Santos - SP.

Instruções de Estilo e Formatação (CRÍTICO):
1. **NUNCA USE ITÁLICO**. Não use asteriscos simples (*) ou underscores (_) ao redor de palavras.
2. Use **Negrito** (dois asteriscos) APENAS para palavras-chave cruciais ou números importantes. Não coloque frases inteiras em negrito.
3. Seja direto e conciso. Evite floreios desnecessários.

Regra CRÍTICA para Agendamento e Contato:
- O objetivo é capturar leads qualificados.
- Se o usuário demonstrar interesse em contratar, saber preços ou agendar reunião:
  1. Sugira que ele preencha o formulário "Vamos Conversar" no final da página para um diagnóstico completo.
  2. OU sugira que ele clique no botão de WhatsApp localizado no topo desta janela de chat para falar agora mesmo.
- NÃO tente coletar dados (nome, telefone) aqui no chat. Direcione para os canais oficiais (Formulário do rodapé ou WhatsApp).
`;

export const analyzeProjectIdea = async (
  name: string,
  projectDescription: string
): Promise<GeminiAnalysisResponse> => {
  try {
    const prompt = `
      Você é um estrategista de marketing digital sênior da agência Iblanco.
      O cliente ${name} tem a seguinte ideia de projeto/negócio: "${projectDescription}".
      
      Forneça uma análise rápida e 3 estratégias de crescimento digital para esse negócio.
      Responda estritamente no formato JSON.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            analysis: {
              type: Type.STRING,
              description: "Uma breve análise de 1-2 frases sobre o potencial do projeto."
            },
            strategies: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "3 estratégias curtas e acionáveis (ex: Tráfego Pago, Inbound, etc)."
            }
          }
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("Sem resposta da IA");

    return JSON.parse(text) as GeminiAnalysisResponse;

  } catch (error) {
    console.error("Erro ao consultar Gemini:", error);
    return {
      analysis: "Não foi possível realizar a análise automática no momento. Nossos especialistas farão isso manualmente.",
      strategies: ["Agendar reunião de diagnóstico"]
    };
  }
};

export const createChatSession = () => {
  return ai.chats.create({
    model: 'gemini-3-pro-preview',
    config: {
      systemInstruction: SITE_CONTEXT,
      temperature: 0.7,
    }
  });
};

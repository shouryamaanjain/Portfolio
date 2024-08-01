import { OpenAIModel } from "@/types/Model";

export const LS_UUID = "@ls/uuid";

export const DEFAULT_OPENAI_MODEL = {
  name: "ShouryamaanGPT",
  id: "gpt-4o-mini",
  available: true,
};

export const GPT4_OPENAI_MODEL = {
  name: "GPT-4",
  id: "gpt-4",
  available: false,
};

export const OPENAI_MODELS: OpenAIModel[] = [
  DEFAULT_OPENAI_MODEL,
  GPT4_OPENAI_MODEL,
];

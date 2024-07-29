import { OpenAIModel } from "@/types/Model";

export const LS_UUID = "@ls/uuid";

export const DEFAULT_OPENAI_MODEL = {
  name: "ShouryamaanGPT",
  id: "gpt-4o-mini",
  available: true,
};

export const GPT4_OPENAI_MODEL = {
  name: "gpt-4o-mini",
  id: "gpt-4o-mini",
  available: false,
};

export const OPENAI_MODELS: OpenAIModel[] = [
  DEFAULT_OPENAI_MODEL,
  GPT4_OPENAI_MODEL,
];

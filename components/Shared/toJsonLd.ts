const runtimeJson = globalThis as typeof globalThis & {
  JSON: {
    stringify: (value: unknown) => string;
  };
};

export function toJsonLd(value: unknown): string {
  return runtimeJson.JSON.stringify(value);
}
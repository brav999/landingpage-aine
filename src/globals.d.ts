// src/globals.d.ts

declare global {
    interface Window {
        gtag_report_conversion: (url?: string) => void;
    }
}

// Adicione a linha abaixo para garantir que o arquivo seja tratado como um módulo.
export {};
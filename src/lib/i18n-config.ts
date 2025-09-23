/**
 * Configuração de Internacionalização (i18n)
 *
 * Gerencia as configurações de idioma baseadas em variáveis de ambiente,
 * fornecendo uma interface consistente para todo o sistema.
 */

export type Locale = "pt" | "en";

/**
 * Configurações i18n baseadas em variáveis de ambiente
 */
export class I18nConfig {
  private static _defaultLocale: Locale | null = null;
  private static _supportedLocales: Locale[] | null = null;

  /**
   * Obtém o idioma padrão configurado via env
   */
  static get defaultLocale(): Locale {
    if (this._defaultLocale === null) {
      const envDefault = process.env.NEXT_PUBLIC_DEFAULT_LOCALE || "pt";
      this._defaultLocale = this.isValidLocale(envDefault) ? envDefault : "pt";
    }
    return this._defaultLocale;
  }

  /**
   * Obtém a lista de idiomas suportados via env
   */
  static get supportedLocales(): Locale[] {
    if (this._supportedLocales === null) {
      const envSupported = process.env.NEXT_PUBLIC_SUPPORTED_LOCALES || "pt,en";
      this._supportedLocales = envSupported
        .split(",")
        .map((locale: string) => locale.trim())
        .filter((locale: string) => this.isValidLocale(locale)) as Locale[];

      // Garante que pelo menos o idioma padrão esteja na lista
      if (!this._supportedLocales.includes(this.defaultLocale)) {
        this._supportedLocales.unshift(this.defaultLocale);
      }
    }
    return this._supportedLocales;
  }

  /**
   * Verifica se um idioma é válido
   */
  static isValidLocale(locale: string): locale is Locale {
    return ["pt", "en"].includes(locale);
  }

  /**
   * Obtém metadados dos idiomas
   */
  static getLocaleMetadata() {
    return {
      pt: {
        name: "Português",
        flag: "🇧🇷",
        locale: "pt-BR",
      },
      en: {
        name: "English",
        flag: "🇺🇸",
        locale: "en-US",
      },
    } as const;
  }

  /**
   * Recarrega as configurações (útil em desenvolvimento)
   */
  static reload() {
    this._defaultLocale = null;
    this._supportedLocales = null;
  }

  /**
   * Log das configurações atuais (debug)
   */
  static logConfig() {
    if (process.env.NODE_ENV === "development") {
      console.log("🌍 i18n Configuration:");
      console.log(`  Default Locale: ${this.defaultLocale}`);
      console.log(`  Supported Locales: ${this.supportedLocales.join(", ")}`);
      console.log(`  Environment Variables:`);
      console.log(
        `    NEXT_PUBLIC_DEFAULT_LOCALE: ${process.env.NEXT_PUBLIC_DEFAULT_LOCALE}`,
      );
      console.log(
        `    NEXT_PUBLIC_SUPPORTED_LOCALES: ${process.env.NEXT_PUBLIC_SUPPORTED_LOCALES}`,
      );
    }
  }
}

// Export das configurações para compatibilidade
export const defaultLocale = I18nConfig.defaultLocale;
export const locales = I18nConfig.supportedLocales;

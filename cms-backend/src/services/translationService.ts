import axios from 'axios';

export interface TranslationService {
  translate(text: string, sourceLang: string, targetLang: string): Promise<string>;
  isAvailable(): Promise<boolean>;
}

export class LibreTranslateService implements TranslationService {
  private baseUrl: string;
  private apiKey?: string;

  constructor(baseUrl?: string, apiKey?: string) {
    this.baseUrl = baseUrl || process.env.LIBRETRANSLATE_URL || 'https://libretranslate.com/translate';
    this.apiKey = apiKey || process.env.LIBRETRANSLATE_API_KEY;
  }

  async translate(text: string, sourceLang: string = 'en', targetLang: string = 'ko'): Promise<string> {
    try {
      const requestData: any = {
        q: text,
        source: sourceLang,
        target: targetLang,
        format: 'text'
      };

      if (this.apiKey) {
        requestData.api_key = this.apiKey;
      }

      const response = await axios.post(this.baseUrl, requestData, {
        headers: {
          'Content-Type': 'application/json'
        },
        timeout: 10000 // 10 seconds timeout
      });

      return response.data.translatedText || text;
    } catch (error) {
      console.error('LibreTranslate error:', error);
      
      // Return original text if translation fails
      return text;
    }
  }

  async isAvailable(): Promise<boolean> {
    try {
      const response = await axios.get(this.baseUrl.replace('/translate', '/languages'), {
        timeout: 5000
      });
      return response.status === 200;
    } catch (error) {
      return false;
    }
  }
}

export class GoogleTranslateService implements TranslationService {
  private apiKey: string;
  private projectId?: string;

  constructor(apiKey?: string, projectId?: string) {
    this.apiKey = apiKey || process.env.GOOGLE_TRANSLATE_API_KEY || '';
    this.projectId = projectId || process.env.GOOGLE_PROJECT_ID;
  }

  async translate(text: string, sourceLang: string = 'en', targetLang: string = 'ko'): Promise<string> {
    try {
      if (!this.apiKey) {
        throw new Error('Google Translate API key not configured');
      }

      const response = await axios.post(
        `https://translation.googleapis.com/language/translate/v2?key=${this.apiKey}`,
        {
          q: text,
          source: sourceLang,
          target: targetLang,
          format: 'text'
        },
        {
          headers: {
            'Content-Type': 'application/json'
          },
          timeout: 10000
        }
      );

      return response.data.data.translations[0].translatedText || text;
    } catch (error) {
      console.error('Google Translate error:', error);
      return text;
    }
  }

  async isAvailable(): Promise<boolean> {
    try {
      if (!this.apiKey) return false;
      
      const response = await axios.get(
        `https://translation.googleapis.com/language/translate/v2/languages?key=${this.apiKey}`,
        { timeout: 5000 }
      );
      return response.status === 200;
    } catch (error) {
      return false;
    }
  }
}

// Translation Manager - handles switching between services
export class TranslationManager {
  private primaryService: TranslationService;
  private fallbackService?: TranslationService;

  constructor(primaryService: TranslationService, fallbackService?: TranslationService) {
    this.primaryService = primaryService;
    this.fallbackService = fallbackService;
  }

  async translate(text: string, sourceLang: string = 'en', targetLang: string = 'ko'): Promise<string> {
    // Skip translation if text is empty or already in target language
    if (!text || text.trim() === '') return text;
    if (sourceLang === targetLang) return text;

    try {
      // Try primary service first
      if (await this.primaryService.isAvailable()) {
        return await this.primaryService.translate(text, sourceLang, targetLang);
      }

      // Fallback to secondary service
      if (this.fallbackService && await this.fallbackService.isAvailable()) {
        console.log('Primary translation service unavailable, using fallback');
        return await this.fallbackService.translate(text, sourceLang, targetLang);
      }

      // If all services fail, return original text
      console.warn('No translation services available');
      return text;
    } catch (error) {
      console.error('Translation failed:', error);
      return text;
    }
  }

  async getAvailableServices(): Promise<{ primary: boolean; fallback: boolean }> {
    const primary = await this.primaryService.isAvailable();
    const fallback = this.fallbackService ? await this.fallbackService.isAvailable() : false;
    
    return { primary, fallback };
  }
}

// Factory function to create translation manager based on environment
export function createTranslationManager(): TranslationManager {
  const service = process.env.TRANSLATION_SERVICE || 'libretranslate';

  if (service === 'google') {
    const googleService = new GoogleTranslateService();
    const libreService = new LibreTranslateService();
    return new TranslationManager(googleService, libreService);
  } else {
    const libreService = new LibreTranslateService();
    const googleService = new GoogleTranslateService();
    
    // Use Google as fallback only if API key is configured
    const fallback = process.env.GOOGLE_TRANSLATE_API_KEY ? googleService : undefined;
    return new TranslationManager(libreService, fallback);
  }
}

// Utility function for batch translation
export async function translateObject(
  obj: Record<string, any>,
  fieldsToTranslate: string[],
  translationManager: TranslationManager,
  sourceLang: string = 'en',
  targetLang: string = 'ko'
): Promise<Record<string, any>> {
  const result = { ...obj };

  for (const field of fieldsToTranslate) {
    const sourceField = `${field}_${sourceLang}`;
    const targetField = `${field}_${targetLang}`;

    if (obj[sourceField] && !obj[targetField]) {
      try {
        result[targetField] = await translationManager.translate(
          obj[sourceField],
          sourceLang,
          targetLang
        );
      } catch (error) {
        console.error(`Failed to translate field ${field}:`, error);
        result[targetField] = obj[sourceField]; // Fallback to source text
      }
    }
  }

  return result;
}
import type { TFunction } from 'i18next';

/**
 * Safely retrieves a translated array from i18next.
 * Returns an empty array if the translation key is missing or not an array.
 */
export const getTranslatedArray = (t: TFunction, key: string): string[] => {
   const result = t(key, { returnObjects: true });
   if (Array.isArray(result)) {
      return result.filter((item): item is string => typeof item === 'string');
   }
   return [];
};

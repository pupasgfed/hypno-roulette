import { Suggestion, SessionItem } from "../types/index";
import suggestionsData from "../data/suggestions.json";

const suggestions = suggestionsData as Suggestion[];

export const getAllSuggestions = (): Suggestion[] => {
  return suggestions;
};

export const getAllThemes = (): string[] => {
  const themes = new Set<string>();
  suggestions.forEach((s) => {
    s.suggestion_theme.forEach((theme) => themes.add(theme));
  });
  return Array.from(themes).sort();
};

export const getSuggestionsByTheme = (theme: string): Suggestion[] => {
  return suggestions.filter((s) => s.suggestion_theme.includes(theme));
};

export const getSimpleSuggestions = (
  excludedIds: string[] = [],
  filterThemes: string[] = [],
  excludeNsfw: boolean = false,
): Suggestion[] => {
  return suggestions.filter((s) => {
    if (s.suggestion_level === 0) return false;
    if (excludedIds.includes(s.suggestion_id)) return false;
    if (excludeNsfw && s.suggestion_nsfw) return false;
    if (filterThemes.length > 0) {
      return s.suggestion_theme.some((theme) => filterThemes.includes(theme));
    }
    return true;
  });
};

export const getRandomSuggestion = (
  excludedIds: string[] = [],
  filterThemes: string[] = [],
  excludeNsfw: boolean = false,
): Suggestion | null => {
  const available = getSimpleSuggestions(
    excludedIds,
    filterThemes,
    excludeNsfw,
  );
  if (available.length === 0) return null;
  return available[Math.floor(Math.random() * available.length)];
};

const shuffle = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const generateSession = (
  theme: string | null = null,
  excludeNsfw: boolean = false,
): SessionItem[] => {
  const session: SessionItem[] = [];
  const usedIds = new Set<string>();

  const getFilteredByLevel = (
    level: 0 | 1 | 2 | 3 | 4,
    count: number,
  ): Suggestion[] => {
    const filtered = suggestions.filter((s) => {
      if (s.suggestion_level !== level) return false;
      if (usedIds.has(s.suggestion_id)) return false;
      if (theme && !s.suggestion_theme.includes(theme)) return false;
      if (excludeNsfw && (s.suggestion_nsfw || s.suggestion_level === 4))
        return false;
      return true;
    });

    if (filtered.length >= count) {
      return shuffle(filtered).slice(0, count);
    }

    const remaining = count - filtered.length;
    const allOthers = suggestions.filter((s) => {
      if (usedIds.has(s.suggestion_id)) return false;
      if (filtered.some((f) => f.suggestion_id === s.suggestion_id))
        return false;
      if (excludeNsfw && (s.suggestion_nsfw || s.suggestion_level === 4))
        return false;
      return true;
    });

    return [...shuffle(filtered), ...shuffle(allOthers).slice(0, remaining)];
  };

  // Level 0: 1 suggestion
  const level0 = getFilteredByLevel(0, 1);
  level0.forEach((s) => {
    session.push({
      suggestion_id: s.suggestion_id,
      suggestion_label: s.suggestion_label,
      suggestion_description: s.suggestion_description,
      suggestion_level: s.suggestion_level,
    });
    usedIds.add(s.suggestion_id);
  });

  // Level 1: 2 suggestions
  const level1 = getFilteredByLevel(1, 2);
  level1.forEach((s) => {
    session.push({
      suggestion_id: s.suggestion_id,
      suggestion_label: s.suggestion_label,
      suggestion_description: s.suggestion_description,
      suggestion_level: s.suggestion_level,
    });
    usedIds.add(s.suggestion_id);
  });

  // Level 2: 2 suggestions
  const level2 = getFilteredByLevel(2, 2);
  level2.forEach((s) => {
    session.push({
      suggestion_id: s.suggestion_id,
      suggestion_label: s.suggestion_label,
      suggestion_description: s.suggestion_description,
      suggestion_level: s.suggestion_level,
    });
    usedIds.add(s.suggestion_id);
  });

  // Level 3: 3 suggestions
  const level3 = getFilteredByLevel(3, 3);
  level3.forEach((s) => {
    session.push({
      suggestion_id: s.suggestion_id,
      suggestion_label: s.suggestion_label,
      suggestion_description: s.suggestion_description,
      suggestion_level: s.suggestion_level,
    });
    usedIds.add(s.suggestion_id);
  });

  // Level 4: 2 suggestions
  const level4 = getFilteredByLevel(4, 2);
  level4.forEach((s) => {
    session.push({
      suggestion_id: s.suggestion_id,
      suggestion_label: s.suggestion_label,
      suggestion_description: s.suggestion_description,
      suggestion_level: s.suggestion_level,
    });
    usedIds.add(s.suggestion_id);
  });

  return session.sort((a, b) => {
    if (a.suggestion_level !== b.suggestion_level) {
      return a.suggestion_level - b.suggestion_level;
    }
    return 0;
  });
};

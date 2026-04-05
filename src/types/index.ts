export interface Suggestion {
  suggestion_id: string;
  suggestion_label: string;
  suggestion_description: string;
  suggestion_theme: string[];
  suggestion_level: 0 | 1 | 2 | 3 | 4;
  suggestion_for_session: boolean;
  suggestion_nsfw: boolean;
}

export interface SessionItem {
  suggestion_id: string;
  suggestion_label: string;
  suggestion_description: string;
  suggestion_level: 0 | 1 | 2 | 3 | 4;
}

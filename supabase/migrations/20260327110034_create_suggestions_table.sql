/*
  # Create suggestions table

  1. New Tables
    - `suggestions`
      - `suggestion_id` (text, primary key) - Unique identifier for the suggestion
      - `suggestion_label` (text) - Title of the suggestion
      - `suggestion_description` (text) - Full description of the suggestion
      - `suggestion_theme` (text array) - Categories/themes for filtering
      - `suggestion_level` (integer) - Difficulty level (0-5)
      - `suggestion_for_session` (boolean) - Can be used in full sessions
      - `suggestion_nsfw` (boolean) - Whether content is NSFW
      - `suggestion_group` (boolean) - Whether this is a group suggestion
      - `created_at` (timestamp) - When the suggestion was created

  2. Security
    - Enable RLS on `suggestions` table
    - Add policy for public read access (suggestions are public data)
*/

CREATE TABLE IF NOT EXISTS suggestions (
  suggestion_id text PRIMARY KEY,
  suggestion_label text NOT NULL,
  suggestion_description text NOT NULL,
  suggestion_theme text[] NOT NULL DEFAULT '{}',
  suggestion_level integer NOT NULL DEFAULT 0,
  suggestion_for_session boolean NOT NULL DEFAULT true,
  suggestion_nsfw boolean NOT NULL DEFAULT false,
  suggestion_group boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE suggestions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Suggestions are publicly readable"
  ON suggestions
  FOR SELECT
  USING (true);

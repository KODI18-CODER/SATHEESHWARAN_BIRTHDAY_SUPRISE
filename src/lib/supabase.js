import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

const supabaseKey =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(
  supabaseUrl && supabaseKey
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseKey)
  : null;

/**
 * Unlock a secret birthday door.
 * The password is verified by the Supabase Edge Function.
 */
export async function unlockSecretDoor(doorId, password) {
  if (!isSupabaseConfigured || !supabase) {
    return {
      success: false,
      message: "Supabase is not configured yet. Please configure your .env file.",
    };
  }

  try {
    const { data, error } = await supabase.functions.invoke(
      "unlock-secret-door",
      {
        body: {
          doorId,
          password,
        },
      }
    );

    if (error) {
      console.error("Secret door error:", error);

      return {
        success: false,
        message: "Unable to unlock this door. Please try again.",
      };
    }

    return data;
  } catch (error) {
    console.error("Supabase error:", error);

    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
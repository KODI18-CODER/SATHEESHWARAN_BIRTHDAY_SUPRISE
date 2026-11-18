import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const secretNames: Record<string, string> = {
  door1: "SECRET_DOOR_1",
  door2: "SECRET_DOOR_2",
  door3: "SECRET_DOOR_3",
  door4: "SECRET_DOOR_4",
  door5: "SECRET_DOOR_5",
};

function jsonResponse(
  data: Record<string, unknown>,
  status = 200,
) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return jsonResponse(
      { success: false, message: "Method not allowed." },
      405,
    );
  }

  try {
    const body = await req.json();

    const doorId =
      typeof body.doorId === "string" ? body.doorId : "";

    const password =
      typeof body.password === "string" ? body.password.trim() : "";

    // Validate the requested door.
    const secretName = secretNames[doorId];

    if (!secretName || !password) {
      return jsonResponse({
        success: false,
        message: "Incorrect password. Try again! 💜",
      }, 400);
    }

    // Retrieve the expected password from Supabase secrets.
    const expectedPassword = Deno.env.get(secretName);

    if (!expectedPassword) {
      console.error(`Missing Supabase secret: ${secretName}`);

      return jsonResponse({
        success: false,
        message: "This secret door is not configured yet.",
      }, 500);
    }

    // Check the password without exposing the expected value.
    const isCorrect =
      password.toLowerCase() === expectedPassword.trim().toLowerCase();

    if (!isCorrect) {
      return jsonResponse({
        success: false,
        message: "That's not the right answer. Try again! 🥺",
      });
    }

    return jsonResponse({
      success: true,
      doorId,
      message: "Secret door unlocked! 💜",
    });
  } catch (error) {
    console.error("Secret door error:", error);

    return jsonResponse({
      success: false,
      message: "Something went wrong. Please try again.",
    }, 500);
  }
});
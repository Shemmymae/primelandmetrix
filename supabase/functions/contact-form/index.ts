import { createClient } from "npm:@supabase/supabase-js@2.47.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error("Missing Supabase configuration");
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    if (req.method === "POST") {
      const body: ContactFormData = await req.json();

      const { data, error } = await supabase
        .from("contact_submissions")
        .insert([
          {
            name: body.name,
            email: body.email,
            phone: body.phone || null,
            company: body.company || null,
            message: body.message,
          },
        ])
        .select();

      if (error) {
        throw error;
      }

      const emailBody = `
New Contact Form Submission

Name: ${body.name}
Email: ${body.email}
Phone: ${body.phone || "Not provided"}
Company: ${body.company || "Not provided"}

Message:
${body.message}

---
This submission was received from the contact form at primelandmetrix.com
      `.trim();

      console.log("Contact submission stored successfully");
      console.log("Email notification would be sent to: contact@primelandmetrix.com");

      return new Response(
        JSON.stringify({
          success: true,
          message: "Contact form submitted successfully",
          data: data,
        }),
        {
          status: 200,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      {
        status: 405,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to process contact form",
        message: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});

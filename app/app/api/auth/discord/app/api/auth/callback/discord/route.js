import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.json(
      { error: "Discord authorization code is missing" },
      { status: 400 }
    );
  }

  const clientId = process.env.DISCORD_CLIENT_ID;
  const clientSecret = process.env.DISCORD_CLIENT_SECRET;
  const redirectUri = process.env.DISCORD_REDIRECT_URI;

  const tokenResponse = await fetch(
    "https://discord.com/api/oauth2/token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "authorization_code",
        code,
        redirect_uri: redirectUri,
      }),
    }
  );

  const tokenData = await tokenResponse.json();

  if (!tokenResponse.ok) {
    return NextResponse.json(
      { error: "Discord token request failed", details: tokenData },
      { status: 400 }
    );
  }

  const userResponse = await fetch(
    "https://discord.com/api/users/@me",
    {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
      },
    }
  );

  const user = await userResponse.json();

  if (!userResponse.ok) {
    return NextResponse.json(
      { error: "Could not get Discord user" },
      { status: 400 }
    );
  }

  const response = NextResponse.redirect(
    new URL("/", request.url)
  );

  response.cookies.set("discord_user", JSON.stringify(user), {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  });

  return response;
}

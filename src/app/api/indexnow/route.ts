import { NextRequest, NextResponse } from "next/server";

const INDEXNOW_KEY = "shizuku2026indexnow";
const SITE_HOST = "shizukumatchastudio.com";

export async function POST(request: NextRequest) {
  try {
    const { urls } = await request.json();

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json(
        { error: "URLs array is required" },
        { status: 400 }
      );
    }

    // IndexNow API endpoint (Bing)
    const indexNowUrl = "https://api.indexnow.org/indexnow";

    const payload = {
      host: SITE_HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
      urlList: urls.map((url: string) =>
        url.startsWith("http") ? url : `https://${SITE_HOST}${url}`
      ),
    };

    const response = await fetch(indexNowUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok || response.status === 202) {
      return NextResponse.json({
        success: true,
        message: `Submitted ${urls.length} URL(s) to IndexNow`,
        urls: payload.urlList,
      });
    }

    const errorText = await response.text();
    return NextResponse.json(
      {
        success: false,
        error: `IndexNow API error: ${response.status}`,
        details: errorText,
      },
      { status: response.status }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to submit to IndexNow", details: String(error) },
      { status: 500 }
    );
  }
}

// GET endpoint to manually trigger submission of all pages
export async function GET() {
  const allUrls = [
    "/",
    "/productos",
    "/talleres",
    "/aprende",
    "/aprende/guia-preparacion-matcha",
    "/aprende/verdad-matcha-ceremonial",
    "/nosotros",
    "/mayoreo",
  ];

  const indexNowUrl = "https://api.indexnow.org/indexnow";

  const payload = {
    host: SITE_HOST,
    key: INDEXNOW_KEY,
    keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
    urlList: allUrls.map((url) => `https://${SITE_HOST}${url}`),
  };

  try {
    const response = await fetch(indexNowUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok || response.status === 202) {
      return NextResponse.json({
        success: true,
        message: `Submitted ${allUrls.length} URL(s) to IndexNow`,
        urls: payload.urlList,
      });
    }

    return NextResponse.json(
      { success: false, error: `IndexNow API error: ${response.status}` },
      { status: response.status }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to submit to IndexNow", details: String(error) },
      { status: 500 }
    );
  }
}

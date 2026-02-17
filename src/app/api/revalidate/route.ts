import { revalidateTag } from "next/cache"
import { NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  const secret = request.headers.get("x-revalidate-secret")

  if (secret !== process.env.REVALIDATION_SECRET) {
    return Response.json({ error: "Invalid secret" }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { tag } = body

    if (!tag) {
      return Response.json({ error: "Missing tag parameter" }, { status: 400 })
    }

    revalidateTag(tag)

    return Response.json({ revalidated: true, tag })
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 })
  }
}

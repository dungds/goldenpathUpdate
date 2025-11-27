// app/api/revalidate/route.ts
import { revalidateTag } from "next/cache";

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url);
  
  // Đọc body 1 lần duy nhất
let payload: { secret?: string; tag?: string } = {};
  try {
    payload = await req.json();
  } catch {}

  // Secret có thể ở query string HOẶC trong body
  const secret = searchParams.get("secret") || payload.secret;

  if (secret !== process.env.NEXT_REVALIDATE_SECRET) {
    return new Response("Invalid token", { status: 401 });
  }

  const tag = payload.tag;

  if (!tag) {
    return new Response("Missing tag", { status: 400 });
  }

  revalidateTag(tag as string);

  return Response.json({ revalidated: true, tag, now: Date.now() });
}
import { revalidateTag } from "next/cache";

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url);
  
let payload: { secret?: string; tag?: string } = {};
  try {
    payload = await req.json();
  } catch {}

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
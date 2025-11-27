import { revalidateTag } from "next/cache";

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get("secret");

  if (secret !== process.env.NEXT_REVALIDATE_SECRET) {
    return new Response("Invalid token", { status: 401 });
  }

  try {
    const { tag } = await req.json();

    if (!tag) {
      return new Response("Missing tag", { status: 400 });
    }

    revalidateTag(tag);

    return Response.json({ revalidated: true, tag, now: Date.now() });
  } catch (err) {
    return new Response("Invalid body", { status: 400 });
  }
}

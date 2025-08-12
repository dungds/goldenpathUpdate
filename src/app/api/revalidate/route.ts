import { revalidateTag } from "next/cache";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return new Response("Invalid token", { status: 401 });
  }

  revalidateTag("settings");
  revalidateTag("collection");
    revalidateTag("collectionSlug");

  revalidateTag("aboutUs");

  return Response.json({ revalidated: true, now: Date.now() });
}

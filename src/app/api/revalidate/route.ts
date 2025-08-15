import { revalidateTag } from "next/cache";

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return new Response("Invalid token", { status: 401 });
  }

  revalidateTag("settings");
  revalidateTag("collection");
    revalidateTag("collectionSlug");
   revalidateTag("faqs");
  revalidateTag("aboutUs");
  revalidateTag("partner");

return new Response(
    JSON.stringify({ revalidated: true, now: Date.now() }),
    { headers: { "Content-Type": "application/json" } }
  );}

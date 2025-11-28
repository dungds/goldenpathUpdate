import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const payload = await req.json().catch(() => ({}));
    
    const secret = searchParams.get("secret") || payload.secret;
    const tag = payload.tag;

    // Validate
    if (secret !== process.env.NEXT_REVALIDATE_SECRET) {
      return Response.json({ error: "Invalid token" }, { status: 401 });
    }
    if (!tag) {
      return Response.json({ error: "Missing tag" }, { status: 400 });
    }

    // Revalidate (support both string and array)
    const tags = Array.isArray(tag) ? tag : [tag];
    tags.forEach(t => revalidateTag(t));

console.log("📨 Received revalidate request:", tags);
    
    tags.forEach(t => {
      revalidateTag(t);
      console.log(`🗑️  Cache cleared for tag: ${t}`);
    });
    
    console.log("✅ Ready to rebuild cache on next request");
    
    return Response.json({ revalidated: true, tags, now: Date.now() });
  } catch (error) {
    console.error("❌ Revalidation error:", error);
    return Response.json({ error: "Internal error" }, { status: 500 });
  }
}
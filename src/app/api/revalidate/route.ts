// app/api/revalidate/route.ts   ← ghi đè toàn bộ file này
import { revalidateTag } from "next/cache";

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url);

  // 1. Lấy secret từ query string trước (nếu có)
  const querySecret = searchParams.get("secret");

  let payload: any = {};

  // 2. Đọc body 1 lần duy nhất
  try {
    payload = await req.json();
  } catch (e) {
    // nếu không có body hoặc body không phải JSON → bỏ qua
  }

  // 3. Secret có thể nằm ở query hoặc trong body
  const secretFromBody = payload.secret;
  const secret = querySecret || secretFromBody;

  // 4. Kiểm tra secret
  if (secret !== process.env.NEXT_REVALIDATE_SECRET) {
    return new Response("Invalid token", { status: 401 });
  }

  // 5. Lấy tag (chỉ nằm trong body)
  const tag = payload.tag;

  if (!tag) {
    return new Response("Missing tag", { status: 400 });
  }

  // 6. Revalidate ngay lập tức
  revalidateTag(tag as string);

  return Response.json({
    revalidated: true,
    tag,
    now: Date.now(),
    message: "Cache cleared successfully!",
  });
}
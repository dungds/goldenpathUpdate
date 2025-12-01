// scripts/generate-sitemap.js
const fs = require('fs');
const path = require('path');

async function generateSitemap() {
  const baseUrl = 'https://goldenpath.ae';
  const publicDir = path.join(__dirname, '..', 'public');
  const sitemapPath = path.join(publicDir, 'sitemap.xml');

  if (!fs.existsSync(sitemapPath)) {
    console.error('Không tìm thấy public/sitemap.xml – hãy tạo file gốc trước!');
    process.exit(1);
  }

  const fetchJson = async (url) => {
    try {
      const res = await fetch(url, { next: { revalidate: 3600 } });
      const json = await res.json();
      return json.data || [];
    } catch (e) {
      console.error('Lỗi fetch:', url, e.message);
      return [];
    }
  };

  console.log('Đang lấy dữ liệu Services & Industries...');
  const [services, industries] = await Promise.all([
    fetchJson('https://goldenpath.ae/api/services?fields=id,slug,updated_at'),
    fetchJson('https://goldenpath.ae/api/industries?fields=id,slug,updated_at'),
  ]);

  let dynamicUrls = '';
  services.forEach(s => {
    dynamicUrls += `  <url>
    <loc>${baseUrl}/services/${s.slug}</loc>
    <lastmod>${new Date(s.updated_at || Date.now()).toISOString().split('T')[0]}</lastmod>
    <priority>0.8</priority>
  </url>\n`;
  });

  industries.forEach(i => {
    dynamicUrls += `  <url>
    <loc>${baseUrl}/industries/${i.slug}</loc>
    <lastmod>${new Date(i.updated_at || Date.now()).toISOString().split('T')[0]}</lastmod>
    <priority>0.8</priority>
  </url>\n`;
  });

  let sitemap = fs.readFileSync(sitemapPath, 'utf-8');
  const markerStart = '<!-- DYNAMIC_URLS_START -->';
  const markerEnd = '<!-- DYNAMIC_URLS_END -->';

  if (sitemap.includes(markerStart) && sitemap.includes(markerEnd)) {
    sitemap = sitemap.replace(
      new RegExp(`${markerStart}[\\s\\S]*?${markerEnd}`),
      `${markerStart}\n${dynamicUrls}  ${markerEnd}`
    );
  } else {
    console.log('Không tìm thấy marker → thêm vào cuối trước </urlset>');
    sitemap = sitemap.replace('</urlset>', `${dynamicUrls}</urlset>`);
  }

  fs.writeFileSync(sitemapPath, sitemap);
  console.log(`Sitemap đã được cập nhật! ${services.length} services + ${industries.length} industries`);
}

generateSitemap().catch(err => {
  console.error('Lỗi:', err);
  process.exit(1);
});
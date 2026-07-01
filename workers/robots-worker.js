/**
 * robots.txt Worker
 */

export default {
  async fetch() {

    const robots = `User-agent: *

Allow: /

Sitemap: https://www.example.com/sitemap.xml
`;

    return new Response(robots, {
      headers: {
        "Content-Type": "text/plain"
      }
    });

  }
}

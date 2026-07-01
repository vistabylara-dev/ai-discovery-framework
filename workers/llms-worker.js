/**
 * AI Discovery Framework
 * Cloudflare Worker
 * llms.txt Example
 *
 * This is a reference implementation.
 */

export default {
  async fetch(request) {

    const content = `# llms.txt

Organization: Example Company

Website:
https://www.example.com

Documentation:
https://www.example.com/docs

API:
https://www.example.com/api

Contact:
info@example.com

Description:
Example AI-ready website documentation.

`;

    return new Response(content, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=3600"
      }
    });

  }
}

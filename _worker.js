export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname.startsWith('/api/nextdns')) {
      const subPath = url.pathname.replace('/api/nextdns', '');
      const targetUrl = `https://api.nextdns.io${subPath}${url.search}`;

      const newHeaders = new Headers(request.headers);
      if (env.NEXTDNS_API_KEY && !newHeaders.has('x-api-key')) {
        newHeaders.set('X-Api-Key', env.NEXTDNS_API_KEY);
      }
      newHeaders.delete('host');

      const proxyReq = new Request(targetUrl, {
        method: request.method,
        headers: newHeaders,
        body: request.method !== 'GET' && request.method !== 'HEAD' ? request.body : undefined,
        redirect: 'follow'
      });

      try {
        const response = await fetch(proxyReq);
        const corsHeaders = {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, X-Api-Key',
        };
        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers: new Headers({ ...Object.fromEntries(response.headers), ...corsHeaders })
        });
      } catch (err) {
        return new Response(JSON.stringify({ error: 'Proxy failed', message: err.message }), {
          status: 502,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      }
    }

    return env.ASSETS.fetch(request);
  }
};
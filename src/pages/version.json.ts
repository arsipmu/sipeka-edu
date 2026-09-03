import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const buildInfo = {
    timestamp: Date.now(),
    buildDate: new Date().toISOString(),
    version: process.env.GITHUB_SHA || 'local-build'
  };

  return new Response(JSON.stringify(buildInfo), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
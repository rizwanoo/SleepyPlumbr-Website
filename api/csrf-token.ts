import type { IncomingMessage, ServerResponse } from 'node:http';
import { createCsrfToken } from '../lib/contactSecurity';

export default function handler(
  _req: IncomingMessage,
  res: ServerResponse & { status?: (code: number) => { json: (data: unknown) => void } }
) {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(JSON.stringify({ csrfToken: createCsrfToken() }));
}

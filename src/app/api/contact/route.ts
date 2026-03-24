import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1, 'Nom requis').max(100, 'Nom trop long').trim(),
  email: z.string().email('Email invalide').max(254, 'Email trop long').trim(),
  message: z.string().min(10, 'Message trop court').max(2000, 'Message trop long').trim(),
  honeypot: z.string().max(0, 'Bot detected').optional(),
})

// In-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW_MS = 60_000

function getClientIP(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'
  )
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return true
  }

  if (entry.count >= RATE_LIMIT_MAX) return false

  entry.count++
  return true
}

export async function POST(req: NextRequest) {
  const ip = getClientIP(req)

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { success: false, message: 'Trop de requêtes. Réessayez dans une minute.' },
      { status: 429 }
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json(
      { success: false, message: 'Corps de requête invalide.' },
      { status: 400 }
    )
  }

  const result = schema.safeParse(body)
  if (!result.success) {
    return NextResponse.json(
      { success: false, message: 'Données invalides.' },
      { status: 400 }
    )
  }

  const { name, email, message } = result.data

  // Log server-side (add Resend/SendGrid here later)
  console.log('[Contact Form]', {
    name,
    email: email.replace(/(.{2})(.*)(@.*)/, '$1***$3'),
    messageLength: message.length,
    ip,
    timestamp: new Date().toISOString(),
  })

  return NextResponse.json(
    { success: true, message: 'Message reçu avec succès.' },
    { status: 200 }
  )
}

export async function GET() {
  return NextResponse.json({ status: 'ok' }, { status: 200 })
}

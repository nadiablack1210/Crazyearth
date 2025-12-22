export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const tables = await prisma.casino.findMany({ take: 1 });
  return NextResponse.json({ ok: true, sample: tables });
}

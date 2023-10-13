import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { Resend } from "resend";
import { z } from "zod";
import bcrypt from "bcrypt";

import { findUserByEmail } from "../utils";
import { reportError } from "../utils/nextResponses";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(5),
});
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validation = schema.safeParse(body);
    if (!validation.success) return reportError(validation.error.errors, 400);

    const user = await findUserByEmail(body.email);
    if (user) return reportError("User already exists", 400);

    // we want to hash the password
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const newUser = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        hashedPassword,
      },
    });

    if (newUser) {
      // the free testing account is bounded onboarding@resend.dev to c.alvarado_@hotmail.com
      // this is for testing purposes only
      // I you want to open the gates to send to multiple recipients, you need to pay.
      //
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "c.alvarado_@hotmail.com",
        subject: "Welcome abroad!",
        react: (
          <WelcomeTemplate
            id={newUser.id}
            name={newUser.name!}
            email={newUser.email!}
          />
        ),
      });
    }

    return NextResponse.json({ email: newUser.email });
  } catch (e) {
    return reportError(e, 500);
  }
}

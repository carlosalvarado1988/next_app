import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { authOptions } from "../auth/[...nextauth]/route";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  const session = await getServerSession(authOptions);
  const name = session ? session.user!.name : "new user";
  // const email = session ? session.user!.email : "c.alvarado_@hotmail.com";

  await resend.emails.send({
    from: "onboarding@resend.dev", // testing domain tied to account email c.alvarado..
    to: "c.alvarado_@hotmail.com",
    subject: "Welcome abroad!",
    react: <WelcomeTemplate name={name!} />,
  });
  return NextResponse.json({});
}

// Notes:
// the reason this is a GET operation (it should be POST), is to test from the browser
// here is an attempt to get the session data. however you can handle this from different ways to make it dynamic
// 1. receive all dynamic data as params.
// 2. get the session data from the token send in the request.

// 3. most likely this implementation will be a callback function within a business logic.
// so you can count on a session registered instead of a separate endpoint.
// so most likely you can access the data via getServerSession

// testing domain tied to account email c.alvarado..
// once a custom domain is setup, then any email can recieve

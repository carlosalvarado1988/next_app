import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
  Tailwind,
} from "@react-email/components";

interface Props {
  id: string;
  name?: string;
  email?: string;
}

const WelcomeTemplate = ({ id, name, email }: Props) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body style={body}>
          <Container>
            <Text className="font-bold text-4xl">Hello {name}</Text>
            <Text>
              We are happy to announce you that we have created an account for
              you:
            </Text>
            <ul>
              <li className="font-bold">User ID: {id}</li>
              <li className="font-bold">Name: {name}</li>
              <li className="font-bold">Email: {email}</li>
            </ul>

            <Text className="">
              Please make sure to visit our{" "}
              <Link href="https://next-app-ten-azure.vercel.app/">website</Link>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const body: CSSProperties = {
  background: "#ffff",
};

export default WelcomeTemplate;

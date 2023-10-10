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

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body style={body}>
          <Container>
            <Text className="font-bold text-3xl">Hello {name}</Text>
            <Link href="https://next-app-ten-azure.vercel.app/">
              Visit the website
            </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const body: CSSProperties = {
  background: "#ffff",
};

const heading: CSSProperties = {
  fontSize: "32px",
};

export default WelcomeTemplate;

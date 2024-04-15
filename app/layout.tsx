import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript, Flex } from "@mantine/core";
import { theme } from "../theme";
import { Footer } from "../components/footer";
import { QuizProvider } from "../context/QuizProvider";

export const metadata = {
  title: "Fun History Quiz",
  description: "Expand your knowledge!",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <QuizProvider>
            <Flex
              direction={"column"}
              gap={10}
              style={{
                background: "linear-gradient(135deg, #3550DC, #27E9F7)",
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {children}
              <Footer />
            </Flex>
          </QuizProvider>
        </MantineProvider>
      </body>
    </html>
  );
}

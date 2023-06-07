"use client";

export default function GlobalError() {
  return (
    <html>
      <head>
        <title>Error!</title>
      </head>
      <body>
        {/* @ts-ignore */}
        <marquee>An error occurred!</marquee>
      </body>
    </html>
  );
}

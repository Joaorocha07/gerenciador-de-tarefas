import React, { type ReactNode } from 'react'

interface IRootLayout {
  children: ReactNode
}

export default function RootLayout({ children }: IRootLayout): JSX.Element {
  return (
    <html lang="pt-br">
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}

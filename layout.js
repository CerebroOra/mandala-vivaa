export const metadata = {
  title: 'Mandala Viva',
  description: 'Plataforma de Frequência Unificada'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{ background: '#111', color: '#fff', fontFamily: 'sans-serif', padding: '2rem' }}>
        {children}
      </body>
    </html>
  )
}

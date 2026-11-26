'use client'

import { useState } from 'react'

export default function page() {
    const caracteristicas = [
    'JSX, sintaxe que mistura HTML e JS.',
    'Componentes, funções que retornam JSX.',
    'Componentes Reutilizáveis e Modulares.',
    'Roteamento Automático e APIs.',
    'Hooks: useState, useEffect e useSWR.',
    'Renderização Rápida e SEO Friendly.',
    'TypeScript Seguro e Escalável.',
    'Comunidade Ativa e Popularidade.'
]

const [mensagem, setMensagem] = useState('Olá! Bem-vindo!')

  return (
    <>
    <h2>Características do React e Next.js.</h2>

    <ul>
        {caracteristicas.map((caracteristica, i) => {
            return <li key={i}>{caracteristica}</li>
        })}

        <button onClick={() => setMensagem('Obrigado pelo clique!')}>
            Clica aqui
        </button>

        <p>{mensagem}</p>
    </ul>
</>
  )
}

# Bicho Forte — site institucional

Pet shop e farmácia veterinária no Canto do Forte, Praia Grande/SP. Site estático em **Astro 5 + Tailwind CSS 4**. Fonte da verdade do escopo: [`docs/spec/bicho-forte.md`](docs/spec/bicho-forte.md).

## Rodar
```bash
npm install
npm run dev        # desenvolvimento
npm run build      # gera dist/ e atualiza a CSP em vercel.json (scripts/csp.mjs)
npm run preview    # serve dist/
```

## Onde editar
- `src/data/negocio.json`: endereço, telefones, WhatsApp, horário, links. Tudo no site lê daqui.
- `src/pages/*.astro`: textos de cada página. `src/layouts/Servico.astro`: modelo das páginas de serviço.
- `src/assets/`: fotos e logo (originais em `assets-origem/`).
- `vercel.json`: cabeçalhos de segurança (CSP, HSTS etc.). Servir com os mesmos cabeçalhos em outra hospedagem.

## Decisões
- **Pedido pelo WhatsApp, sem backend:** o formulário "Monte o seu pedido" só monta o link `wa.me`; nada é armazenado (ver política de privacidade).
- **Conteúdo sem inventar:** preços, entrega, avaliações e serviços não confirmados ficam fora; pendências em `docs/spec/bicho-forte.md` §3.
- **Tipografia:** Fredoka (títulos) e Nunito (texto), em vez da dupla sugerida pela direção sorteada, para acompanhar o lettering arredondado do logo.
- **Dependências:** `npm audit` aponta avisos no toolchain de build do Astro (esbuild/sharp/zod); o site publicado é estático e não os executa. Atualizar o Astro quando houver versão compatível com o Node em uso.

## Pendências do cliente
Fotos novas em alta resolução (loja, aquários, banho e tosa), logo vetorial, área e taxa de entrega, preços, relação com a VetCare, domínio, coordenadas para o JSON-LD.

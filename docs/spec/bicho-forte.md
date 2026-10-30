# Spec de implementação — Site institucional Bicho Forte (Praia Grande/SP)

## 1. Missão e resultado esperado
Criar o site institucional de **Bicho Forte – Pet Shop e Farmácia Veterinária**, loja de bairro no Canto do Forte, Praia Grande/SP. Conversão principal: **WhatsApp** (pedido de ração/entrega, agendamento de banho e tosa). Secundárias: ligar, traçar rota. Este documento é a fonte da verdade; skills executam dentro dele. Decisões foram tomadas sem consulta ao cliente (pedido: "implemente toda a solução"); o que não é fato está como `[CONFIRMAR]`.

## 2. Fatos confirmados
- Nome: Bicho Forte (logo: "Pet Shop Bicho Forte"; fachada: "pet shop · Farmácia Veterinária") — fachada, logo.
- Endereço: Av. Mal. Mallet, 504 – Canto do Forte, Praia Grande – SP, 11700-400; placa da fachada indica "504-F" — Maps, fachada.
- Telefone fixo: (13) 3491-4464 (Maps; também na fachada). Segundo fixo "Disk Ração": (13) 3395-0998 — fachada.
- WhatsApp: (13) 98123-6882 — fachada (ícone WhatsApp). 
- Site na fachada: www.bichoforte.com.br — fachada.
- Horário (Maps): seg a sáb 09:00–20:00; domingo fechado. Segunda de Finados: "horário pode mudar" (data pontual, não vai ao site).
- Serviços na fachada: Estética canina, Rações, Acessórios, Aquarismo, Jardinagem, Banho e Tosa, Farmácia Veterinária, Disk Ração (entrega por telefone).
- Interior: gôndolas com rações a granel e embaladas, coleiras/guias, produtos de higiene, aquários/acessórios, sementes e ração para pássaros, roedores.
- Marcas visíveis em prateleira (Pedigree, Bravo, Magnus etc.) — somente prova de que a loja vende, **não** usar logos nem dizer "revendedor oficial".
- Logo: cachorro golden, gato, periquito, hamster e peixinho-dourado no aquário. Comunica: "todos os bichos", ambiente amigável. Cores amostradas: azul céu `#6cd4f7`, azul aro `#153474`, azul marinho `#06174b`, branco `#ffffff`, laranja/âmbar do peixe `#cd803a`, creme `#e9ddc5`.
- Placa vizinha "VetCare – Centro Médico Veterinário Praia Grande, Unidade Forte" (tels (13) 3474-3254 / 3473-3936) compartilha a fachada — relação com a Bicho Forte `[CONFIRMAR]`.

## 3. O que ainda não sabemos
- `[CONFIRMAR]` Bicho Forte e VetCare são o mesmo negócio, parceiros ou apenas vizinhos? (define se vet entra como serviço próprio ou como "parceiro ao lado")
- `[CONFIRMAR]` Entrega: área atendida, taxa, pedido mínimo, formas de pagamento (a fachada mostra Visa/Mastercard, é do VetCare).
- `[CONFIRMAR]` Banho e tosa: portes atendidos, preços, busca/leva, agendamento.
- `[CONFIRMAR]` Ano de fundação, nome do dono/equipe, número do CRMV/CNPJ para rodapé.
- `[CONFIRMAR]` Instagram oficial: https://www.instagram.com/bichoforte (acesso automático bloqueado, HTTP 429; bio e posts não lidos).
- `[CONFIRMAR]` Se o site antigo www.bichoforte.com.br ainda existe (domínio não resolveu neste ambiente).
- `[CONFIRMAR]` Se o logo é definitivo (aparenta ser arte recente e o da fachada é outro: pata em balão azul/roxo).

**Regras de integridade:** nenhum depoimento, nota, número de clientes, prêmio, preço, certificação, "revendedor oficial" ou ano de fundação inventado. Componentes que dependem de dado real (avaliações, preços, galeria de banho e tosa) ficam ocultos enquanto vazios. Sem logos de terceiros. Sem hotlink de imagem de rede social. Fotos com pessoas/animais de clientes só com autorização.

## 4. Análise de marca
- **Nome:** "Bicho Forte" = força e carinho: bicho saudável é bicho forte. Tom brasileiro, coloquial, de bairro. Ponto forte de marca.
- **Logo:** ilustração amigável, fundo azul céu, aro azul escuro, tipografia gorda arredondada branca. Mostra 5 espécies (cães, gatos, aves, peixes, roedores) → diferencial real: **loja de bichos de todo tipo**, incluindo aquarismo e aves, que cadeias grandes cobrem mal.
- **Paleta (tokens obrigatórios):** `--azul-ceu #6cd4f7`, `--azul-aro #153474`, `--azul-marinho #06174b`, `--branco #ffffff`. Acento único: `--ambar #cd803a` (peixe/pelagem) para CTA secundário e detalhes; creme `#e9ddc5` só como fundo de seção. Verde do WhatsApp `#25D366`/`#128C7E` apenas no botão WhatsApp.
- **Personalidade:** acolhedora, confiável, da vizinhança, prática. Não "premium frio", não infantilóide.
- **Posicionamento:** "O pet shop do Canto do Forte para todos os bichos da família: ração, farmácia, banho e tosa e aquarismo, com entrega."
- **Fraquezas a resolver:** fachada densa e poluída; fotos de Maps pequenas/antigas; sem presença organizada online; informações espalhadas entre 4 telefones.

## 5. Nicho e concorrência
- Mercado pet brasileiro: R$ 77,96 bi em 2025 (+3,45%), projeção de R$ 81 bi para 2026; Brasil é 3º maior do mundo; pet food ≈ 54% do total (Abinpet/Instituto Pet Brasil, via Band e Gironews, 2025–2026). Estimativas de nº de pets variam (≈161–170 mi): não citar no site.
- Concorrência local: Cobasi (Av. Ayrton Senna), Petz (Intermares), Forte dos Pets (creche/hotel, 3 unidades), Angels Pet Studio (também Canto do Forte, desde 2018), Pet Shop Azulão (Anhanguera), Petminas (Boqueirão, delivery). Fonte: Solutudo, Cobasi, Boa Conta, 2026.
- Lacuna: nenhum concorrente local encontrado com foco em aquarismo. Diferenciais provados pela fachada/fotos: aquarismo, jardinagem, farmácia veterinária, ração a granel, "Disk Ração".
- Apostar em: proximidade, atendimento pessoal, variedade de espécies, entrega por telefone/WhatsApp. Não competir por preço nem por "maior loja".

## 6. Público e objetivos
- Principal: moradores do Canto do Forte e bairros vizinhos (Boqueirão, Guilhermina, Aviação), tutores de cães e gatos; secundário: aquaristas, tutores de aves/roedores, veranistas (litoral) que precisam de ração e farmácia pontual.
- Dores: achar ração específica, saber se está aberto, pedir entrega rápido, agendar banho, encontrar remédio veterinário.
- Conversão: cliques em WhatsApp > ligações > rotas. KPIs: taxa de clique no WhatsApp, ligações, rotas, rank "pet shop Canto do Forte".
- Metas técnicas: Lighthouse ≥ 95 (Performance, A11y, SEO, Best Practices) no mobile.

## 7. Direção de design
- **Conceito: "Vitrine de bairro azul".** Cara de loja de rua bem cuidada: céu azul do logo, branco limpo, formas arredondadas como o lettering do logo, pequenos detalhes de pata e bolhas de aquário. Nasce do logo e do litoral, não de template SaaS.
- **Tipografia:** títulos em fonte arredondada, gorda e amigável compatível com o lettering do logo (candidatas: Baloo 2, Fredoka, Nunito Black); corpo em sans legível (Nunito, DM Sans, Inter). Escolha final da design-taste-frontend.
- **Hero:** fundo azul céu com o logo/mascotes em destaque, H1 em **um único bloco legível**: "Tudo para o seu bicho, pertinho de você." Subtexto: "Pet shop e farmácia veterinária no Canto do Forte, Praia Grande." CTA primário "Chamar no WhatsApp" (verde WhatsApp) e secundário "Ver como chegar", ambos acima da dobra a 390 px. Selo de status "Aberto agora / Fecha às 20h" calculado em fuso America/Sao_Paulo.
- **Cor de destaque:** âmbar `#cd803a` em até 2 usos por tela; texto sobre azul céu apenas em azul marinho (contraste), texto branco só sobre azul-aro/marinho.
- **Imagens:** fachada e interiores em molduras arredondadas; nunca esticar.
- **Não fazer:** gradiente roxo/neon, cards de vidro, hero genérico com cachorro de banco de imagens, emojis como ícones, carrossel automático, cores fora da paleta, selo de prêmio, avaliações inventadas, pop-up de entrada.

## 8. UX: páginas e fluxo
Site de 1 home completa + páginas internas leves (URLs limpas):
1. **/ (Home):** hero, faixa "o que temos" (rações, farmácia, banho e tosa, aquarismo, jardinagem, acessórios), por que a Bicho Forte (3–4 diferenciais reais), "Disk Ração / pedido pelo WhatsApp" em 3 passos, fotos da loja, horário + mapa, FAQ curto, CTA final.
2. **/racoes-e-acessorios:** categorias por espécie (cães, gatos, aves, peixes, roedores), ração a granel e embalada, como pedir.
3. **/banho-e-tosa:** serviço, como agendar, o que levar; preços ocultos até confirmados.
4. **/farmacia-veterinaria:** o que a loja oferece, aviso de uso responsável e orientação do veterinário; ponte para o VetCare só se confirmado.
5. **/aquarismo-e-jardinagem:** peixes ornamentais, aquários, filtros, ração; sementes e itens de jardim. Conteúdo só do que as fotos/fachada sustentam.
6. **/contato:** endereço, mapa (link/embed leve com consentimento), horários, telefones, WhatsApp, botão rota.
7. **/politica-de-privacidade.**
- Navegação: Início, Rações, Banho e Tosa, Farmácia, Aquarismo, Contato; botão WhatsApp fixo no mobile (barra inferior com WhatsApp e Ligar). Sem login, sem loja virtual.
- Formulário: **não** há backend; "Fale conosco" abre WhatsApp com mensagem pré-preenchida (nome, bicho, assunto). Zero dado armazenado.
- Botões de contato: `tel:` e `https://wa.me/5513981236882?text=...`.

## 9. Conteúdo
- Tom: vizinho simpático, direto, sem jargão, frases curtas, "você".
- Frases-base: "Ração, remédio, banho e tosa e tudo para aquário num só lugar." / "Pediu pelo WhatsApp, a gente separa." (entrega só como "consulte" até confirmar).
- Texto de cada página: escrever copy final (sem lorem ipsum), afirmando só os fatos da seção 2; onde faltar dado: "Consulte pelo WhatsApp".
- FAQ real e seguro: Qual o horário? Vocês entregam? (consulte área); Como agendar banho? (WhatsApp); Tem ração a granel? (sim, visto na loja; marcas consulte); Atendem aves e peixes? (sim, aquarismo e itens para aves/roedores); Onde fica?
- Páginas educativas (topo de funil, texto original e curto): "Como escolher a ração do seu cachorro", "Primeiros itens para montar um aquário", "Quando levar o pet ao banho e tosa". Sem promessas veterinárias; aviso: "Orientação não substitui consulta com médico-veterinário."
- Aviso legal no rodapé de farmácia: venda de medicamento veterinário conforme legislação e orientação profissional.

## 10. SEO
- Termos: "pet shop Canto do Forte", "pet shop Praia Grande", "banho e tosa Praia Grande", "ração a granel Praia Grande", "farmácia veterinária Praia Grande", "aquarismo Praia Grande", "disk ração Praia Grande".
- Metadados únicos por página (title ≤ 60, description ≤ 155), canonical, Open Graph com imagem própria 1200×630, `lang="pt-BR"`.
- JSON-LD: `PetStore` (LocalBusiness) na home com NAP idêntico ao Maps, `openingHoursSpecification`, `telephone`, `geo` `[CONFIRMAR coordenadas]`; `FAQPage` na home; `BreadcrumbList` nas internas. Sem `aggregateRating` até haver avaliações reais e autorizadas.
- NAP idêntico em todo o site: "Av. Mal. Mallet, 504 – Canto do Forte, Praia Grande – SP, 11700-400".
- `sitemap.xml`, `robots.txt`, links internos entre serviços e contato.
- Checklist Google Meu Negócio para o dono: categoria "Pet shop", categorias secundárias (farmácia veterinária, loja de aquários), serviços, fotos próprias novas, link do site, WhatsApp, postar novidades, pedir avaliações a clientes reais.
- Analytics: opcional e só com consentimento; eventos: `click_whatsapp`, `click_tel`, `click_rota`.

## 11. Performance e acessibilidade
- Metas: LCP ≤ 2,5 s em 4G, CLS ≤ 0,1, INP ≤ 200 ms, Lighthouse ≥ 95.
- Imagens em AVIF/WebP com `srcset`, `width/height`, lazy abaixo da dobra; fontes self-hosted com `font-display: swap` e subset latino; JS mínimo (só status "aberto agora", menu, barra fixa).
- WCAG 2.1 AA: contraste ≥ 4.5:1, foco visível, navegação por teclado, alvo de toque ≥ 44 px, `alt` descritivo, `prefers-reduced-motion`, sem scroll horizontal em 360 px.

## 12. Segurança e privacidade
- Sem backend e sem formulário próprio: superfície de ataque mínima. Links `target=_blank` com `rel="noopener noreferrer"`.
- Headers (via config da hospedagem): CSP restritiva, HSTS, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` restrita.
- LGPD: política de privacidade simples; mapa e analytics de terceiros só após consentimento; nenhum segredo no repositório; `npm audit` limpo ou riscos documentados.

## 13. Stack e estrutura
- **Astro (site estático) + Tailwind CSS**: HTML puro quase sem JS, melhor para SEO e velocidade; sem custo de servidor. Repositório está vazio, sem stack prévia.
- Dados editáveis em `src/data/negocio.json` (nome, NAP, telefones, WhatsApp, horários, serviços, FAQ). Páginas leem desse arquivo; trocar horário ou telefone sem tocar em layout.
- Deploy sugerido: Vercel ou Hostinger estático, domínio bichoforte.com.br `[CONFIRMAR posse]`. Nenhuma variável de ambiente necessária; opcional `PUBLIC_GA_ID`.

## 14. Assets e política de imagens
Inventário (em `assets-origem/`, enviados pelo cliente, origem Google Maps):
| arquivo | mostra | resolução | uso |
|---|---|---|---|
| logo.jpg | logo circular com mascotes | 895×843 | hero/identidade, favicon (recortar circular; pedir vetor) |
| fachada.jpg | fachada com placas | 1206×882 | seção "Como chegar"/contato (não é hero) |
| interior-prateleiras-1.jpg | gôndolas, coleiras, rações | 1206×666 | seção "A loja" |
| interior-racoes.jpg | corredor de rações e higiene | 1206×666 | página rações |
| print-maps-horarios.jpg | print de dados | — | só fonte de dados, **não publicar** |
- Regras: foto do cliente primeiro; miniatura de Maps/Instagram **não** serve para hero (mín. 1600 px) nem destaque; nada repetido em seções; sem banco de imagem de bichos genéricos; placeholders claramente marcados.
- **Fotos necessárias:** hero da loja em 1600 px+, aquários/peixes, ração a granel, banho e tosa (com autorização), equipe, logo vetorial/PNG transparente.

## 15. Processo e QA
- Gate visual: checkpoint após a Home antes das demais páginas; revisão final em 390, 768 e 1440 px com pelo menos um ciclo de correção; relatório final com pendências.

## 16. Critérios de aceite
- [ ] Todas as páginas da seção 8 existem e navegam.
- [ ] NAP, telefones, WhatsApp e horários idênticos à seção 2.
- [ ] Nenhum dado inventado; `[CONFIRMAR]` não aparece como afirmação.
- [ ] CTA WhatsApp acima da dobra a 390 px; barra fixa mobile funcional.
- [ ] Sem scroll horizontal em 360 px; contraste e teclado OK.
- [ ] Lighthouse ≥ 95 mobile; JSON-LD válido; sitemap e robots.
- [ ] Imagens conforme inventário, sem print de dados publicado.
- [ ] Build e lint limpos; headers de segurança configurados.

## 17. Fontes
- Mapa/ficha do negócio, fachada, logo: material enviado pelo cliente (Google Maps), 2026.
- Band, "Setor pet no Brasil movimenta R$ 77,9 bi", 2026: https://www.band.com.br/pets/noticias/setor-pet-no-brasil-movimenta-r-779-bi-confira-tendencias-e-a-petsa-2026-202608111327
- Gironews, "Setor pet projeta faturamento de R$ 81 bilhões em 2026": https://gironews.com/negocios/setor-pet-projeta-faturamento-de-r-81-bilhoes-no-brasil-em-2026/
- Cobasi Praia Grande: https://www.cobasi.com.br/lojas/cobasi-praia-grande
- Forte dos Pets Praia Grande (Solutudo): https://www.solutudo.com.br/empresas/sp/pr-grande/pet-shop/forte-dos-pets-praia-grande-3763660
- Angels Pet Studio (Solutudo): https://www.solutudo.com.br/empresas/sp/pr-grande/casas-de-racao/angels-pet-studio-pet-shop-ltda-23911792
- Instagram @bichoforte: não lido (bloqueio 429); site bichoforte.com.br: sem acesso neste ambiente.

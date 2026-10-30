import negocio from '../data/negocio.json';

// Entrada ao rolar, uma vez por elemento
const reduz = matchMedia('(prefers-reduced-motion: reduce)').matches;
const itens = document.querySelectorAll<HTMLElement>('.rev');
if (reduz || !('IntersectionObserver' in window)) {
  itens.forEach((el) => el.classList.add('in'));
} else {
  const io = new IntersectionObserver(
    (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }),
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  itens.forEach((el) => io.observe(el));
}

// Status "aberto agora" no fuso de Brasília
function status(): { aberto: boolean; texto: string } {
  const p = new Intl.DateTimeFormat('pt-BR', { timeZone: 'America/Sao_Paulo', weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false }).formatToParts(new Date());
  const get = (t: string) => p.find((x) => x.type === t)?.value ?? '';
  const mapa: Record<string, number> = { 'dom.': 0, 'seg.': 1, 'ter.': 2, 'qua.': 3, 'qui.': 4, 'sex.': 5, 'sáb.': 6 };
  const dia = mapa[get('weekday').toLowerCase()] ?? -1;
  const h = parseInt(get('hour'), 10) % 24;
  const { abre, fecha, dias } = negocio.horario;
  if (dias.includes(dia) && h >= abre && h < fecha) return { aberto: true, texto: `Aberto agora, fecha às ${fecha}h` };
  if (dias.includes(dia) && h < abre) return { aberto: false, texto: `Fechado agora, abre às ${abre}h` };
  const amanha = dias.includes((dia + 1) % 7);
  return { aberto: false, texto: amanha ? `Fechado agora, abre amanhã às ${abre}h` : `Fechado hoje, abre segunda às ${abre}h` };
}
const s = status();
document.querySelectorAll<HTMLElement>('[data-status]').forEach((el) => {
  el.textContent = s.texto;
  el.dataset.aberto = String(s.aberto);
});

// Pedido Disk Ração -> WhatsApp
const form = document.querySelector<HTMLFormElement>('#pedido-form');
if (form) {
  const saida = document.querySelector<HTMLAnchorElement>('#pedido-enviar');
  const resumo = document.querySelector<HTMLElement>('#pedido-resumo');
  const montar = () => {
    const d = new FormData(form);
    const bicho = (d.get('bicho') as string) || '';
    const preciso = (d.get('preciso') as string) || '';
    const detalhe = ((d.get('detalhe') as string) || '').trim().slice(0, 300);
    const bairro = ((d.get('bairro') as string) || '').trim().slice(0, 80);
    const nome = ((d.get('nome') as string) || '').trim().slice(0, 60);
    const linhas = [`Olá, Bicho Forte! ${nome ? `Aqui é ${nome}. ` : ''}Quero fazer um pedido.`];
    if (bicho) linhas.push(`Para: ${bicho}`);
    if (preciso) linhas.push(`Preciso de: ${preciso}`);
    if (detalhe) linhas.push(`Detalhes: ${detalhe}`);
    if (bairro) linhas.push(`Bairro para entrega: ${bairro}`);
    const msg = linhas.join('\n');
    if (saida) saida.href = `https://wa.me/${negocio.whatsapp.numero}?text=${encodeURIComponent(msg)}`;
    if (resumo) resumo.textContent = msg;
  };
  form.addEventListener('input', montar);
  form.addEventListener('submit', (e) => { e.preventDefault(); montar(); saida?.click(); });
  montar();
}

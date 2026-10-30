import n from './negocio.json';
export const zap = (msg = 'Olá, Bicho Forte! Vim pelo site.') =>
  `https://wa.me/${n.whatsapp.numero}?text=${encodeURIComponent(msg)}`;
export const nav = [
  { href: '/racoes-e-acessorios', rotulo: 'Rações' },
  { href: '/banho-e-tosa', rotulo: 'Banho e tosa' },
  { href: '/farmacia-veterinaria', rotulo: 'Farmácia' },
  { href: '/aquarismo-e-jardinagem', rotulo: 'Aquarismo' },
  { href: '/contato', rotulo: 'Contato' },
];

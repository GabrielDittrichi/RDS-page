import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

export interface SocialLink {
  icon: React.ComponentType;
  url: string;
  label: string;
}

export interface NavLink {
  name: string;
  url: string;
}

export const socialLinks: SocialLink[] = [
  { icon: FaFacebook, url: '#', label: 'Facebook' },
  { icon: FaTwitter, url: '#', label: 'Twitter' },
  { icon: FaInstagram, url: '#', label: 'Instagram' },
  { icon: FaLinkedin, url: '#', label: 'LinkedIn' },
  { icon: FaYoutube, url: '#', label: 'YouTube' }
];

export const quickLinks: NavLink[] = [
  { name: 'Início', url: '#início' },
  { name: 'Serviços', url: '#serviços' },
  { name: 'Sobre Nós', url: '#sobre' },
  { name: 'Depoimentos', url: '#depoimentos' },
  { name: 'Contato', url: '#contato' }
];

export const serviceLinks: NavLink[] = [
  { name: 'Desenvolvimento Web', url: '#serviços' },
  { name: 'Marketing de Performance', url: '#serviços' },
  { name: 'Gestão de Redes Sociais', url: '#serviços' },
  { name: 'SEO & SEM', url: '#serviços' },
  { name: 'Produção de Conteúdo', url: '#serviços' }
];

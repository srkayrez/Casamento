import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Produto {
  titulo: string;
  descricao: string;
  valor?: number;
  foto: string;
  disabled?: boolean;
  mensagem?: string;
  link?: string;
  pixCopiaECola?: string;
}

@Component({
  selector: 'app-presente',
  imports: [CommonModule],
  templateUrl: './presente.html',
  styleUrl: './presente.css',
  standalone: true,
})
export class Presente {

  produtos = signal<Produto[]>([
    { 
      titulo: 'Sou muito legal e quero mandar um PIX!', 
      descricao: 'Agradecidos!.', 
      foto: '/bensoe.png',
      pixCopiaECola: '00020126820014br.gov.bcb.pix0136c1612e94-c0b0-4e02-bf82-73db161c43cd0220Presente Joao e Tati5204000053039865802BR5911Joao Caires6009Sao Paulo62230519daqr16917573944824063042E51'
    },
    { 
      titulo: 'Mounjaro para o noivo', 
      descricao: 'Kit mounjaro para o noivo perder a barriguinha.', 
      valor: 1100.00, 
      foto: '/mounjaro.png',
      link: 'https://mpago.la/1YTuFQW'
    },
    { 
      titulo: 'Langerie sexy para a lua de mel', 
      descricao: 'Roupa intima para o noivo conquistar a noiva na lua de mel.', 
      valor: 189.00, 
      foto: '/cueca.jpg',
      link: 'https://mpago.la/1VCjDLP'
    },
    { 
      titulo: 'Veiculo de luxo para a entrada da noiva', 
      descricao: 'Veiculo de luxo para a noiva entrar com estilo.', 
      valor: 350, 
      foto: '/vassoura.jpg',
      link: 'https://mpago.la/2PeNDma'
    },
    { 
      titulo: 'Toma aqui uns 50 reais', 
      descricao: 'A Naiara Azevedo que decidiu o valor.', 
      valor: 50.00, 
      foto: '/50reais.png',
      link: 'https://mpago.la/1aTjWHK'
    },
    { 
      titulo: 'Amansa noivo', 
      descricao: 'Ferramenta para a noiva amansar o noivo.', 
      valor: 189.00, 
      foto: '/rolo.jpg',
      link: 'https://mpago.la/2BpCbJp'
    },
    { 
      titulo: 'Capacete contra amansa noivo', 
      descricao: 'Ajude a proteger o noivo.', 
      valor: 120, 
      foto: '/protecao.png',
      link: 'https://mpago.la/2UiXpoa'
    },
    { 
      titulo: '14 meses de aluguel', 
      descricao: 'Ajude os noivos a não serem despejados.', 
      valor: 1500, 
      foto: '/aluguel.png',
      link: 'https://mpago.la/2qyAPYf'
    },
    { 
      titulo: 'Fantasia sexy para a lua de mel', 
      descricao: 'Roupa intima para a noiva conquistar o noivo na lua de mel.', 
      valor: 250.00, 
      foto: '/calcinha.png',
      link: 'https://mpago.la/1nwkjRs'
    },
    { 
      titulo: 'Tapa ouvido para a noiva conseguir dormir', 
      descricao: 'É serio! ele parece um trator.', 
      valor: 200.00, 
      foto: '/tapaouvido.jpg',
      link: 'https://mpago.la/25tViji'
    },
    { 
      titulo: '1 ano de corte de cabelo xique pro noivo', 
      descricao: 'Lindo de mais.', 
      valor: 650.00, 
      foto: '/cabelo.png',
      link: 'https://mpago.la/2KuY7UR'
    },
    { 
      titulo: '1 mês de comida garantida', 
      descricao: 'Garanta que os noivos não fiquem com fome.', 
      valor: 850.00, 
      foto: '/1mescomida.jpg',
      link: 'https://mpago.la/2VsTNkW'
    },
    {
      titulo: 'Dia de princesa da noiva',
      descricao: 'Ajude a noiva a ter um dia de princesa!',
      valor: 950.00,
      foto: '/princesa.jpeg',
      link: 'https://mpago.la/2g7Ysb8'
    },
    {
      titulo: 'Mimo para o bebê (não estou grávida, o bebê sou eu).',
      descricao: 'Sou apenas um bebê!',
      valor: 1200.00,
      foto: '/bebe.png',
      link: 'https://mpago.la/1iBLHND'
    },
    {
      titulo: '1 Ano de ração pra Hel Faminta!.',
      descricao: 'Vai me negar um prato de comida?!',
      valor: 2000.00,
      foto: '/racao.jpeg',
      link: 'https://mpago.la/1xAdxHR'
    },
    {
      titulo: 'Deus tocou seu coração.',
      descricao: 'Não sei nem como agradecer, mas se Deus tocou seu coração, é porque ele tem um propósito lindo para você nessa história.',
      valor: 3000.00,
      foto: '/jesus.jpg',
      link: 'https://mpago.la/27RRExy'
    },
    {
      titulo: 'Você transcendeu e quer nos abençoar.',
      descricao: 'Meu Deus, muito obrigada por você transcender e querer nos abençoar com essa quantia. Que Deus te abençoe em dobro!',
      valor: 5000.00,
      foto: '/transendendo.jpg',
      link: 'https://mpago.la/1nTNiWx'
    },
    {
      titulo: 'Levar alguém que não foi convidado.',
      descricao: 'Tomara que você morra 💀',
      valor: 35000.00,
      foto: '/otario.jpeg',
      disabled: true,
      mensagem: "Sério mesmo? vacilão!"
    }
  ]);

  isPixProduto(produto: Produto) {
    return Boolean(produto.pixCopiaECola);
  }

  async copiarPix(produto: Produto) {
    if (!produto.pixCopiaECola) {
      return;
    }

    await this.copiarTexto(produto.pixCopiaECola);
    alert('Pix copia e cola copiado!');
  }

  async abrirAppBanco(produto: Produto) {
    if (!produto.pixCopiaECola) {
      return;
    }

    await this.copiarTexto(produto.pixCopiaECola);
    window.location.href = `pix://pay?payload=${encodeURIComponent(produto.pixCopiaECola)}`;
  }

  comprar(produto: Produto) {
    if (produto.mensagem) {
      alert(produto.mensagem);
      return;
    }

    if (produto.disabled) {
      return;
    }

    if (produto.link) {
      window.location.href = produto.link;
    }
  }

  private async copiarTexto(texto: string) {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(texto);
      return;
    }

    const campoTemporario = document.createElement('textarea');
    campoTemporario.value = texto;
    campoTemporario.style.position = 'fixed';
    campoTemporario.style.opacity = '0';
    document.body.appendChild(campoTemporario);
    campoTemporario.select();
    document.execCommand('copy');
    document.body.removeChild(campoTemporario);
  }
}

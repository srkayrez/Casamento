import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Produto {
  titulo: string;
  descricao: string;
  valor: number;
  foto: string;
  disabled?: boolean;
  mensagem?: string;
  link?: string;
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
      titulo: 'Mounjaro para o noivo', 
      descricao: 'Kit mounjaro para o noivo perder a barriguinha.', 
      valor: 1100.90, 
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
      titulo: 'Levar alguém que não foi convidado.',
      descricao: '💀',
      valor: 35000.00,
      foto: '/otario.jpeg',
      disabled: true,
      mensagem: "Sério mesmo? vacilão!"
    }
  ]);

  comprar(produto: Produto) {
    if (produto.mensagem) {
      alert(produto.mensagem);
      return;
    }

    if (produto.disabled) {
      return;
    }

    console.log('Produto selecionado:', produto.titulo);
    // Aqui você pode adicionar a lógica de abrir link de loja ou modal
  }
}

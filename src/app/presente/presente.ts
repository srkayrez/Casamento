import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Produto {
  titulo: string;
  descricao: string;
  valor: number;
  foto: string;
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
      foto: '/mounjaro.png' 
    },
    { 
      titulo: 'Langerie sexy para a lua de mel', 
      descricao: 'Roupa intima para o noivo conquistar a noiva na lua de mel.', 
      valor: 189.00, 
      foto: '/cueca.jpg' 
    },
    { 
      titulo: 'Veiculo para a noiva', 
      descricao: 'Veiculo de luxo para a noiva usar no dia a dia.', 
      valor: 350, 
      foto: '/vassoura.jpg' 
    },
    { 
      titulo: 'Toma aqui uns 50 reais', 
      descricao: 'A Naiara Azevedo que decidiu o valor.', 
      valor: 56.30, 
      foto: '/50reais.png'
    },
    { 
      titulo: 'amansa noivo', 
      descricao: 'Ferramenta para a noiva amansar o noivo.', 
      valor: 189.00, 
      foto: '/rolo.jpg' 
    },
    { 
      titulo: 'Capacete contra amansa noivo', 
      descricao: 'Ajude a proteger o noivo.', 
      valor: 120, 
      foto: '/protecao.png' 
    },
    { 
      titulo: '14 meses de aluguel', 
      descricao: 'Ajude os noivos a não serem despejados.', 
      valor: 500, 
      foto: '/aluguel.png' 
    },
    { 
      titulo: 'Fantasia sexy para a lua de mel', 
      descricao: 'Roupa intima para a noiva conquistar o noivo na lua de mel.', 
      valor: 150.00, 
      foto: '/calcinha.png' 
    },
    { 
      titulo: 'Tapa ouvido para a noiva conseguir dormir', 
      descricao: 'É serio! ele parece um trator.', 
      valor: 100.00, 
      foto: '/tapaouvido.jpg' 
    },
    { 
      titulo: 'Corte de cabelo xique pro noivo', 
      descricao: 'Lindo de mais.', 
      valor: 85.00, 
      foto: '/cabelo.png' 
    },
    { 
      titulo: '1 mês de comida garantida', 
      descricao: 'Garanta que os noivos não fiquem com fome.', 
      valor: 85.00, 
      foto: '/1mescomida.jpg' 
    },
  ]);

  comprar(produto: Produto) {
    console.log('Produto selecionado:', produto.titulo);
    // Aqui você pode adicionar a lógica de abrir link de loja ou modal
  }
}

# 🦸‍♂️ Classificador de Nível de Herói

Projeto desenvolvido para o desafio prático da trilha de lógica de programação da **DIO (Digital Innovation One)**. O objetivo é consolidar fundamentos como variáveis, operadores, estruturas de decisão e funções.

## 🚀 Tecnologias e Diferenciais

Este projeto foi além do básico para demonstrar boas práticas de desenvolvimento e infraestrutura:

- **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática para maior segurança e clareza no código.
- **[Bun](https://bun.sh/)**: Runtime moderno e extremamente rápido para executar TypeScript nativamente.
- **[Docker](https://www.docker.com/)**: Conteinerização para garantir que o projeto rode em qualquer máquina sem necessidade de configurações locais.

## 🧠 Lógica Implementada

O sistema recebe o nome e a experiência (XP) de um herói e o classifica em níveis:

| XP                      | Nível      |
| :---------------------- | :--------- |
| Menor que 1.000         | Ferro      |
| 1.001 a 2.000           | Bronze     |
| 2.001 a 5.000           | Prata      |
| 5.001 a 7.000           | Ouro       |
| 7.001 a 8.000           | Platina    |
| 8.001 a 9.000           | Ascendente |
| 9.001 a 10.000          | Imortal    |
| Maior ou igual a 10.001 | Radiante   |

---

## 🛠️ Como Executar

Escolha a forma que for mais conveniente para você:

## 1. Via Docker (Recomendado)

A vantagem do Docker é a **portabilidade**. Você não precisa instalar o Bun ou configurar variáveis de ambiente na sua máquina; o container já traz tudo pronto.

### 1. Clone o repositório

```bash
git clone [https://github.com/CrisisUp/desafio-logica-dio.git](https://github.com/CrisisUp/desafio-logica-dio.git)
```

### 2. Entre na pasta

```bash
cd desafio-logica-dio
```

### 3. Build da imagem

```bash
docker build -t classificador-heroi .
```

### 4. Execução interativa

```bash
docker run -it classificador-heroi
```

## 2. Execução Local (Requer Bun)

Se você já utiliza o Bun em seu ambiente:

```bash
bun run src/index.ts
```

## 3. 📝 Metodologia Aplicada (Clean Code)

- Diferente de uma implementação linear, este projeto utiliza:

- Type Aliases: Garantia de que o nível retornado seja sempre um valor válido.

- Encapsulamento: Lógica de classificação isolada em uma função dedicada.

- Early Returns: Código mais legível ao evitar múltiplos blocos else if aninhados.

Desenvolvido por Cristiano (CrisisUp) 🚀

// 1. Definição de Tipos para maior segurança
type NivelHeroi = 
  | "Ferro" | "Bronze" | "Prata" | "Ouro" 
  | "Platina" | "Ascendente" | "Imortal" | "Radiante";

/**
 * Função responsável por classificar o nível baseado no XP
 */
function calcularNivel(xp: number): NivelHeroi {
    if (xp < 1000) return "Ferro";
    if (xp <= 2000) return "Bronze";
    if (xp <= 5000) return "Prata";
    if (xp <= 7000) return "Ouro";
    if (xp <= 8000) return "Platina";
    if (xp <= 9000) return "Ascendente";
    if (xp <= 10000) return "Imortal";
    return "Radiante";
}

// 2. Coleta de dados com o Bun
const nome = prompt("Digite o nome do Herói:");
const xpInput = prompt("Digite a quantidade de XP:");
const xp = parseInt(xpInput || "0");

// 3. Execução
const nivel = calcularNivel(xp);

// 4. Saída formatada
console.log(`\n🏆 Resultado do Classificador:`);
console.log(`O Herói de nome **${nome}** está no nível de **${nivel}**`);
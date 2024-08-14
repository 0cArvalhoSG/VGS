const caixaPrincipal = document.querySelector(".principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        alternativas: [
            {
                texto: "Você sofre com algum problema na sua saúde mental?",
            },
            {
                texto: "Sofre ou já sofreu com depressão?",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "sim, já tive ou ainda tenho.",
            },
            {
                texto: "Toma algum medicamento ou faz acompanhamento médico?",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Procurou auxílio na escola, familiares, entre outros.",
            },
            {
                texto: "Não procurei nada.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Já procurou ajuda profissional?",
            },
            {
                texto: "Não acho que é necessário.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Você acha que pode cuidar da sua saúde mental sozinho (a)?.",
            },
            {
                texto: "Não quero opnar sobre.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Quer saber mais sobre o que pode estar acontecendo com você? .",
            },
            {
                texto: "Tenho medo ou receio de saber mais sobre o assunto.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: " Asinedade ou depressão são doenças que podem ser curadas!.",
            },
            {
                texto: "Espero ter ajudado, não lute contra isso sozinho (a).",
            }
        ]
    },

];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraAlternativas(){
    perguntaAtual = perguntas[atual];
    caixaAlternativas.textContent = "";

    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    atual++;
    mostraAlternativas();
}


mostraAlternativas();
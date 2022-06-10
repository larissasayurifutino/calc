// Carregar os dados
let quants_fem = [{"quantil": 0, "valor": 0.8}, {"quantil": 1, "valor": 1.34}, {"quantil": 2, "valor": 1.728}, {"quantil": 3, "valor": 2.564}, {"quantil": 4, "valor": 3.0}, {"quantil": 5, "valor": 3.34}, {"quantil": 6, "valor": 3.5}, {"quantil": 7, "valor": 3.516}, {"quantil": 8, "valor": 3.78}, {"quantil": 9, "valor": 5.7}, {"quantil": 10, "valor": 6.84}, {"quantil": 11, "valor": 7.168}, {"quantil": 12, "valor": 7.424}, {"quantil": 13, "valor": 7.864}, {"quantil": 14, "valor": 9.0}, {"quantil": 15, "valor": 9.1}, {"quantil": 16, "valor": 9.316}, {"quantil": 17, "valor": 9.692}, {"quantil": 18, "valor": 10.084}, {"quantil": 19, "valor": 10.172}, {"quantil": 20, "valor": 10.54}, {"quantil": 21, "valor": 11.292}, {"quantil": 22, "valor": 11.536}, {"quantil": 23, "valor": 11.8}, {"quantil": 24, "valor": 12.0}, {"quantil": 25, "valor": 12.2}, {"quantil": 26, "valor": 12.388}, {"quantil": 27, "valor": 12.6}, {"quantil": 28, "valor": 12.828}, {"quantil": 28, "valor": 13.004}, {"quantil": 30, "valor": 13.1}, {"quantil": 31, "valor": 13.228}, {"quantil": 32, "valor": 13.416}, {"quantil": 33, "valor": 13.9}, {"quantil": 34, "valor": 14.176}, {"quantil": 35, "valor": 14.28}, {"quantil": 36, "valor": 14.368}, {"quantil": 37, "valor": 14.4}, {"quantil": 38, "valor": 14.444}, {"quantil": 39, "valor": 14.632}, {"quantil": 40, "valor": 14.8}, {"quantil": 41, "valor": 14.908}, {"quantil": 42, "valor": 15.0}, {"quantil": 43, "valor": 15.1}, {"quantil": 44, "valor": 15.2}, {"quantil": 45, "valor": 15.3}, {"quantil": 46, "valor": 15.4}, {"quantil": 47, "valor": 15.436}, {"quantil": 48, "valor": 15.5}, {"quantil": 49, "valor": 15.524}, {"quantil": 50, "valor": 15.8}, {"quantil": 51, "valor": 15.9}, {"quantil": 52, "valor": 15.976}, {"quantil": 53, "valor": 16.064}, {"quantil": 54, "valor": 16.304}, {"quantil": 55, "valor": 16.44}, {"quantil": 56, "valor": 16.5}, {"quantil": 57, "valor": 16.6}, {"quantil": 57, "valor": 16.604}, {"quantil": 59, "valor": 16.792}, {"quantil": 60, "valor": 16.96}, {"quantil": 61, "valor": 17.068}, {"quantil": 62, "valor": 17.2}, {"quantil": 63, "valor": 17.432}, {"quantil": 64, "valor": 17.6}, {"quantil": 65, "valor": 17.9}, {"quantil": 66, "valor": 17.9}, {"quantil": 67, "valor": 17.996}, {"quantil": 68, "valor": 18.268}, {"quantil": 69, "valor": 18.4}, {"quantil": 70, "valor": 18.7}, {"quantil": 71, "valor": 18.8}, {"quantil": 72, "valor": 19.0}, {"quantil": 73, "valor": 19.2}, {"quantil": 74, "valor": 19.324}, {"quantil": 75, "valor": 19.7}, {"quantil": 76, "valor": 19.8}, {"quantil": 77, "valor": 20.076}, {"quantil": 78, "valor": 20.264}, {"quantil": 79, "valor": 20.9}, {"quantil": 80, "valor": 20.98}, {"quantil": 81, "valor": 21.284}, {"quantil": 82, "valor": 21.7}, {"quantil": 83, "valor": 21.804}, {"quantil": 84, "valor": 22.36}, {"quantil": 85, "valor": 22.76}, {"quantil": 86, "valor": 22.868}, {"quantil": 87, "valor": 23.068}, {"quantil": 88, "valor": 23.72}, {"quantil": 89, "valor": 24.132}, {"quantil": 90, "valor": 24.4}, {"quantil": 91, "valor": 25.808}, {"quantil": 92, "valor": 26.38}, {"quantil": 93, "valor": 26.568}, {"quantil": 94, "valor": 26.8}, {"quantil": 95, "valor": 26.9}, {"quantil": 96, "valor": 27.244}, {"quantil": 97, "valor": 28.512}, {"quantil": 98, "valor": 31.096}, {"quantil": 99, "valor": 31.756}]


// Inverter a ordem dos dados
quants_fem.reverse()

// Declarando variáveis
let entradaNumvezes = document.querySelector( '.numvezes' )

let entradaBebida = document.getElementsByClassName( 'bebida' )

let entradaQuantidade = document.querySelector( '.quantidade' )

let entradaGenero = document.querySelector( '.genero' )

// Seleciona o elemento <output>
let saidaNumGramas = document.querySelector( '.output_num_gramas' )

let saidaNumGramasPorDia = document.querySelector( '.output_num_gramas_dia' )

let saidaPercPaises = document.querySelector( '.output_perc_paises' )

//let saidaPais = document.querySelector( '.output_pais' )

let saidaDifBrasilNumDoses = document.querySelector( '.output_dif_brasil_num_doses' )



// Seleciona o elemento 'preenchimento'
let preenchimento = document.querySelector( '.preenchimento' )




// Dispara a função validar cada vez que o usuário digitar
entradaNumvezes.addEventListener( 'input', validar )

// Dispara a função validar_quant cada vez que o usuário digitar
entradaQuantidade.addEventListener( 'input', validar )


function validar(){

    let numvezes = entradaNumvezes.value
    let quantidade = entradaQuantidade.value


    // Força a conversão para número inteiro
    quantidade = parseInt( quantidade )
    numvezes = parseInt( numvezes )

    if ( numvezes >= 0 && quantidade >= 0  ) {
        calcularQuantil( numvezes, quantidade )
    }else{
        limpar()
    }

}


// Encontra quantil
function calcularQuantil( numvezes, quantidade ) {

  let numGramas = (numvezes * quantidade * 10).toFixed(2) // 'let' para que nao vire variavel global // Camel case por convenção

  let numGramasPorDia = (numGramas/30).toFixed(2)

  let consBrasilFem = 19.2

  let difUsuarioBrasil = (numGramasPorDia - consBrasilFem).toFixed(2)

  let difUsuarioBrasilNumDoses = (difUsuarioBrasil/10).toFixed(2)

    if ( numGramasPorDia > consBrasilFem ){
    // Mostrar 
    mostrarDifBrasilNumDoses( difUsuarioBrasilNumDoses, 'usuario' )

    }else{
        if ( numGramasPorDia == consBrasilFem ){
  
            // Mostrar 
            mostrarDifBrasilNumDoses( 0, 'empate' )
        
            }else{
            // Mostrar 
            mostrarDifBrasilNumDoses( Math.abs(difUsuarioBrasilNumDoses), 'pais' )
            }
    }



  //if(genero == 'F'){
    for ( let quant of quants_fem ){
       
        if ( numGramasPorDia > quant.valor){

            let quantil = quant.quantil

            // Mostrar categoria atual
            mostrarQuantil( quantil, numGramas, numGramasPorDia )

            // Paro de checar
            break
        }
    //}
  }
                
}






function mostrarDifBrasilNumDoses( difUsuarioBrasilNumDoses, quemConsomeMais ){

    console.log(quemConsomeMais)

    if(quemConsomeMais == 'usuario'){
        saidaDifBrasilNumDoses.textContent = 'Ou seja, diariamente são ' +  difUsuarioBrasilNumDoses + ' doses/taças/latas a mais que você.'
    }else{
        if(quemConsomeMais == 'empate'){
            saidaDifBrasilNumDoses.textContent = 'Ou seja, o seu consumo é o de uma típica brasileira.'
        }else{
            saidaDifBrasilNumDoses.textContent = 'Ou seja, diariamente são ' +  difUsuarioBrasilNumDoses + ' doses/taças/latas a menos que você.'
        }   
    }

}


function mostrarQuantil( quantil, numGramas, numGramasPorDia ){

    let bebida = document.querySelector('input[name="bebida"]:checked').value;

    // Textual
    saidaPercPaises.textContent = quantil + '%'

    saidaNumGramas.textContent = numGramas + 'g'

    saidaNumGramasPorDia.textContent = numGramasPorDia + 'g'

    // Barra
    preenchimento.style.width = quantil + '%'

    
    // Mudar cor da barra
    if(bebida == 'cerveja'){
        preenchimento.style.background = 'goldenrod'
    }else{
        if(bebida == 'vinho'){
            preenchimento.style.background = 'darkred'
        }else{
            preenchimento.style.background = 'whitesmoke'
        }
    }
}


function limpar(){
    saidaPercPaises.textContent = '…%'

    saidaNumGramas.textContent = '…%'

    saidaNumGramasPorDia.textContent = '…%'

    //saidaPais.textContent = '…%'

    preenchimento.style.width = '0%'
}


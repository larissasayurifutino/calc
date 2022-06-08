// Carregar os dados
let quants_fem = [{"quantil": 0, "valor": 0.8}, {"quantil": 1, "valor": 1.34}, {"quantil": 2, "valor": 1.728}, {"quantil": 3, "valor": 2.564}, {"quantil": 4, "valor": 3.0}, {"quantil": 5, "valor": 3.34}, {"quantil": 6, "valor": 3.5}, {"quantil": 7, "valor": 3.516}, {"quantil": 8, "valor": 3.78}, {"quantil": 9, "valor": 5.7}, {"quantil": 10, "valor": 6.84}, {"quantil": 11, "valor": 7.168}, {"quantil": 12, "valor": 7.424}, {"quantil": 13, "valor": 7.864}, {"quantil": 14, "valor": 9.0}, {"quantil": 15, "valor": 9.1}, {"quantil": 16, "valor": 9.316}, {"quantil": 17, "valor": 9.692}, {"quantil": 18, "valor": 10.084}, {"quantil": 19, "valor": 10.172}, {"quantil": 20, "valor": 10.54}, {"quantil": 21, "valor": 11.292}, {"quantil": 22, "valor": 11.536}, {"quantil": 23, "valor": 11.8}, {"quantil": 24, "valor": 12.0}, {"quantil": 25, "valor": 12.2}, {"quantil": 26, "valor": 12.388}, {"quantil": 27, "valor": 12.6}, {"quantil": 28, "valor": 12.828}, {"quantil": 28, "valor": 13.004}, {"quantil": 30, "valor": 13.1}, {"quantil": 31, "valor": 13.228}, {"quantil": 32, "valor": 13.416}, {"quantil": 33, "valor": 13.9}, {"quantil": 34, "valor": 14.176}, {"quantil": 35, "valor": 14.28}, {"quantil": 36, "valor": 14.368}, {"quantil": 37, "valor": 14.4}, {"quantil": 38, "valor": 14.444}, {"quantil": 39, "valor": 14.632}, {"quantil": 40, "valor": 14.8}, {"quantil": 41, "valor": 14.908}, {"quantil": 42, "valor": 15.0}, {"quantil": 43, "valor": 15.1}, {"quantil": 44, "valor": 15.2}, {"quantil": 45, "valor": 15.3}, {"quantil": 46, "valor": 15.4}, {"quantil": 47, "valor": 15.436}, {"quantil": 48, "valor": 15.5}, {"quantil": 49, "valor": 15.524}, {"quantil": 50, "valor": 15.8}, {"quantil": 51, "valor": 15.9}, {"quantil": 52, "valor": 15.976}, {"quantil": 53, "valor": 16.064}, {"quantil": 54, "valor": 16.304}, {"quantil": 55, "valor": 16.44}, {"quantil": 56, "valor": 16.5}, {"quantil": 57, "valor": 16.6}, {"quantil": 57, "valor": 16.604}, {"quantil": 59, "valor": 16.792}, {"quantil": 60, "valor": 16.96}, {"quantil": 61, "valor": 17.068}, {"quantil": 62, "valor": 17.2}, {"quantil": 63, "valor": 17.432}, {"quantil": 64, "valor": 17.6}, {"quantil": 65, "valor": 17.9}, {"quantil": 66, "valor": 17.9}, {"quantil": 67, "valor": 17.996}, {"quantil": 68, "valor": 18.268}, {"quantil": 69, "valor": 18.4}, {"quantil": 70, "valor": 18.7}, {"quantil": 71, "valor": 18.8}, {"quantil": 72, "valor": 19.0}, {"quantil": 73, "valor": 19.2}, {"quantil": 74, "valor": 19.324}, {"quantil": 75, "valor": 19.7}, {"quantil": 76, "valor": 19.8}, {"quantil": 77, "valor": 20.076}, {"quantil": 78, "valor": 20.264}, {"quantil": 79, "valor": 20.9}, {"quantil": 80, "valor": 20.98}, {"quantil": 81, "valor": 21.284}, {"quantil": 82, "valor": 21.7}, {"quantil": 83, "valor": 21.804}, {"quantil": 84, "valor": 22.36}, {"quantil": 85, "valor": 22.76}, {"quantil": 86, "valor": 22.868}, {"quantil": 87, "valor": 23.068}, {"quantil": 88, "valor": 23.72}, {"quantil": 89, "valor": 24.132}, {"quantil": 90, "valor": 24.4}, {"quantil": 91, "valor": 25.808}, {"quantil": 92, "valor": 26.38}, {"quantil": 93, "valor": 26.568}, {"quantil": 94, "valor": 26.8}, {"quantil": 95, "valor": 26.9}, {"quantil": 96, "valor": 27.244}, {"quantil": 97, "valor": 28.512}, {"quantil": 98, "valor": 31.096}, {"quantil": 99, "valor": 31.756}]


// Inverter a ordem dos dados
quants_fem.reverse()

// Declarando variáveis
let numvezes = document.querySelector( '.numvezes' )

let bebida = document.querySelector( '.bebida' )

let quantidade = document.querySelector( '.quantidade' )

let genero = document.querySelector( '.genero' )

// Seleciona o elemento <output>
let saida = document.querySelector( 'output' )

// Seleciona o elemento 'preenchimento'
let preenchimento = document.querySelector( '.preenchimento' )




// Dispara a função validar_quant cada vez que o usuário digitar
quantidade.addEventListener('quantidade', validar_quant)

// Dispara a função validar_numvezes cada vez que o usuário digitar
numvezes.addEventListener('numvezes', validar_numvezes)
      


function validar_quant(){

    let valor = quantidade.value

    // Força a conversão para número inteiro
    valor = parseInt( valor )

    if ( valor >= 0){
        calcular( valor )
    }else{
        limpar()
    }

}



function validar_numvezes(){

    let valor = numvezes.value

    // Força a conversão para número inteiro
    valor = parseInt( valor )

    if ( valor >= 0){
        calcular( valor )
    }else{
        limpar()
    }

}

// Encontra quantil
function calcular( numvezes, quantidade ){

  num_gramas = numvezes * quantidade * 10

  num_gramas_por_dia = num_gramas/30

  //if(genero == 'F'){
    for ( let quant of quants_fem ){
       
        if ( num_gramas_por_dia > quant.valor){

            let quantil = quant.quantil

            // Motrar categoria atual
            mostrar( quantil )

            // Paro de checar
            break
        }
    //}
  }

    

                
}



function mostrar( quantil ){
    saida.textContent = quantil + '%'

    preenchimento.style.width = quantil + '%'
}



function limpar(){
    saida.textContent = '…%'

    preenchimento.style.width = '0%'
}


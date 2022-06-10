// Carregar os dados
let quants_fem = [{"quantil": 0, "valor": 0.8}, {"quantil": 1, "valor": 1.34}, {"quantil": 2, "valor": 1.728}, {"quantil": 3, "valor": 2.564}, {"quantil": 4, "valor": 3.0}, {"quantil": 5, "valor": 3.34}, {"quantil": 6, "valor": 3.5}, {"quantil": 7, "valor": 3.516}, {"quantil": 8, "valor": 3.78}, {"quantil": 9, "valor": 5.7}, {"quantil": 10, "valor": 6.84}, {"quantil": 11, "valor": 7.168}, {"quantil": 12, "valor": 7.424}, {"quantil": 13, "valor": 7.864}, {"quantil": 14, "valor": 9.0}, {"quantil": 15, "valor": 9.1}, {"quantil": 16, "valor": 9.316}, {"quantil": 17, "valor": 9.692}, {"quantil": 18, "valor": 10.084}, {"quantil": 19, "valor": 10.172}, {"quantil": 20, "valor": 10.54}, {"quantil": 21, "valor": 11.292}, {"quantil": 22, "valor": 11.536}, {"quantil": 23, "valor": 11.8}, {"quantil": 24, "valor": 12.0}, {"quantil": 25, "valor": 12.2}, {"quantil": 26, "valor": 12.388}, {"quantil": 27, "valor": 12.6}, {"quantil": 28, "valor": 12.828}, {"quantil": 28, "valor": 13.004}, {"quantil": 30, "valor": 13.1}, {"quantil": 31, "valor": 13.228}, {"quantil": 32, "valor": 13.416}, {"quantil": 33, "valor": 13.9}, {"quantil": 34, "valor": 14.176}, {"quantil": 35, "valor": 14.28}, {"quantil": 36, "valor": 14.368}, {"quantil": 37, "valor": 14.4}, {"quantil": 38, "valor": 14.444}, {"quantil": 39, "valor": 14.632}, {"quantil": 40, "valor": 14.8}, {"quantil": 41, "valor": 14.908}, {"quantil": 42, "valor": 15.0}, {"quantil": 43, "valor": 15.1}, {"quantil": 44, "valor": 15.2}, {"quantil": 45, "valor": 15.3}, {"quantil": 46, "valor": 15.4}, {"quantil": 47, "valor": 15.436}, {"quantil": 48, "valor": 15.5}, {"quantil": 49, "valor": 15.524}, {"quantil": 50, "valor": 15.8}, {"quantil": 51, "valor": 15.9}, {"quantil": 52, "valor": 15.976}, {"quantil": 53, "valor": 16.064}, {"quantil": 54, "valor": 16.304}, {"quantil": 55, "valor": 16.44}, {"quantil": 56, "valor": 16.5}, {"quantil": 57, "valor": 16.6}, {"quantil": 57, "valor": 16.604}, {"quantil": 59, "valor": 16.792}, {"quantil": 60, "valor": 16.96}, {"quantil": 61, "valor": 17.068}, {"quantil": 62, "valor": 17.2}, {"quantil": 63, "valor": 17.432}, {"quantil": 64, "valor": 17.6}, {"quantil": 65, "valor": 17.9}, {"quantil": 66, "valor": 17.9}, {"quantil": 67, "valor": 17.996}, {"quantil": 68, "valor": 18.268}, {"quantil": 69, "valor": 18.4}, {"quantil": 70, "valor": 18.7}, {"quantil": 71, "valor": 18.8}, {"quantil": 72, "valor": 19.0}, {"quantil": 73, "valor": 19.2}, {"quantil": 74, "valor": 19.324}, {"quantil": 75, "valor": 19.7}, {"quantil": 76, "valor": 19.8}, {"quantil": 77, "valor": 20.076}, {"quantil": 78, "valor": 20.264}, {"quantil": 79, "valor": 20.9}, {"quantil": 80, "valor": 20.98}, {"quantil": 81, "valor": 21.284}, {"quantil": 82, "valor": 21.7}, {"quantil": 83, "valor": 21.804}, {"quantil": 84, "valor": 22.36}, {"quantil": 85, "valor": 22.76}, {"quantil": 86, "valor": 22.868}, {"quantil": 87, "valor": 23.068}, {"quantil": 88, "valor": 23.72}, {"quantil": 89, "valor": 24.132}, {"quantil": 90, "valor": 24.4}, {"quantil": 91, "valor": 25.808}, {"quantil": 92, "valor": 26.38}, {"quantil": 93, "valor": 26.568}, {"quantil": 94, "valor": 26.8}, {"quantil": 95, "valor": 26.9}, {"quantil": 96, "valor": 27.244}, {"quantil": 97, "valor": 28.512}, {"quantil": 98, "valor": 31.096}, {"quantil": 99, "valor": 31.756}]

let consumos_pais_fem = [{"pos": 1, "pais": "Kuwait", "valor": 0.8}, {"pos": 2, "pais": "Bangladesh", "valor": 0.9}, {"pos": 3, "pais": "Brunei Darussalam", "valor": 1.4}, {"pos": 4, "pais": "Somalia", "valor": 1.5}, {"pos": 5, "pais": "Bhutan", "valor": 1.8}, {"pos": 6, "pais": "Niger", "valor": 2.5}, {"pos": 7, "pais": "Djibouti", "valor": 2.6}, {"pos": 8, "pais": "Singapore", "valor": 3.0}, {"pos": 9, "pais": "Malaysia", "valor": 3.0}, {"pos": 10, "pais": "Indonesia", "valor": 3.3}, {"pos": 11, "pais": "Saudi Arabia", "valor": 3.4}, {"pos": 12, "pais": "Kiribati", "valor": 3.5}, {"pos": 13, "pais": "Senegal", "valor": 3.5}, {"pos": 14, "pais": "Mauritania", "valor": 3.5}, {"pos": 15, "pais": "Azerbaijan", "valor": 3.6}, {"pos": 16, "pais": "Qatar", "valor": 3.7}, {"pos": 17, "pais": "Mali", "valor": 5.7}, {"pos": 18, "pais": "Guinea", "valor": 5.7}, {"pos": 19, "pais": "Eritrea", "valor": 6.2}, {"pos": 20, "pais": "Chad", "valor": 7.0}, {"pos": 21, "pais": "Vanuatu", "valor": 7.1}, {"pos": 22, "pais": "Democratic Republic of the Congo", "valor": 7.2}, {"pos": 23, "pais": "Israel", "valor": 7.2}, {"pos": 24, "pais": "Nepal", "valor": 7.6}, {"pos": 25, "pais": "Oman", "valor": 7.6}, {"pos": 26, "pais": "Papua New Guinea", "valor": 8.2}, {"pos": 27, "pais": "Central African Republic", "valor": 9.0}, {"pos": 28, "pais": "Yemen", "valor": 9.0}, {"pos": 29, "pais": "Madagascar", "valor": 9.1}, {"pos": 30, "pais": "Guatemala", "valor": 9.1}, {"pos": 31, "pais": "Timor-Leste", "valor": 9.3}, {"pos": 32, "pais": "Democratic People's Republic of Korea", "valor": 9.5}, {"pos": 33, "pais": "Ecuador", "valor": 9.7}, {"pos": 34, "pais": "Norway", "valor": 10.0}, {"pos": 35, "pais": "Solomon Islands", "valor": 10.1}, {"pos": 36, "pais": "Bahamas", "valor": 10.1}, {"pos": 37, "pais": "Ghana", "valor": 10.2}, {"pos": 38, "pais": "Tonga", "valor": 10.3}, {"pos": 39, "pais": "Bolivia (Plurinational State of)", "valor": 10.7}, {"pos": 40, "pais": "Mauritius", "valor": 11.1}, {"pos": 41, "pais": "Mozambique", "valor": 11.5}, {"pos": 42, "pais": "Benin", "valor": 11.5}, {"pos": 43, "pais": "Tuvalu", "valor": 11.6}, {"pos": 44, "pais": "Jamaica", "valor": 11.8}, {"pos": 45, "pais": "Iraq", "valor": 11.8}, {"pos": 46, "pais": "Suriname", "valor": 12.0}, {"pos": 47, "pais": "Togo", "valor": 12.0}, {"pos": 48, "pais": "Peru", "valor": 12.2}, {"pos": 49, "pais": "Italy", "valor": 12.3}, {"pos": 50, "pais": "Uzbekistan", "valor": 12.4}, {"pos": 51, "pais": "Netherlands", "valor": 12.6}, {"pos": 52, "pais": "Ethiopia", "valor": 12.6}, {"pos": 53, "pais": "Costa Rica", "valor": 12.7}, {"pos": 54, "pais": "China", "valor": 12.9}, {"pos": 55, "pais": "Cuba", "valor": 12.9}, {"pos": 56, "pais": "Bosnia and Herzegovina", "valor": 13.1}, {"pos": 57, "pais": "El Salvador", "valor": 13.1}, {"pos": 58, "pais": "Malta", "valor": 13.1}, {"pos": 59, "pais": "Sweden", "valor": 13.2}, {"pos": 60, "pais": "Egypt", "valor": 13.3}, {"pos": 61, "pais": "Iceland", "valor": 13.4}, {"pos": 62, "pais": "Honduras", "valor": 13.5}, {"pos": 63, "pais": "Syrian Arab Republic", "valor": 13.9}, {"pos": 64, "pais": "Kenya", "valor": 13.9}, {"pos": 65, "pais": "Japan", "valor": 14.2}, {"pos": 66, "pais": "Angola", "valor": 14.2}, {"pos": 67, "pais": "Gambia", "valor": 14.3}, {"pos": 68, "pais": "Canada", "valor": 14.3}, {"pos": 69, "pais": "India", "valor": 14.4}, {"pos": 70, "pais": "Australia", "valor": 14.4}, {"pos": 71, "pais": "Chile", "valor": 14.4}, {"pos": 72, "pais": "United States of America", "valor": 14.4}, {"pos": 73, "pais": "Sri Lanka", "valor": 14.5}, {"pos": 74, "pais": "Trinidad and Tobago", "valor": 14.6}, {"pos": 75, "pais": "Antigua and Barbuda", "valor": 14.7}, {"pos": 76, "pais": "Denmark", "valor": 14.8}, {"pos": 77, "pais": "Venezuela (Bolivarian Republic of)", "valor": 14.8}, {"pos": 78, "pais": "Samoa", "valor": 14.9}, {"pos": 79, "pais": "Montenegro", "valor": 15.0}, {"pos": 80, "pais": "Albania", "valor": 15.0}, {"pos": 81, "pais": "Spain", "valor": 15.1}, {"pos": 82, "pais": "Colombia", "valor": 15.1}, {"pos": 83, "pais": "The former Yugoslav Republic of Macedonia", "valor": 15.2}, {"pos": 84, "pais": "Switzerland", "valor": 15.2}, {"pos": 85, "pais": "Ukraine", "valor": 15.3}, {"pos": 86, "pais": "Croatia", "valor": 15.3}, {"pos": 87, "pais": "Mexico", "valor": 15.4}, {"pos": 88, "pais": "New Zealand", "valor": 15.4}, {"pos": 89, "pais": "Tajikistan", "valor": 15.4}, {"pos": 90, "pais": "Luxembourg", "valor": 15.5}, {"pos": 91, "pais": "Argentina", "valor": 15.5}, {"pos": 92, "pais": "Malawi", "valor": 15.5}, {"pos": 93, "pais": "Finland", "valor": 15.5}, {"pos": 94, "pais": "Micronesia (Federated States of)", "valor": 15.7}, {"pos": 95, "pais": "Congo", "valor": 15.8}, {"pos": 96, "pais": "Fiji", "valor": 15.9}, {"pos": 97, "pais": "Andorra", "valor": 15.9}, {"pos": 98, "pais": "Austria", "valor": 15.9}, {"pos": 99, "pais": "Nicaragua", "valor": 16.0}, {"pos": 100, "pais": "Guyana", "valor": 16.0}, {"pos": 101, "pais": "Cyprus", "valor": 16.1}, {"pos": 102, "pais": "Dominican Republic", "valor": 16.2}, {"pos": 103, "pais": "Guinea-Bissau", "valor": 16.4}, {"pos": 104, "pais": "Republic of Korea", "valor": 16.4}, {"pos": 105, "pais": "United Kingdom of Great Britain and Northern Ireland", "valor": 16.5}, {"pos": 106, "pais": "Greece", "valor": 16.5}, {"pos": 107, "pais": "United Arab Emirates", "valor": 16.5}, {"pos": 108, "pais": "Panama", "valor": 16.6}, {"pos": 109, "pais": "Equatorial Guinea", "valor": 16.6}, {"pos": 110, "pais": "Belize", "valor": 16.6}, {"pos": 111, "pais": "Haiti", "valor": 16.7}, {"pos": 112, "pais": "Uruguay", "valor": 16.8}, {"pos": 113, "pais": "Belgium", "valor": 16.8}, {"pos": 114, "pais": "Estonia", "valor": 17.0}, {"pos": 115, "pais": "Cabo Verde", "valor": 17.0}, {"pos": 116, "pais": "Belarus", "valor": 17.1}, {"pos": 117, "pais": "Myanmar", "valor": 17.2}, {"pos": 118, "pais": "Ireland", "valor": 17.2}, {"pos": 119, "pais": "Slovakia", "valor": 17.3}, {"pos": 120, "pais": "Saint Vincent and the Grenadines", "valor": 17.6}, {"pos": 121, "pais": "Saint Kitts and Nevis", "valor": 17.6}, {"pos": 122, "pais": "Turkmenistan", "valor": 17.6}, {"pos": 123, "pais": "Zambia", "valor": 17.9}, {"pos": 124, "pais": "France", "valor": 17.9}, {"pos": 125, "pais": "Poland", "valor": 17.9}, {"pos": 126, "pais": "Hungary", "valor": 17.9}, {"pos": 127, "pais": "Germany", "valor": 18.0}, {"pos": 128, "pais": "Dominica", "valor": 18.1}, {"pos": 129, "pais": "Slovenia", "valor": 18.3}, {"pos": 130, "pais": "Sierra Leone", "valor": 18.4}, {"pos": 131, "pais": "Gabon", "valor": 18.4}, {"pos": 132, "pais": "Liberia", "valor": 18.7}, {"pos": 133, "pais": "Latvia", "valor": 18.7}, {"pos": 134, "pais": "Bahrain", "valor": 18.8}, {"pos": 135, "pais": "Portugal", "valor": 18.8}, {"pos": 136, "pais": "Grenada", "valor": 19.0}, {"pos": 137, "pais": "Serbia", "valor": 19.0}, {"pos": 138, "pais": "Kazakhstan", "valor": 19.2}, {"pos": 139, "pais": "Brazil", "valor": 19.2}, {"pos": 140, "pais": "Barbados", "valor": 19.3}, {"pos": 141, "pais": "Romania", "valor": 19.5}, {"pos": 142, "pais": "Philippines", "valor": 19.7}, {"pos": 143, "pais": "Thailand", "valor": 19.8}, {"pos": 144, "pais": "Bulgaria", "valor": 19.8}, {"pos": 145, "pais": "Paraguay", "valor": 20.0}, {"pos": 146, "pais": "Czechia", "valor": 20.1}, {"pos": 147, "pais": "Saint Lucia", "valor": 20.2}, {"pos": 148, "pais": "Sao Tome and Principe", "valor": 20.3}, {"pos": 149, "pais": "Sudan", "valor": 20.9}, {"pos": 150, "pais": "Armenia", "valor": 20.9}, {"pos": 151, "pais": "Lithuania", "valor": 20.9}, {"pos": 152, "pais": "Niue", "valor": 21.1}, {"pos": 153, "pais": "Comoros", "valor": 21.2}, {"pos": 154, "pais": "Mongolia", "valor": 21.5}, {"pos": 155, "pais": "Cook Islands", "valor": 21.7}, {"pos": 156, "pais": "C\u00c3\u00b4te d\u00e2\u0080\u0099Ivoire", "valor": 21.7}, {"pos": 157, "pais": "Seychelles", "valor": 21.8}, {"pos": 158, "pais": "Cambodia", "valor": 21.9}, {"pos": 159, "pais": "Viet Nam", "valor": 22.4}, {"pos": 160, "pais": "Burkina Faso", "valor": 22.6}, {"pos": 161, "pais": "Morocco", "valor": 22.8}, {"pos": 162, "pais": "Russian Federation", "valor": 22.8}, {"pos": 163, "pais": "Jordan", "valor": 22.9}, {"pos": 164, "pais": "Cameroon", "valor": 22.9}, {"pos": 165, "pais": "Lebanon", "valor": 23.2}, {"pos": 166, "pais": "Kyrgyzstan", "valor": 23.5}, {"pos": 167, "pais": "Republic of Moldova", "valor": 24.0}, {"pos": 168, "pais": "Burundi", "valor": 24.1}, {"pos": 169, "pais": "Libya", "valor": 24.2}, {"pos": 170, "pais": "Iran (Islamic Republic of)", "valor": 24.4}, {"pos": 171, "pais": "Pakistan", "valor": 24.4}, {"pos": 172, "pais": "Turkey", "valor": 25.8}, {"pos": 173, "pais": "Botswana", "valor": 25.9}, {"pos": 174, "pais": "United Republic of Tanzania", "valor": 26.4}, {"pos": 175, "pais": "Nigeria", "valor": 26.4}, {"pos": 176, "pais": "Lao People's Democratic Republic", "valor": 26.6}, {"pos": 177, "pais": "Nauru", "valor": 26.8}, {"pos": 178, "pais": "Rwanda", "valor": 26.8}, {"pos": 179, "pais": "Uganda", "valor": 26.9}, {"pos": 180, "pais": "Algeria", "valor": 26.9}, {"pos": 181, "pais": "Zimbabwe", "valor": 27.1}, {"pos": 182, "pais": "Georgia", "valor": 27.4}, {"pos": 183, "pais": "Lesotho", "valor": 27.9}, {"pos": 184, "pais": "South Africa", "valor": 29.6}, {"pos": 185, "pais": "Afghanistan", "valor": 31.0}, {"pos": 186, "pais": "Tunisia", "valor": 31.4}, {"pos": 187, "pais": "Maldives", "valor": 31.6}, {"pos": 188, "pais": "Namibia", "valor": 32.9}, {"pos": 189, "pais": "Eswatini", "valor": 34.9}]

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

let saidaPais = document.querySelector( '.output_pais' )

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



function acharPaisVizinho( numvezes, quantidade ) {

    let numGramas = numvezes * quantidade * 10 // 'let' para que nao vire variavel global // Camel case por convenção
  
    let numGramasPorDia = numGramas/30

    const difUsuarioPais = [];

    const difUsuarioPaisAbsoluteValue = [];
  
    //if(genero == 'F'){
      for ( let consumo of consumos_pais_fem ){

        let dif = consumo - numGramasPorDia // diferença entre o numGramasPorDia do usuario e p consumo do pais

        let difAbs = Math.abs(dif) // diferença em valor absoluto

        difUsuarioPais.push(dif);

        difUsuarioPaisAbsoluteValue.push(difAbs)

      //}
        }
        // Qual o valor minimo dos valores absolutos?
        const minDifUsuarioPaisAbsoluteValue = Math.min.apply(null, difUsuarioPaisAbsoluteValue);

        // Qual a posição do vetor?
        const index = arr.indexOf(minDifUsuarioPaisAbsoluteValue);

        for ( let consumo of consumos_pais_fem ){

            if(consumo == minDifUsuarioPaisAbsoluteValue){
               let pais = consumo.pais
            }

            // Motrar categoria atual
            mostrarPais( pais )

            // Paro de checar
            break

          //}
            }
                  
  }


function mostrarPais( pais ){
    saidaPais.textContent = pais 
}  

document.addEventListener('DOMContentLoaded', function() {
    const pantalla = document.getElementById('pantalla');
    const botones = document.querySelectorAll('button');
    let entradaActual = '';
    let operador = null;
    let entradaAnterior = '';

    for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener('click', function() {
            const valor = this.getAttribute('data-value');

            if (!isNaN(valor) || valor === '.') {
                if (valor === '.' && entradaActual.includes('.')) return;
                entradaActual += valor;
                actualizarPantalla();
            }
            else if (valor === 'AC') {
                entradaActual = '';
                entradaAnterior = '';
                operador = null;
                pantalla.value = '0';
            }
            else if (valor === 'DEL') {
                if (entradaActual !== '') {
                    entradaActual = entradaActual.slice(0, -1);
                } else if (operador !== null) {
                    operador = null;
                } else if (entradaAnterior !== '') {
                    entradaAnterior = entradaAnterior.slice(0, -1);
                }
                actualizarPantalla();
            }
            else if (valor === '=') {
                if (operador && (entradaAnterior !== '' || ['sqrt', 'cos', 'tan'].includes(operador)) && entradaActual !== '') {
                    calcular();
                }
            }
            else if (['+', '-', '*', '/', '%', '^'].includes(valor)) {
                if (entradaActual === '' && entradaAnterior === '') return;
                if (entradaAnterior !== '' && entradaActual !== '') {
                    calcular();
                }
                if (entradaActual !== '') {
                    entradaAnterior = entradaActual;
                }
                operador = valor;
                entradaActual = '';
                actualizarPantalla();
            }
            else if (['sqrt', 'cos', 'tan'].includes(valor)) {
                if (entradaActual === '' && entradaAnterior === '') {
                    operador = valor;
                    actualizarPantalla();
                }
            }
        });
    }

    function actualizarPantalla() {
        if (operador && ['sqrt', 'cos', 'tan'].includes(operador) && entradaAnterior === '') {
            let simbolo = operador === 'sqrt' ? '√' : operador;
            pantalla.value = `${simbolo}(${entradaActual})`;
        } else {
            pantalla.value = (entradaAnterior + (operador || '') + entradaActual) || '0';
        }
    }

    function calcular() {
        let resultado;
        const anterior = Number(entradaAnterior);
        const actual = Number(entradaActual);
        if (['sqrt', 'cos', 'tan'].includes(operador) && entradaAnterior === '') {
            switch (operador) {
                case 'sqrt': resultado = Math.sqrt(actual); break;
                case 'cos': resultado = Math.cos(actual * Math.PI / 180); break;
                case 'tan': resultado = Math.tan(actual * Math.PI / 180); break;
            }
        } 
        else if (operador && entradaAnterior !== '' && entradaActual !== '') {
            switch (operador) {
                case '+': resultado = anterior + actual; break;
                case '-': resultado = anterior - actual; break;
                case '*': resultado = anterior * actual; break;
                case '/': resultado = anterior / actual; break;
                case '%': resultado = anterior % actual; break;
                case '^': resultado = Math.pow(anterior, actual); break;
            }
        }
        if (resultado !== undefined && !isNaN(resultado)) {
            entradaActual = resultado.toString();
            operador = null;
            entradaAnterior = '';
            actualizarPantalla();
        } else if (isNaN(resultado)) {
            pantalla.value = "Error";
            entradaActual = '';
            operador = null;
            entradaAnterior = '';
        }
    }
});

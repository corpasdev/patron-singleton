import { Singleton } from './singleton';

function funcionPrincipal() {
    //Prueba con comportamiento por demanda, a segura en totalidad el patrón singleton cuando existe multiples solicitudes a la vez 
    simularHilos();

    //Prueba con comportamiento secuencial
    const s1 = Singleton.getInstancia();
    const s2 = Singleton.getInstancia();

    if (s1 === s2) {
        console.log('Singleton funciona, las variables s1 y s2 contienen la misma instancia.');
    } else {
        console.log('Singleton fallido, las variables contienen diferentes instancias.');
    }
}

funcionPrincipal();

// Función que simula un retardo
function retardo(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function obtenerInstanciaEnHilo(): Promise<void> {
    const tiempoRetardo = Math.random() * 1000; // Retardo aleatorio entre 0 y 1000 ms
    await retardo(tiempoRetardo);
    const singleton = Singleton.getInstancia();
}

async function simularHilos() {
    const promesas = [];
    
    for (let i = 0; i < 10000; i++) {
        promesas.push(obtenerInstanciaEnHilo());
    }

    await Promise.all(promesas);
}
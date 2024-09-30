export class Singleton {
    private static instancia: Singleton | null = null;
    private static cantidadInstancias: number = 0;

    private constructor() {}

    public static getInstancia(): Singleton {
        if (Singleton.instancia === null) {

            Singleton.instancia = new Singleton();
            Singleton.cantidadInstancias++;
            console.log(`Número de instancias creadas: ${Singleton.cantidadInstancias}`);
            
        }

        return Singleton.instancia;
    }
}
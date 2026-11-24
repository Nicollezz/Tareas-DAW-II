import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center gap-3 py-16 px-16 bg-white dark:bg-black sm:items-start">
        
        <Link href="/contarProductos" className="btn btn-primary">
          1. Contar Productos en la Tabla
        </Link>

        <Link href="/sumaValor" className="btn btn-primary">
          2. Valor Total de Todos los Productos
        </Link>

        <Link href="/promedioValor" className="btn btn-primary">
          3. Valor Promedio de los Productos
        </Link>

        <Link href="/valorMaximo" className="btn btn-primary">
          4. Producto con el Valor Más Alto
        </Link>

        <Link href="/valorMinimo" className="btn btn-primary">
          5. Producto con el Valor Más Bajo
        </Link>

        <Link href="/contarPorMoneda" className="btn btn-primary">
          6. Cantidad de Productos por Tipo de Moneda
        </Link>

        <Link href="/promedioPorMoneda" className="btn btn-primary">
          7. Valor Promedio por Tipo de Moneda
        </Link>

        <Link href="/sumaPorTipo" className="btn btn-primary">
          8. Valor Total por Tipo de Producto
        </Link>

        <Link href="/maxMinPorTipo" className="btn btn-primary">
          9. Valor Máximo y Mínimo por Tipo de Producto
        </Link>

        <Link href="/promedioPorCategoria" className="btn btn-primary">
          10. Valor Promedio por Categoría
        </Link>

        <Link href="/contarPorEstado" className="btn btn-primary">
          11. Contar Productos por Estado
        </Link>

        <Link href="/sumaPorMarca" className="btn btn-primary">
          12. Valor Total por Marca
        </Link>

        <Link href="/contarPorCodigo" className="btn btn-primary">
          13. Cantidad por Código de Producto
        </Link>

        <Link href="/promedioCantidadPorLinea" className="btn btn-primary">
          14. Valor Promedio y Cantidad por Línea
        </Link>

        <Link href="/maximoPorPlanificador" className="btn btn-primary">
          15. Valor Más Alto por Planner
        </Link>

      </main>
    </div>
  );
}
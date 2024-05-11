


export const DepartamentosComponent = ({departamentos, selectDepartamento}:{departamentos:any, selectDepartamento: any}) => {
	
	return (
		<div className="mt-2 bg-sky-300 p-2 rounded-lg">
			<h2 className="font-bold text-2xl">Departamentos</h2>
			<div className="grid grid-cols-2 gap-2">
				{
					departamentos.map((departamento:any, index:number) => (
						<div key={index} className="departamento bg-white p-2 rounded-lg flex cursor-pointer" onClick={(e) => {selectDepartamento(departamento)}}>
							<div className="flex-1">
								<div className="departamento-nombre">{departamento.nombre}</div>
								<div className="departamento-ubicacion">{departamento.pronostico_extendido_list[0].clima[0].description}</div>
							</div>
							<div className="w-20 flex items-center justify-center font-bold text-xl">
								<div className="departamento-temperatura">{departamento.pronostico_extendido_list[0].main.temp}°C</div>
							</div>

						</div>
					))
				}
			</div>
		</div>
	);
};

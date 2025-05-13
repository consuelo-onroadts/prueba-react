import TextInput from "../TextInput"

function FormRegister() {

  return (
    <>
        <form>
            <h1 className='text-orange-600 text-xl font-semibold mb-5'>Registrar ciudad</h1>
            <div className="flex flex-col gap-2 mb-5">
                <TextInput
                    id="name"
                    label="Nombre"
                    value=""
                    onChange={(e) => console.log(e)}
                    placeholder="Ingrese el nombre de la ciudad"
                    required
                />
                    <TextInput
                    id="abbreviation"
                    label="Abreviación"
                    value=""
                    onChange={(e) => console.log(e)}
                    placeholder="Ingresa una abreviación Ejm: TBC"
                    required
                />
                 <TextInput
                    id="Latitud"
                    label="Latitud"
                    value=""
                    onChange={(e) => console.log(e)}
                    placeholder="Ingrese latitud Ejm: 24.0315904"
                />
                    <TextInput
                    id="Longitud"
                    label="Longitud"
                    value=""
                    onChange={(e) => console.log(e)}
                    placeholder="Ingrese longitud Ejm: 102.3012..."
                />
                 <TextInput
                    id="alias"
                    label="Alias"
                    value=""
                    onChange={(e) => console.log(e)}
                    placeholder="Ingrese un alias de la ciudad"
                    required
                />
                    <TextInput
                    id="address"
                    label="Dirección"
                    value=""
                    onChange={(e) => console.log(e)}
                    placeholder="Dirección"
                />
            </div>
            <div className="flex justify-end gap-4">
                <button className="flex-1 bg-white text-blue-600 border border-blue-600 rounded-md font-semibold py-2 px-4 shadow hover:opacity-90" type="button">LIMPIAR</button>
                <button className="flex-1 bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow hover:opacity-90" type="button">AÑADIR</button>
            </div>
        </form>
    </>
  )
}

export default FormRegister
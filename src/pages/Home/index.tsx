import { useState } from "react";
import Layout from '../../components/Layout';
import FormRegister from '../../components/FormRegister';
import Table from "../../components/Table";
import Modal from '../../components/Modal';
import type { Column } from "../../components/Table";
import type { City } from "../../types/city";
import { useSelector } from "react-redux"
import type { RootState } from "../../store/index"
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import { useDispatch } from "react-redux"
import { addCity, deleteCity, updateCity } from "../../store/citySlice"

function Home() {

    const dispatch = useDispatch();
    const cities = useSelector((state: RootState) => state.city.cities);

    const [isModalOpen, setModalOpen] = useState(false);
    const [cityToEdit, setCityToEdit] = useState<City>();

    const deleteRegisterCity = (cityId: number): void => {
        dispatch(deleteCity( cityId ));
    };
    const editRegisterCity = (city: City): void => {
        setCityToEdit(city);
        setModalOpen(true);
    };
    const addRegisterCity = (newCity: City) => {
        dispatch(addCity(newCity));
    };
    const columns: Column<City>[] = [
        { key: "name", header: "Nombre" },
        { key: "abrev", header: "Abreviación" },
        { key: "latitud", header: "Latitud" },
        { key: "longitud", header: "Longitud" },
        { key: "alias", header: "Alias" },
        { key: "address", header: "Dirección" },
        {
            key: "actions",
            header: "Acciones",
            render: (city) => (
                <div className='w-full flex justify-end gap-2'>
                    <PencilIcon className="h-4 w-4 text-gray-800 cursor-pointer hover:text-blue-900" onClick={() => editRegisterCity(city)} />
                    <TrashIcon className="h-4 w-4 text-gray-800 cursor-pointer hover:text-blue-900" onClick={() => deleteRegisterCity(city.id)}/>
                </div>
            ),
        },
    ];
    
  return (
    <>
        <Layout>
            <div className='flex flex-col lg:flex-row gap-5 p-5'>
                <div className='w-full lg:basis-2/6 bg-white p-5'>
                    <h1 className='text-orange-600 text-xl font-semibold mb-5'>Registrar ciudad</h1>
                    <FormRegister 
                        submitText="Añadir"
                        resetText="Limpiar"
                        onSubmitForm={addRegisterCity}
                    />
                </div>
                <div className='w-full lg:basis-4/6 p-5 bg-white overflow-x-auto'>
                    <h1 className='text-gray-800 text-xl font-semibold mb-5'>Listado de ciudades</h1>
                    <Table data={cities} columns={columns} rowKey={(u) => u.id} />
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                title="Editar Registro"
                showFooter={false}
            >
                <FormRegister 
                    submitText="Actualizar"
                    resetText="Cancelar"
                    initialCity={cityToEdit}
                    onSubmitForm={(cityData) => {
                      dispatch(updateCity(cityData));
                      setModalOpen(false);
                    }}
                    onClose={() => setModalOpen(false)}
                />
            </Modal>
        </Layout>

    </>
  )
}

export default Home
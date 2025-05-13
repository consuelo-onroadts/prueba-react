import Layout from '../../components/Layout';
import FormRegister from '../../components/FormRegister';


function Home() {

  return (
    <>
        <Layout>
            <div className='flex gap-5 p-5'>
                <div className='flex-2/5 bg-white p-5'>
                    <FormRegister />
                </div>
                <div className='flex-3/5 h-20 p-5 bg-white'>
                    <h1 className='text-gray-800 text-xl font-semibold mb-5'>Listado de ciudades</h1>
                </div>
            </div>

  
   


        </Layout>

    </>
  )
}

export default Home
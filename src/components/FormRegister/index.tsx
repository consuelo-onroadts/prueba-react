import { useFormik } from 'formik';
import { useEffect } from 'react';
import * as Yup from 'yup';
import TextInput from '../TextInput';

import type { City } from '../../types/city';

interface FormRegisterProps {
  submitText?: string;
  resetText?: string;
  initialCity?: Partial<City>;
  onSubmitForm: (city: City) => void;
  onClose?: () => void;
}

const validationSchema = Yup.object({
  name: Yup.string().required('El nombre es obligatorio'),
  abrev: Yup.string()
  .min(3, 'Debe tener al menos 3 caracteres')
  .required('La abreviación es obligatoria'),
  latitud: Yup.number()
    .typeError('Debe ser un número'),
  longitud: Yup.number()
    .typeError('Debe ser un número'),
  alias: Yup.string().required('El alias es obligatorio'),
  address: Yup.string(),
});

const FormRegister = ({
  submitText,
  resetText,
  initialCity,
  onSubmitForm,
  onClose
}: FormRegisterProps) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      abrev: '',
      latitud: '',
      longitud: '',
      alias: '',
      address: '',
    },
    validationSchema,
    onSubmit: (values) => {
      const cityData: City = {
        ...values,
        id: initialCity?.id ?? Date.now(),
      };
      onSubmitForm(cityData);
      formik.resetForm();
    },
  });

  useEffect(() => {
    if (initialCity) {
      formik.setValues({
        name: initialCity.name || '',
        abrev: initialCity.abrev || '',
        latitud: initialCity.latitud || '',
        longitud: initialCity.longitud || '',
        alias: initialCity.alias || '',
        address: initialCity.address || '',
      });
    }
  }, [initialCity]);

  return (
    <form onSubmit={formik.handleSubmit}>

      <div className='flex flex-col gap-2 mb-5'>
        <TextInput
          id='name'
          label='Nombre'
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && formik.errors.name}
          placeholder='Ingrese el nombre de la ciudad'
          required
        />

        <TextInput
          id='abrev'
          label='Abreviación'
          value={formik.values.abrev}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.abrev && formik.errors.abrev}
          placeholder='Ingresa una abreviación Ejm: TBC'
          required
        />

        <TextInput
          id='latitud'
          label='Latitud'
          value={formik.values.latitud}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.latitud && formik.errors.latitud}
          placeholder='Ingrese latitud Ejm: 24.0315904'
        />

        <TextInput
          id='longitud'
          label='Longitud'
          value={formik.values.longitud}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.longitud && formik.errors.longitud}
          placeholder='Ingrese longitud Ejm: 102.3012...'
        />

        <TextInput
          id='alias'
          label='Alias'
          value={formik.values.alias}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.alias && formik.errors.alias}
          placeholder='Ingrese un alias de la ciudad'
          required
        />

        <TextInput
          id='address'
          label='Dirección'
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.address && formik.errors.address}
          placeholder='Dirección'
        />
      </div>

      <div className='flex justify-end gap-4'>
        <button
          type='reset'
          onClick={(e) => {
            formik.handleReset(e);
            if (onClose) onClose();
          }}
          className='flex-1 bg-white text-blue-900 border border-blue-900 rounded-md font-semibold py-2 px-4 shadow hover:opacity-90'
        >
          {resetText}
        </button>
        <button
          type='submit'
          className='flex-1 bg-blue-900 text-white font-semibold py-2 px-4 rounded-md shadow hover:opacity-90'
        >
          {submitText}
        </button>
      </div>
    </form>
  );
};

export default FormRegister;
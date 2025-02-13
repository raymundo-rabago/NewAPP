import React, { useState } from 'react';
import {
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase';

import { toast } from 'sonner';

const AddVenta = () => {
  const [formData, setFormData] = useState({
    modelo: '',
    descripcion: '',
    precio: '',
  });
  const [imagen, setImagen] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImagen(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = '';
      if (imagen) {
        const storageRef = ref(storage, `lentes/${Date.now()}_${imagen.name}`);
        const uploadResult = await uploadBytes(storageRef, imagen);
        imageUrl = await getDownloadURL(uploadResult.ref);
      }

      await addDoc(collection(db, 'Lentes'), {
        ...formData,
        imagen: imageUrl,
        fechaCreacion: new Date()
      });

      // Limpiar formulario
      setFormData({
        modelo: '',
        descripcion: '',
        precio: '',
      });
      setImagen(null);
      toast('Registro guardado exitosamente');
    } catch (error) {
      console.error('Error al guardar:', error);
      toast('Error al guardar el registro');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
      <div className="mb-1 flex flex-col gap-6">
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Modelo
        </Typography>
        <Input
          id="modelo"
          value={formData.modelo}
          onChange={handleChange}
          size="sm"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />

        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Descripción
        </Typography>
        <Textarea
          id="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          size="sm"
        />

        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Precio
        </Typography>
        <Input
          id="precio"
          type="number"
          value={formData.precio}
          onChange={handleChange}
          size="sm"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900"
        />

        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Imagen
        </Typography>
        <Input
          type="file"
          onChange={handleImageChange}
          accept="image/*"
          size="sm"
        />

        <Button type="submit" disabled={loading}>
          {loading ? "Guardando..." : "Guardar"}
        </Button>
      </div>
    </form>
  );
};

export default AddVenta;
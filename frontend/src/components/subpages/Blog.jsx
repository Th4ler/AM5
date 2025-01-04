import React, { useState, useEffect } from 'react';
import axiosInstance from '../endpoint/axios'; // Asegúrate de usar axiosInstance siempre

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const [error, setError] = useState('');

  // Cargar blogs usando axiosInstance
  useEffect(() => {
    axiosInstance.get('/blogs')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(() => {
        setError('Error al cargar los blogs. Intenta nuevamente.');
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!titulo.trim() || !contenido.trim()) {
      setError('El título y el contenido son obligatorios.');
      return;
    }

    axiosInstance.post('/blogs', { titulo, contenido })
      .then(response => {
        console.log('Respuesta del servidor:', response.data);
        setBlogs(prevBlogs => [...prevBlogs, response.data]);
        setTitulo('');
        setContenido('');
        setError('');
      })
      .catch(error => {
        console.error('Error al crear el blog:', error.message);
        if (error.response) {
          console.error('Error de respuesta:', error.response.status, error.response.data);
          setError(`Error ${error.response.status}: ${error.response.data.error || 'No especificado'}`);
        } else if (error.request) {
          console.error('No hubo respuesta del servidor:', error.request);
          setError('No se pudo conectar con el servidor. Revisa tu conexión.');
        } else {
          console.error('Error desconocido:', error.message);
          setError('Ocurrió un error inesperado.');
        }
      });
  };

  return (
    <section id="blog" className="blog-section">
      <h1>Blogs</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {Array.isArray(blogs) && blogs.length > 0 ? (
        <ul>
          {blogs.map(blog => (
            <li key={blog.id}>
              <h2>{blog.titulo}</h2>
              <p>{blog.contenido}</p>
              <p>Visualizaciones: {blog.visualizaciones}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay blogs disponibles o la respuesta es inválida.</p>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={titulo}
          onChange={(event) => setTitulo(event.target.value)}
          placeholder="Título"
        />
        <textarea
          value={contenido}
          onChange={(event) => setContenido(event.target.value)}
          placeholder="Contenido"
        />
        <button type="submit">Crear blog</button>
      </form>
    </section>
  );
};

export default Blog;
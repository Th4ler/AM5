import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('/api/blogs')
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

    axios.post('/api/blogs', { titulo, contenido })
      .then(response => {
        setBlogs(prevBlogs => [...prevBlogs, response.data]); // Añadir nuevo blog
        setTitulo('');
        setContenido('');
        setError('');
      })
      .catch(() => {
        setError('Error al crear el blog. Intenta nuevamente.');
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
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');

  useEffect(() => {
    axios.get('/api/blogs')
      .then(response => {
        if (Array.isArray(response.data)) {
          setBlogs(response.data);
        } else {
          console.error('La API no devolvió un arreglo de datos');
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/blogs', { titulo, contenido })
      .then(response => {
        if (Array.isArray(response.data)) {
          setBlogs([...blogs, response.data]);
        } else {
          console.error('La API no devolvió un arreglo de datos');
        }
        setTitulo('');
        setContenido('');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <section id="blog" className="blog-section">
      <h1>Blogs</h1>
      {Array.isArray(blogs) && blogs.length > 0 ? (
        <ul>
          {blogs.map(blog => (
            <li key={blog.id}>
              <h2>{blog.titulo}</h2>
              <p>{blog.contenido}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay blogs disponibles</p>
      )}
      <form onSubmit={handleSubmit}>
        <input type="text" value={titulo} onChange={(event) => setTitulo(event.target.value)} placeholder="Título" />
        <textarea value={contenido} onChange={(event) => setContenido(event.target.value)} placeholder="Contenido" />
        <button type="submit">Crear blog</button>
      </form>
    </section>
  );
};

export default Blog;
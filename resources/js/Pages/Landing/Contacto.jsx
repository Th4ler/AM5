const ContactForm = () => {
  return (
    <section id="contact" className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="am5-border text-center text-2xl font-bold mb-6">Contacto</h2>

        <div className="bg-white shadow-md rounded-lg p-6">
          <form>
            <h3 className="text-xl font-semibold mb-4">¡Hablemos!</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Nombre y Apellido */}
              <div>
                <label className="block text-sm font-medium mb-1">Nombre:</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Andrés"
                    className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
                  />
                  <span className="absolute right-3 top-2.5 text-gray-500">
                    <i className="bi bi-person-circle"></i>
                  </span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Apellido:</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Madariaga"
                    className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
                  />
                  <span className="absolute right-3 top-2.5 text-gray-500">
                    <i className="bi bi-person-circle"></i>
                  </span>
                </div>
              </div>

              {/* Correo y Teléfono */}
              <div>
                <label className="block text-sm font-medium mb-1">Correo Electrónico:</label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="ejemplo1@am5.com"
                    className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
                  />
                  <span className="absolute right-3 top-2.5 text-gray-500">
                    <i className="bi bi-envelope"></i>
                  </span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Teléfono:</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="+56608747213"
                    className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
                  />
                  <span className="absolute right-3 top-2.5 text-gray-500">
                    <i className="bi bi-telephone"></i>
                  </span>
                </div>
              </div>

              {/* Mensaje */}
              <div className="col-span-2">
                <label className="block text-sm font-medium mb-1">Cuéntanos tu caso:</label>
                <textarea
                  rows="6"
                  placeholder="Escribe tu mensaje..."
                  className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
                ></textarea>
              </div>
            </div>

            {/* Botón Submit */}
            <div className="text-center mt-4">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
import { Link } from '@inertiajs/react';
import bossPic from '../../../../public/images/mediaAndres.webp';
import roomPic from '../../../../public/images/contenidosRoom.webp';
import cameraPic from '../../../../public/images/cameraPic.webp';
import microPic from '../../../../public/images/microphonePic.webp';
import smartphonePic from '../../../../public/images/smartphonePic.webp';

const Media = () => {
  return (
    <section id="media" className="py-8">
      <div className="text-center py-4">
        <h2 className="am5-border p-3 text-3xl font-bold">Media</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Columna 1 */}
        <div className="flex flex-col items-center">
          <div className="mb-3">
            <img
              src={bossPic}
              alt="Imagen de Andrés Madariaga"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="relative">
            {/* <Link href={route("blog")} className="absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 bg-yellow-500 text-white py-2 px-4 rounded-full rotate-90">
              Blog
            </Link> */}
            <img
              src={cameraPic}
              alt="Imagen decorativa 2"
              className="zoom-img w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Columna 2 */}
        <div className="flex flex-col items-center">
          <Link href="/contenidos" className="mb-3 bg-blue-500 text-white py-2 px-6 rounded-full">
            Contenidos
          </Link>
          <img
            src={roomPic}
            alt="Imagen de la sala de un estudio de grabación de podcast"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Columna 3 */}
        <div className="flex flex-col items-center">
          <div className="relative mb-3">
            <Link href="/podcast" className="absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 bg-yellow-500 text-white py-2 px-4 rounded-full rotate-90">
              Podcast
            </Link>
            <img
              src={microPic}
              alt="Micrófono"
              className="zoom-img w-full h-auto rounded-lg"
            />
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col">
              <ul>
                <li>LinkedIn</li>
                <li>Instagram</li>
                <li>Facebook</li>
              </ul>
              <ul>
                <li>Twitter</li>
                <li>YouTube</li>
                <li>TikTok</li>
              </ul>
            </div>
            <img
              src={smartphonePic}
              alt="Fotografía de un Smartphone"
              className="w-24 h-auto rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="w-3/4 mx-auto mt-4 border-t-2 border-gray-300"></div>
    </section>
  );
};

export default Media;
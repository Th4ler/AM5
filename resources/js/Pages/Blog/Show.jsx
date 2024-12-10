import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
export default function Show({ auth, success, blog, queryParams }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {`Blog "${blog.title}"`}
          </h2>
          <Link
            href={route("blog.edit", blog.id)}
            className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
          >
            Editar
          </Link>
        </div>
      }
    >
      <Head title={`Blog "${blog.title}"`} />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div>
              <img
                src={blog.image_path}
                alt=""
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <div className="grid gap-1 grid-cols-2 mt-2">
                <div>
                  <div>
                    <label className="font-bold text-lg">Blog ID</label>
                    <p className="mt-1">{blog.id}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Título del Blog</label>
                    <p className="mt-1">{blog.title}</p>
                  </div>

                  <div className="mt-4">
                    <label className="font-bold text-lg">Creado por</label>
                    <p className="mt-1">{blog.createdBy.name}</p>
                  </div>
                </div>
                <div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Fecha de creación</label>
                    <p className="mt-1">{blog.created_at}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Actualizado por</label>
                    <p className="mt-1">{blog.updatedBy.name}</p>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <label className="font-bold text-lg">Contenido del Blog</label>
                <p className="mt-1">{blog.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </AuthenticatedLayout>
  );
}

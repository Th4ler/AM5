import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  PROJECT_STATUS_CLASS_MAP,
  PROJECT_STATUS_TEXT_MAP,
} from "@/constants.jsx";
import { Head, Link, router } from "@inertiajs/react";
import TableHeading from "@/Components/TableHeading";

export default function Index({ auth, projects, queryParams = null, success }) {
  queryParams = queryParams || {};
  const searchFieldChanged = (name, value) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }

    router.get(route("project.index"), queryParams);
  };

  const onKeyPress = (name, e) => {
    if (e.key !== "Enter") return;
    searchFieldChanged(name, e.target.value);
  };

  const sortChanged = (name) => {
    if (name === queryParams.sort_field) {
      if (queryParams.sort_direction === "asc") {
        queryParams.sort_direction = "desc";
      } else {
        queryParams.sort_direction = "asc";
      }
    } else {
      queryParams.sort_field = name;
      queryParams.sort_direction = "asc";
    }
    router.get(route("project.index"), queryParams);
  };

  const deleteProject = (project) => {
    if (!window.confirm("Al borrar este proyecto procederás también a borrar las tareas asociadas a este. Seguro que quieres continuar?")) {
      return;
    }
    router.delete(route("project.destroy", project.id));
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <h2 className="font-semibold text-xl text-gray-900 dark:text-gray-100 leading-tight">
            Proyectos
          </h2>
          <Link
            href={route("project.create")}
            className="w-full sm:w-auto text-center bg-emerald-500 py-2 px-4 text-white rounded shadow transition-all hover:bg-emerald-600"
          >
            Agregar nuevo
          </Link>
        </div>
      }
    >
      <Head title="Proyectos" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {success && (
            <div className="relative bg-emerald-500 py-2 px-4 text-white rounded mb-4">
              <span>{success}</span>
              <button
                className="absolute top-2 right-2 bg-emerald-600 text-white rounded-full p-1 hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-emerald-400"
                onClick={() => router.visit(route("project.index"), { replace: true })}
              >
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          )}
          
          <div className="bg-lightBackground dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-4 sm:p-6 text-gray-900 dark:text-gray-100">
              {/* Filtros */}
              <div className="mb-4">
                <TextInput
                  className="w-full"
                  defaultValue={queryParams.name}
                  placeholder="Buscar por nombre del proyecto"
                  onBlur={(e) => searchFieldChanged("name", e.target.value)}
                  onKeyPress={(e) => onKeyPress("name", e)}
                />
              </div>

              {/* Vista móvil - Tarjetas */}
              <div className="block sm:hidden space-y-4">
                {projects.data.map((project) => (
                  <div 
                    key={project.id}
                    className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow"
                  >
                    <div className="flex items-center space-x-4 mb-3">
                      <img 
                        src={project.image_path} 
                        alt={project.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <Link 
                          href={route("project.show", project.id)}
                          className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:underline"
                        >
                          {project.name}
                        </Link>
                        <p className="text-sm text-gray-600 dark:text-gray-300">ID: {project.id}</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="font-medium">Creado:</span> {project.created_at}
                      </p>
                      <p>
                        <span className="font-medium">Por:</span> {project.createdBy.name}
                      </p>
                    </div>
                    <div className="mt-4 flex justify-end space-x-3">
                      <Link
                        href={route("project.edit", project.id)}
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Editar
                      </Link>
                      <button
                        onClick={() => deleteProject(project)}
                        className="text-red-600 dark:text-red-400 hover:underline"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Vista desktop - Tabla */}
              <div className="hidden sm:block overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-gray-100">
                  <thead className="text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-100 border-b-2 border-gray-500">
                    <tr>
                      <TableHeading
                        name="id"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanged={sortChanged}
                      >
                        ID
                      </TableHeading>
                      <th className="px-3 py-3">Imagen</th>
                      <TableHeading
                        name="name"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanged={sortChanged}
                      >
                        Título
                      </TableHeading>
                      <TableHeading
                        name="created_at"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanged={sortChanged}
                      >
                        Fecha de creación
                      </TableHeading>
                      <th className="px-3 py-3">Creado por</th>
                      <th className="px-3 py-3 text-right">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.data.map((project) => (
                      <tr
                        className="bg-lightBackground border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                        key={project.id}
                      >
                        <td className="px-3 py-2">{project.id}</td>
                        <td className="px-3 py-2">
                          <img 
                            src={project.image_path} 
                            alt={project.name}
                            className="w-16 h-16 object-cover rounded" 
                          />
                        </td>
                        <th className="px-3 py-2 text-gray-900 dark:text-gray-100">
                          <Link 
                            href={route("project.show", project.id)}
                            className="hover:underline"
                          >
                            {project.name}
                          </Link>
                        </th>
                        <td className="px-3 py-2">
                          {project.created_at}
                        </td>
                        <td className="px-3 py-2">{project.createdBy.name}</td>
                        <td className="px-3 py-2 text-right">
                          <Link
                            href={route("project.edit", project.id)}
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                          >
                            Editar
                          </Link>
                          <button
                            onClick={() => deleteProject(project)}
                            className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                          >
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4">
                <Pagination links={projects.meta.links} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
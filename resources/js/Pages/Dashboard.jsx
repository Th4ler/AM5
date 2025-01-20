import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/constants";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({
  auth,
  totalPendingTasks,
  myPendingTasks,
  totalProgressTasks,
  myProgressTasks,
  totalCompletedTasks,
  myCompletedTasks,
  activeTasks,
}) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />

      <div className="py-6 sm:py-12">
        {/* Cards Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Pending Tasks Card */}
            <div className="bg-lightBackground dark:bg-gray-800 overflow-hidden shadow-sm rounded-lg">
              <div className="p-4 sm:p-6 text-gray-900 dark:text-gray-100">
                <h3 className="text-amber-500 text-xl sm:text-2xl font-semibold">
                  Tareas pendientes
                </h3>
                <p className="text-lg sm:text-xl mt-4">
                  <span className="mr-2">{myPendingTasks}</span>/
                  <span className="ml-2">{totalPendingTasks}</span>
                </p>
              </div>
            </div>

            {/* In Progress Tasks Card */}
            <div className="bg-lightBackground dark:bg-gray-800 overflow-hidden shadow-sm rounded-lg">
              <div className="p-4 sm:p-6 text-gray-900 dark:text-gray-100">
                <h3 className="text-blue-500 text-xl sm:text-2xl font-semibold">
                  Tareas en progreso
                </h3>
                <p className="text-lg sm:text-xl mt-4">
                  <span className="mr-2">{myProgressTasks}</span>/
                  <span className="ml-2">{totalProgressTasks}</span>
                </p>
              </div>
            </div>

            {/* Published Blogs Card */}
            <div className="bg-lightBackground dark:bg-gray-800 overflow-hidden shadow-sm rounded-lg">
              <div className="p-4 sm:p-6 text-gray-900 dark:text-gray-100">
                <h3 className="text-green-500 text-xl sm:text-2xl font-semibold">
                  Blogs publicados
                </h3>
                <p className="text-lg sm:text-xl mt-4">
                  <span className="ml-2">{totalCompletedTasks}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
          <div className="bg-lightBackground dark:bg-gray-800 overflow-hidden shadow-sm rounded-lg">
            <div className="p-4 sm:p-6 text-gray-900 dark:text-gray-100">
              <h3 className="text-gray-900 dark:text-gray-200 text-lg sm:text-xl font-semibold mb-4">
                Mis publicaciones activas
              </h3>

              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                    <tr>
                      <th className="px-2 sm:px-3 py-2 sm:py-3">ID</th>
                      <th className="px-2 sm:px-3 py-2 sm:py-3">Proyecto asociado</th>
                      <th className="px-2 sm:px-3 py-2 sm:py-3">Título</th>
                      <th className="px-2 sm:px-3 py-2 sm:py-3">Estado</th>
                      <th className="px-2 sm:px-3 py-2 sm:py-3">Fecha de vencimiento</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeTasks.data.map((task) => (
                      <tr key={task.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                        <td className="px-2 sm:px-3 py-2 whitespace-nowrap">{task.id}</td>
                        <td className="px-2 sm:px-3 py-2 text-gray-900 dark:text-gray-200">
                          <Link
                            href={route("project.show", task.project.id)}
                            className="hover:underline line-clamp-1"
                          >
                            {task.project.name}
                          </Link>
                        </td>
                        <td className="px-2 sm:px-3 py-2 text-gray-900 dark:text-gray-200">
                          <Link
                            href={route("task.show", task.id)}
                            className="hover:underline line-clamp-1"
                          >
                            {task.name}
                          </Link>
                        </td>
                        <td className="px-2 sm:px-3 py-2">
                          <span
                            className={
                              "px-2 py-1 rounded text-nowrap text-white text-xs sm:text-sm " +
                              TASK_STATUS_CLASS_MAP[task.status]
                            }
                          >
                            {TASK_STATUS_TEXT_MAP[task.status]}
                          </span>
                        </td>
                        <td className="px-2 sm:px-3 py-2 whitespace-nowrap text-gray-900 dark:text-gray-200">
                          {task.due_date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

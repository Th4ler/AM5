import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { BLOG_STATUS_CLASS_MAP, BLOG_STATUS_TEXT_MAP } from "@/constants.jsx";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth, blog }) {
  const { data, setData, post, errors, reset } = useForm({
    image: "",
    title: blog.title || "",
    content: blog.content || "",
    status: blog.status || "",
    _method: "PUT",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    post(route("blog.update", blog.id));
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Editar blog "{blog.title}"
          </h2>
        </div>
      }
    >
      <Head title="Blogs" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-lightBackground dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <form
              onSubmit={onSubmit}
              className="p-4 sm:p-8 bg-lightBackground dark:bg-gray-800 shadow sm:rounded-lg"
            >
              {blog.image_path && (
                <div className="mb-4">
                  <img src={blog.image_path} className="w-64" />
                </div>
              )}
              <div>
                <InputLabel
                  htmlFor="blog_image_path"
                  value="Imagen del blog"
                />
                <TextInput
                  id="blog_image_path"
                  type="file"
                  name="image"
                  className="mt-1 block w-full"
                  onChange={(e) => setData("image", e.target.files[0])}
                />
                <InputError message={errors.image} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="blog_title" value="Título del Blog" />

                <TextInput
                  id="blog_title"
                  type="text"
                  name="title"
                  value={data.title}
                  className="mt-1 block w-full"
                  isFocused={true}
                  onChange={(e) => setData("title", e.target.value)}
                />

                <InputError message={errors.title} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel
                  htmlFor="blog_content"
                  value="Contenido del Blog"
                />

                <TextAreaInput
                  id="blog_content"
                  name="content"
                  value={data.content}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("content", e.target.value)}
                />

                <InputError message={errors.content} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="blog_status" value="Estado del blog" />
                <span
                  className={
                    "px-2 py-1 rounded text-white " +
                    BLOG_STATUS_CLASS_MAP[blog.status]
                  }
                >
                  {BLOG_STATUS_TEXT_MAP[blog.status]}
                </span>
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="blog_status" value="Acción" />
                <SelectInput
                  id="blog_status"
                  name="status"
                  className="mt-1 block w-full"
                  onChange={(e) => setData("status", e.target.value)}
                >
                  <option value="">Selecciona una acción</option>
                  <option value="draft">Borrador</option>
                  <option value="published">Publicar</option>
                </SelectInput>
                <InputError message={errors.status} className="mt-2" />
              </div>
              <div className="mt-4 text-right">
                <Link
                  href={route("blog.index")}
                  className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2"
                >
                  Cancelar
                </Link>
                <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                  Actualizar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

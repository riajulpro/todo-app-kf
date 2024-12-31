import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="h-screen flex">
      <aside className="w-64 h-full bg-gray-200 p-5">
        <h3 className="text-xl font-bold border-b mb-5">TODO APP</h3>
        <div className="flex flex-col gap-2">
          <Link to="/">All</Link>
          <Link to="/completed">Completed</Link>
          <Link to="/incompleted">Incompleted</Link>
          <Link to="/add-todo">Add todo</Link>
        </div>
      </aside>
      <section className="p-5">
        <Outlet />
      </section>
    </div>
  );
};

export default MainLayout;

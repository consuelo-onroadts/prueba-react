import { PropsWithChildren } from "react";
import NavBar from "../NavBar";

const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main className="bg-gray-100 min-h-[100vh]">
        <div className='w-[95%] md:w-[90%] lg:w-[80%] max-w-screen-xl m-auto h-full'>
          {/* Aquí va el contenido dinámico (children) */}
          {children}
        </div>
      </main>
      <footer>
      </footer>
    </div>
    

  );
}

export default Layout;
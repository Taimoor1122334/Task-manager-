import Sidebar from './Sidebar';

export default function Layout({ children }) {
  return (
    <>
      {/* Static Sidebar */}
      <div className="fixed left-0 top-0 h-screen w-64 z-20">
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="lg:ml-64 flex flex-col min-h-screen bg-[#FAFAF9]">
        {children}
      </div>
    </>
  );
}
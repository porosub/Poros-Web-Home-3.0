import Sidebar from "@/components/cms/sidebar";

interface ICmsLayoutProps {
  children: React.ReactNode;
}

const CmsLayout: React.FC<ICmsLayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div
        className="flex-1 bg-cover bg-center h-screen overflow-y-auto"
        style={{ backgroundImage: "url('/svg/fragments/bg-admin-page.svg')" }}
      >
        {children}
      </div>
    </div>
  );
};

export default CmsLayout;

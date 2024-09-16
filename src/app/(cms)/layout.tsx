interface ICmsLayoutProps {
  children: React.ReactNode;
}

const CmsLayout: React.FC<ICmsLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default CmsLayout;

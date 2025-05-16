const Container = ({ children }) => {
  return (
    <main className="container mx-auto px-4 py-6 text-gray-800 dark:text-gray-100 transition duration-300">
      {children}
    </main>
  );
};

export default Container;

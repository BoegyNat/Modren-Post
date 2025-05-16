import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/layout/Header";
import Container from "./components/layout/Container";
import PostList from "./pages/PostList";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors">
        <Header />
        <Container>
          <h2 className="text-2xl font-semibold mb-4">Post Management</h2>
          <PostList />
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

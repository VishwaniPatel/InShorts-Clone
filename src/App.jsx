import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Routing from "./routes/Routing";
import { NewsProvider } from "./store/ContextProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NewsProvider>
        <Routing />
      </NewsProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;

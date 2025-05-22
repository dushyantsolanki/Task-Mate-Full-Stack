import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { routes } from '@/routes/route.tsx';
import { io, Socket } from "socket.io-client";
import { useCookie } from '@reactuses/core'


// import ProtectedRoute from './routes/ProtectedRoute';

const App: React.FC = () => {

  const [cookie] = useCookie('accessToken')
  // console.log(cookie)
  // const socket: Socket = io('http://localhost:3000', {
  //   auth: {
  //     token: `Bearer ${cookie}`,
  //   },
  //   transports: ["websocket"],
  //   reconnection: true,
  //   withCredentials: true,
  // });

  // socket.on("connected", () => {
  //   console.log("Connected to server");
  // });

  return (
    <BrowserRouter>
      <Suspense fallback={<div className="flex items-center justify-center h-screen w-screen bg-background">
        <Loader2 className="h-20 w-20 animate-spin text-primary" />
      </div>}>
        <Routes>
          {routes.map(({ layout: Layout, guard: Guard, children }, i) => (
            <Route
              key={i + Math.floor(Math.random() * 1000)}
              element={Guard ? <Guard><Layout /></Guard> : <Layout />}
            >
              {children.map(({ path, element, allowedRoles }, j) => {
                const wrappedElement = allowedRoles && allowedRoles.length > 0 ? (
                  // <ProtectedRoute allowedRoles={allowedRoles}>
                  { element }
                  // </ProtectedRoute>
                ) : (
                  element
                );

                return <Route key={j + 1000 + Math.floor(Math.random() * 1000)} path={path} element={wrappedElement as React.ReactNode} />;
              })}
            </Route>
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Component/Home.jsx'
import Header from './layout/Header.jsx'
import Footer from './layout/Footer.jsx'
import InformationArtist from './Component/InformationArtist.jsx'
import InforMationMusic from './Component/InformationMusic.jsx'
import Aos from './Component/Aos.jsx'
import ErrorPage from './Component/ErrorPage.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-ca-central-1.hygraph.com/v2/cldbjwjcm000m01ugdnu61f3s/master",
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/artists/:artistName",
    element: <InformationArtist />,
    errorElement: <ErrorPage />
  },
  {
    path: "/musics/:musicName",
    element: <InforMationMusic />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Aos />
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </ApolloProvider>
  </React.StrictMode>
)

import "./globals.css";
import Header from "../../components/header";

const Layout = async ({ children, params }) => {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  return (
    <html lang={locale}>
      <head>
        <title>Matteo Colucci Portfolio</title>
        <meta
          name="description"
          content="Welcome to Matteo Colucci's portfolio. Explore my projects and skills."
        />
        <meta
          name="keywords"
          content="Matteo Colucci, portfolio, web developer, projects, skills"
        />
        <meta name="author" content="Matteo Colucci" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/profile.png" />
      </head>
      <body>
        <Header locale={locale} />
        <main className="pt-16 bg-gray-100">{children}</main>
        <footer className="bg-gray-200 text-center py-4">
          © 2024 Matteo Colucci. All rights reserved.
        </footer>
      </body>
    </html>
  );
};

export default Layout;
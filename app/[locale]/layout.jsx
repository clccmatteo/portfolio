import "./globals.css";
import Header from "../../components/header";

export const metadata = {
  keywords: "Matteo Colucci, portfolio, web developer, projects, skills",
  author: "Matteo Colucci",
  viewport: "width=device-width, initial-scale=1.0",
  icon: "/profile.png",
};

const Layout = async ({ children, params }) => {
  const resolvedParams = await params;
  const { locale } = resolvedParams;

  return (
    <html lang={locale}>
      {/* Google Analytics Script */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `,
        }}
      />
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

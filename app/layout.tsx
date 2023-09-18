
import { SessionProvider } from '@/components/SessionProvider';
import './globals.css';
import { getServerSession } from "next-auth";
import SideBar from '@/components/SideBar';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Login from '@/components/Login';
import ClientProvider from '@/components/ClientProvider';

export default async function RootLayout({
    children,
}: {
  children: React.ReactNode;
}) {

const session = await getServerSession(authOptions);

  console.log(session);
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CHATGPT CLONE</title>
        <link rel="ico" href="/icon.ico" />
      </head>


      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ): (
            <div className="flex h-screen">
              <div className="bg-slate-950 max-w-xs h-full overflow-y-auto md:min-w-[16rem]">
                {/* Sidebar */}
                <SideBar />
              </div>

              {/* ClientProvider - Notiifications */}
              <ClientProvider />
               
              <div className="bg-[#343541] flex-1">{children}</div>
            </div>
            )}
        </SessionProvider>
      </body>
    </html>
  );
};



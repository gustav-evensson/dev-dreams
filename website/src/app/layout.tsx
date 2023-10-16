import "./globals.scss";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { Providers } from "./GlobalRedux/provider";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    title: "Welcome to DevDreams",
    description: "Everything a developer can dream of",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}

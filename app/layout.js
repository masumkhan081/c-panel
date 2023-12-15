import RootLayout from "@/components/layout-custom/RootLayout";
import "./globals.css";
import Provider from "@/redux/ReduxProvider";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function layout({ children }) {
  return (
    <html lang="en">
      <body className={"bg_sl_1"}>
        <Provider>
          <RootLayout content={children} />
        </Provider>
      </body>
    </html>
  );
}

"use client"

import SessionWrapper from "@/components/SessionWrapper";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { nunito } from "@/components/fonts";
import { ItemContext } from "@/context/ItemContext";
import { ChangeEvent, useEffect, useState } from "react";
import { getUserCart } from "@/lib/actions/actions";

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const [searchItem, setSearchItem] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [qty, setQty] = useState([]);



  // let fetctQty = async () => {
  //   let qtyArray =  await getUserCart();
  
  //     console.log(qtyArray);
  //     setQty(qtyArray);

 
  // }
  // useEffect(() => {

  //     fetctQty()
  // },[] )

  // fetctQty()

  const handleSearchItem = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);

    setSearchItem(event.target.value);
  };


  return (
    <html lang="en">

      <body className={`${nunito.className} antialiased`}>
        <ItemContext.Provider value={{ searchItem, setSearchItem, handleSearchItem }}>
          <SessionWrapper>

            <Header />
            {children}
          </SessionWrapper>
        </ItemContext.Provider>
      </body>
    </html>
  );
}

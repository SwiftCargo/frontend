import { RiMenu3Line, RiCloseLargeLine } from "@remixicon/react";
import Account from "./Account";
import Head from "./Head";
import NavButtons from "./NavButtons";
import { useState } from "react";
export default function Header() {
  const [menu, setMenu] = useState(false);

  const showMenu = () => setMenu(!menu);
  return (
    <div>
      <aside className="h-full hidden md:flex flex-col gap-6 bg-surface-800 rounded-xl px-3.5 justify-between py-5">
        <div className="flex flex-col gap-2 justify-between w-[185px]">
          <Head />
          <div className="border-b border-primary-600" />
          <NavButtons userID={`1`} />
        </div>
        <Account />
      </aside>
      <header className="flex md:hidden justify-end">
        <div className="flex hover:bg-surface-800 py-4 px-4 rounded-full" onClick={showMenu}>
          <RiMenu3Line size={20} className="" />
        </div>
        {
          menu && <div className="flex flex-col justify-start absolute w-full h-screen p-4 bg-surface-800 items-center text-center">
            <div className="flex flex-col gap-2 justify-between w-full items-center">
              <div className="flex w-full justify-between">
                <Account />
                <div className="cursor-pointer bg-surface-900 p-4 rounded-full" onClick={showMenu}>
                  <RiCloseLargeLine size={20} color="gray" />
                </div>
              </div>
              <div className="border-b border-primary-600" />
              <NavButtons userID={`1`} />
            </div>
          </div>
        }
      </header>
    </div>

  );
}
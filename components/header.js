import Dropdown from "./dropdown";
import Search from "./search";
export default function Header() {
  return (
    <>
    <div className="w-screen border-b flex flex-row py-2 shadow border-gray-600 border-opacity-20 bg-green-600">
        <a className="font-serif text-yellow-100 text-4xl">ReptiKeep</a>

        <div className="z-40 w-1/3">
      <Dropdown />
      </div>
      <div className="z-40 w-1/3">
      <Search />
      </div>
    </div>
    </>
  )
}

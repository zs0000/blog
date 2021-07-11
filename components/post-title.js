export default function PostTitle({ children }) {
  return (
  <div className="w-full flex justify-center items-center border-b">
    <div className="lg:w-2/3 md:w-11/12 ">
    <h1 className="text-6xl  font-serif  bg-gray-50 shadow rounded-lg antialiased py-2 mx-2 tracking-tighter leading-tight text-center">
      {children}
    </h1>
  </div>
  </div>
  )
}

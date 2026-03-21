export default function Button({ children }: any) {

  return (

    <button className="border px-6 py-3 rounded-md hover:bg-black hover:text-white transition">
      {children}
    </button>

  )

}
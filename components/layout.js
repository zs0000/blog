
import Footer from '../components/footer'
import Meta from '../components/meta'
import Header from "./header";
export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="fixed z-20">
      <Header />
      </div>
      <div className="min-h-screen pt-16 bg-gray-100">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

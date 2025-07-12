import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductSection from './components/ProductSection'
import AppleTVSection from './components/AppleTVSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <ProductSection 
          title="iPhone 16"
          subtitle="Meet the iPhone 16 family."
          description="Built for Apple Intelligence."
          ctaMain="Learn more"
          ctaSecondary="Shop iPhone"
          background="bg-black text-white"
          image="https://images.unsplash.com/photo-1601972599720-dd2d82fceb9e?w=800&h=600&fit=crop&crop=center"
        />
        <ProductSection 
          title="iPad Pro"
          subtitle="Unbelievably thin. Incredibly powerful."
          description="Built for Apple Intelligence."
          ctaMain="Learn more"
          ctaSecondary="Buy"
          background="bg-white text-black"
          image="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&h=600&fit=crop&crop=center"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <ProductSection 
            title="MacBook Air"
            subtitle="Sky blue color. Sky high performance with M4."
            description="Built for Apple Intelligence."
            ctaMain="Learn more"
            ctaSecondary="Buy"
            background="bg-blue-50 text-black"
            image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=500&fit=crop&crop=center"
            compact
          />
          <ProductSection 
            title="iPad Air"
            subtitle="Now supercharged by the M3 chip."
            description="Built for Apple Intelligence."
            ctaMain="Learn more"
            ctaSecondary="Buy"
            background="bg-gray-100 text-black"
            image="https://images.unsplash.com/photo-1611532736969-78afee1cc7c4?w=600&h=500&fit=crop&crop=center"
            compact
          />
          <ProductSection 
            title="Apple Watch Series 10"
            subtitle="Thinstant classic."
            description=""
            ctaMain="Learn more"
            ctaSecondary="Buy"
            background="bg-gray-900 text-white"
            image="https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=600&h=500&fit=crop&crop=center"
            compact
          />
          <ProductSection 
            title="AirPods Pro 2"
            subtitle="Now with a Hearing Aid feature."
            description=""
            ctaMain="Learn more"
            ctaSecondary="Buy"
            background="bg-white text-black"
            image="https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=600&h=500&fit=crop&crop=center"
            compact
          />
        </div>
        <AppleTVSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
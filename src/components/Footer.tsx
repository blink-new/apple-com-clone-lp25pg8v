export default function Footer() {
  const footerSections = [
    {
      title: "Shop and Learn",
      links: ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "iPod touch", "Accessories", "Gift Cards"]
    },
    {
      title: "Services",
      links: ["Apple Music", "Apple TV+", "Apple Fitness+", "Apple News+", "Apple Arcade", "iCloud", "Apple One", "Apple Card", "Apple Books", "Apple Podcasts"]
    },
    {
      title: "Account",
      links: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"]
    },
    {
      title: "Apple Store",
      links: ["Find a Store", "Genius Bar", "Today at Apple", "Apple Camp", "Apple Store App", "Refurbished and Clearance", "Financing", "Apple Trade In", "Order Status", "Shopping Help"]
    }
  ]

  return (
    <footer className="bg-gray-50 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-black font-semibold mb-4 text-sm">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-xs hover:text-gray-800 transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
            <div className="text-xs text-gray-500">
              <p>More ways to shop: <a href="#" className="text-blue-600 hover:underline">Find an Apple Store</a> or <a href="#" className="text-blue-600 hover:underline">other retailer</a> near you. Or call 1-800-MY-APPLE.</p>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-4 space-y-4 lg:space-y-0">
            <div className="text-xs text-gray-500">
              Copyright © 2024 Apple Inc. All rights reserved.
            </div>
            <div className="flex space-x-6 text-xs text-gray-500">
              <a href="#" className="hover:text-gray-700 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-700 transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-gray-700 transition-colors">Sales and Refunds</a>
              <a href="#" className="hover:text-gray-700 transition-colors">Legal</a>
              <a href="#" className="hover:text-gray-700 transition-colors">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
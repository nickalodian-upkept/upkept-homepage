export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h4 className="text-lg font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#">How it works</a></li>
            <li><a href="#">Plans</a></li>
            <li><a href="#">Get started</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#">About</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Stay in the loop</h4>
          <p className="text-sm text-gray-400 mb-4">Join our newsletter to get the latest updates.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="you@example.com"
              className="rounded-l-md px-3 py-2 w-full text-sm text-gray-900"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 text-sm">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="mt-12 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Upkept. All rights reserved.
      </div>
    </footer>
  );
}
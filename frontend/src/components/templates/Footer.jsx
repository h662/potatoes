import Potatoes from "../atoms/Potatoes";

export default function Footer() {
  return (
    <footer className="bg-white w-full shadow dark:bg-black">
      <div className="p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <div className="max-w-screen-xl mx-auto px-4 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  truncate opacity-50 pointer-events-none flex">
                <div className="w-10 h-10 flex justify-center items-center ml-1 bg-orange-400">
                  <Potatoes />
                </div>
              </div>
            </div>
            <span className="ml-4 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Potatoes
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Potatoes™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

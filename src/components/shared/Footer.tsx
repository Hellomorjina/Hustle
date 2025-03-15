import Link from "next/link";
import Image from "next/image";
import logo from "../../assests/logo.png";

function Footer() {
  return (
    <footer className="mx-auto bg-[#F7F7F7] text-black dark:bg-gray-800 dark:text-white pt-20 mt-5  pb-5">
      <div className="section_contniner grid grid-col-1 sm:grid-cols-2 md:grid-cols-5 gap-8 ">
        {/* logo and Ditals  */}
        <div className="md:col-span-1">
          <Image src={logo} width={170} height={150} alt="logo" />
        </div>
        {/* About div */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-primary">About</h2>
          <ul className="space-y-2 ">
            <li>
              <Link href={"/"} className="hover:text-primary">
                Features
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:text-primary">
                Pricing
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:text-primary">
                Support
              </Link>
            </li>
          </ul>
        </div>
        {/* Blog div */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-primary">Blog</h2>
          <ul className="space-y-1 ">
            <li>
              <Link href={"/"} className="hover:text-primary">
                Products
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:text-primary">
                Technology
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:text-primary">
                Crypto
              </Link>
            </li>
          </ul>
        </div>
        {/* Webflow div */}
        <div className="space-y-1 ">
          <h2 className="text-xl font-semibold mb-4 text-primary">Webflow</h2>
          <ul>
            <li>
              <Link
                href={"/"}
                className="hover:text-primary flex items-center gap-2 space-x-2"
              >
                Styleguide
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="hover:text-primary flex items-center gap-2 space-x-2"
              >
                Licensing
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="hover:text-primary flex gap-2 space-x-2 items-center"
              >
                Changelog
              </Link>
            </li>
          </ul>
        </div>
        {/* Social Media div */}
        <div className="space-y-1 ">
          <h2 className="text-xl font-semibold mb-4 text-primary">
            Social Media
          </h2>
          <ul>
            <li>
              <Link
                href={"/"}
                className="hover:text-primary flex items-center gap-2 space-x-2"
              >
                Twitter
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="hover:text-primary flex items-center gap-2 space-x-2"
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="hover:text-primary flex gap-2 space-x-2 items-center"
              >
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* copyright */}
      <div className="mt-12 section_contniner flex flex-col sm:flex-row sm:items-center sm:justify-between sm:text-center gap-4 text-left text-black dark:bg-gray-800 dark:text-white border-t border-gray-400 pt-4">
        <p>© Made by Pawel Gola - Powered by Webflow</p>
        <div className="flex gap-8">
          <p>
            <Link href={"/"} className="hover:text-primary">
              Impressum
            </Link>
          </p>
          <p>
            <Link href={"/"} className="hover:text-primary">
              Datenschutz{" "}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import { FaInstagram, FaYoutube, FaPhone } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-primary_300 text-white py-5 text-center">
      <p className="mb-8 text-lg">Nos acompanhe!</p>
      <hr className="w-4/5 mx-auto border-t border-white mb-6" />
      <div className="flex justify-center gap-12 mt-6">
        <div className="flex items-center">
          <FaPhone className="mr-2 text-2xl" />
          <a
            href="tel:+5581993503948"
            className="text-white text-base hover:underline"
          >
            (81) 99350-3948
          </a>
        </div>
        <div className="flex items-center">
          <FaInstagram className="mr-2 text-2xl" />
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-base hover:underline"
          >
            Instagram
          </a>
        </div>
        <div className="flex items-center">
          <FaYoutube className="mr-2 text-2xl" />
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-base hover:underline"
          >
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
}

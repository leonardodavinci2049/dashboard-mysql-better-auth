import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function FooterAuth() {
  return (
    <footer className="border-t border-gray-800 bg-gray-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo e descrição */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="mb-3 flex items-center">
              <Image
                src="/images/logo/logo-footer.png"
                alt={process.env.NEXT_PUBLIC_COMPANY_NAME || "Logo"}
                width={120}
                height={38}
                className="h-8 w-auto brightness-0 invert filter"
              />
            </Link>
            <p className="mb-3 text-sm text-gray-400">
              Distribuidora Atacadista de Eletrônicos
            </p>
            <div className="flex space-x-3">
              <Link
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Twitter className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/catalog"
                  className="text-xs text-gray-400 transition-colors hover:text-white"
                >
                  Catalogo de Produtos
                </Link>
              </li>
              <li>
                <Link
                  href="/sign-in"
                  className="text-xs text-gray-400 transition-colors hover:text-white"
                >
                  Área do Revendedor
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-xs text-gray-400 transition-colors hover:text-white"
                >
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">Contato</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-3 w-3 text-blue-400" />
                <span className="text-xs text-gray-400">
                  {process.env.NEXT_PUBLIC_COMPANY_PHONE}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-3 w-3 text-blue-400" />
                <span className="text-xs text-gray-400">
                  {process.env.NEXT_PUBLIC_COMPANY_EMAIL}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-3 w-3 text-blue-400" />
                <span className="text-xs text-gray-400">
                  Ribeirão Preto - SP
                </span>
              </div>
            </div>
          </div>

          {/* Informações legais */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">Legal</h3>
            <ul className="space-y-2 ">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Política de Privacidade <br />
                </Link>
                <Link
                  href="/antispam"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Política Anti-Spam<br />
                </Link>
                <Link
                  href="/terms"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Termos de Uso
                </Link>
              </li>
              <li>
                <span className="text-xs text-gray-400">
                  © {new Date().getFullYear()}{" "}
                  {process.env.NEXT_PUBLIC_COMPANY_NAME}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

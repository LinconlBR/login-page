import  Link  from "next/link" ;

export default function Footer() {
	return (
		<footer className="border-t border-gray-200 bg-white">
			<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-gray-600 sm:flex-row lg:px-8">
				<p>© {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.</p>

				<nav aria-label="Links do rodapé" className="flex gap-6">
					<Link href="/" className="transition-colors hover:text-gray-900">
						Sobre
					</Link>
					<Link href="#/" className="transition-colors hover:text-gray-900">
						Contato
					</Link>
					<Link href="/" className="transition-colors hover:text-gray-900">
						Privacidade
					</Link>
				</nav>
			</div>
		</footer>
	);
}

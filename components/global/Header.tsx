import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 z-20 flex w-full items-center justify-between px-6 py-4 mix-blend-difference md:px-12 lg:px-16">
            <Link href="https://www.pldkhoa.dev" aria-label="Home">
                <Image
                    src="/icons/logo.svg"
                    alt="Khoa Phan"
                    width={48}
                    height={48}
                />
            </Link>

            <nav className="flex items-center gap-5">
                <Link
                    href="https://github.com/PhanDangKhoa96"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="opacity-40 transition-opacity duration-200 hover:opacity-100">
                    <Image
                        src="/icons/github.svg"
                        alt="GitHub"
                        width={24}
                        height={24}
                    />
                </Link>
                <Link
                    href="https://x.com/khoaphan_dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X"
                    className="opacity-40 transition-opacity duration-200 hover:opacity-100">
                    <Image src="/icons/x.svg" alt="X" width={24} height={24} />
                </Link>
            </nav>
        </header>
    );
};

export {Header};

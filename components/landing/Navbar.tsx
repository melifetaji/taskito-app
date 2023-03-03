import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/utils/Button";
import { HiX } from "react-icons/hi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

type Props = {
	animate?: boolean;
};

const Navbar = ({ animate }: Props) => {
	const router = useRouter();
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [scroll, setScroll] = useState<string>("transparent");
	const menuRef = useRef<HTMLDivElement>(null);
	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		window.onscroll = () => {
			if (window.scrollY > 20) {
				setScroll("bg-[#fcfcfc] shadow-md");
			} else {
				setScroll("bg-transparent");
			}
		};
	}, []);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [menuRef]);

	if (
		router.route === "/" ||
		router.route === "/about" ||
		router.route === "/contact"
	)
		return (
			<motion.nav
				className="fixed w-[100%] top-0 z-10"
				initial={animate && { opacity: 0, y: -60 }}
				animate={animate && { opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
			>
				<div className={`px-[10em] border-gray-200 hidden md:block ${scroll}`}>
					<div className="container mx-auto flex items-center justify-between px-4 py-3">
						<Link href="/">
							<Image
								src="/Logo.svg"
								alt=""
								width={150}
								height={100}
								className="cursor-pointer"
							/>
						</Link>

						<ul>
							<li className="inline-block px-4 py-2 text-gray-500 hover:text-gray-900">
								<Link href="/">Home</Link>
							</li>
							<li className="inline-block px-4 py-2 text-gray-500 hover:text-gray-900">
								<Link href="/about">About</Link>
							</li>
							<li className="inline-block px-4 py-2 text-gray-500 hover:text-gray-900">
								<Link href="/contact">Contact</Link>
							</li>
						</ul>
						<div>
							<Button type="primary" size="medium" hover={true}>
								<Link href="/" className="px-2 py-1">
									Get Started &gt;
								</Link>
							</Button>
							<Link
								href="/login"
								className="text-gray-500 hover:text-gray-900 ml-4 font-semibold"
							>
								Log In
							</Link>
						</div>
					</div>
				</div>

				<div className={`block md:hidden ${scroll}`}>
					<div className="container mx-auto flex items-center justify-between px-4 py-3">
						<Link href="/">
							<Image
								src="/Logo.svg"
								alt=""
								width={130}
								height={100}
								className="cursor-pointer"
							/>
						</Link>

						<button onClick={handleClick}>
							<motion.div
								initial={{ rotate: 0 }}
								animate={{ rotate: isOpen ? 180 : 0 }}
								transition={{ duration: 0.3 }}
							>
								{isOpen ? (
									<HiX className="text-3xl text-neutral-700 cursor-pointer" />
								) : (
									<HiOutlineMenuAlt3 className="text-3xl text-neutral-700 cursor-pointer" />
								)}
							</motion.div>
						</button>
						<AnimatePresence mode="wait">
							{isOpen && (
								<motion.div
									initial={{ opacity: 0, x: 200 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: -200 }}
									transition={{ duration: 0.2 }}
									className="w-full absolute left-0 top-[55px] text-lg border-2 rounded-b-3xl shadow-lg bg-white "
									ref={menuRef}
								>
									<ul className="uppercase ">
										<li>
											<Link
												href="/"
												onClick={() => setIsOpen(false)}
												className="p-4 text-gray-700 hover:text-gray-900 w-full block text-center border-y"
											>
												Home
											</Link>
										</li>
										<li>
											<Link
												href="/about"
												onClick={() => setIsOpen(false)}
												className="p-4 text-gray-700 hover:text-gray-900 w-full block text-center border-b"
											>
												About
											</Link>
										</li>
										<li>
											<Link
												href="/contact"
												onClick={() => setIsOpen(false)}
												className="p-4 text-gray-700 hover:text-gray-900 w-full block text-center border-b mb-4"
											>
												Contact
											</Link>
										</li>
										<li>
											<Link
												href="/login"
												onClick={() => setIsOpen(false)}
												className="pb-4 text-gray-700 hover:text-gray-900 w-full block text-center border-b mb-4"
											>
												Log In
											</Link>
										</li>
										<li className="flex justify-center mb-4">
											<Button
												type="primary"
												hover={true}
												size="medium"
												className="block w-full"
											>
												<Link
													href="/dashboard"
													className="w-full block px-2 py-1 font-normal"
												>
													Get Started &gt;
												</Link>
											</Button>
										</li>
									</ul>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
			</motion.nav>
		);
	return null;
};

export default Navbar;

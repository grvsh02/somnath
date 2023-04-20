import pagenotfound from '../public/404.png'
import Image from "next/image";
import Link from "next/link";

export default function Example() {
    return (
        <div className="w-full h-full">
            <main className="min-h-full px-6 lg:px-8">
                <div className="flex">
                    <div className="text-left w-1/2 pl-14 flex flex-col justify-center">
                        <p className="text-xl font-semibold text-indigo-600">404</p>
                        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
                        <p className="mt-6 text-xl leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
                        <div className="mt-10 gap-x-6">
                            <Link
                                href="/"
                                className="rounded-md bg-indigo-600 mr-6 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Go back home
                            </Link>
                            <Link href="#" className="text-sm font-semibold text-gray-900">
                                Contact support <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                    </div>
                    <div className="w-1/2 ">
                        <Image src={pagenotfound} alt={"page not found"} />
                    </div>
                </div>
            </main>
        </div>
    )
}
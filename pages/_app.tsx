import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import CustomNavbar from "@/lib/common/components/navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <div className="h-screen w-screen">
          <div className="bg-[#F0F4FB] flex flex-col w-screen h-screen overflow-y-auto">
            <CustomNavbar/>
              <div className={'grow w-full overflow-x-hidden transition-all flex duration-300'}><Component {...pageProps} /></div>
          </div>
      </div>
  )
}

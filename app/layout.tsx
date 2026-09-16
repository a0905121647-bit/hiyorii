import type { Metadata } from 'next';
import './globals.css';
import { SiteShell } from '@/components/hiyori-shell';
export const metadata:Metadata={title:{default:'日和｜五行と、健やかな暮らし',template:'%s｜日和'},description:'日和 ひより。金・木・水・火・土の五行をテーマにしたペットのサプリメントとおやつ。健やかな日々を、ともに。',icons:{icon:'/favicon.svg',shortcut:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ja"><body><SiteShell>{children}</SiteShell></body></html>}

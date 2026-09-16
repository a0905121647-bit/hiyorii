import { ArticlePage } from '@/components/hiyori-pages';
import { articles } from '@/lib/hiyori-data';
import { notFound } from 'next/navigation';
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const item=articles.find(p=>p.id===slug);return {title:item?.title||'見つかりません'}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(!articles.some(p=>p.id===slug))notFound();return <ArticlePage id={slug}/>}
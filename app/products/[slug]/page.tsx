import { ProductPage } from '@/components/hiyori-pages';
import { products } from '@/lib/hiyori-data';
import { notFound } from 'next/navigation';
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const item=products.find(p=>p.id===slug);return {title:item?.name||'見つかりません'}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(!products.some(p=>p.id===slug))notFound();return <ProductPage id={slug}/>}
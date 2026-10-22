import Header from "@/app/components/Header";
import ProductCard from "@/app/components/ProductCard";
import CustomerForm from "@/app/components/CustomerForm";

const products = [
  { name: "동아고 후드티", price: 35000, color: "bg-blue-800" },
  { name: "텀블러", price: 15000, color: "bg-emerald-500" },
  { name: "에코백", price: 12000, color: "bg-amber-300" },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50">
      <Header />
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-12 px-6 py-10">
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.name} name={p.name} price={p.price} color={p.color} />
          ))}
        </section>
        <CustomerForm products={products.map((p) => p.name)} />
      </main>
    </div>
  );
}

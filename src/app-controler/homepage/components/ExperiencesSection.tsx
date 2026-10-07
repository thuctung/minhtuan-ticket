import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import HoverImage from "@/components/ui/hover-image";
import { ChevronRight } from "lucide-react";
import { PHONE_ADMIN } from "@/commons/constant";
import TicketCard from "./CardTicket";
const listExperiences = [
  {
    id: 12,
    image: "/images/experience1.jpg",
    title: "Bà Nà Hills",
    address: "Đà Nẵng",
    price: 90000,
    href: "/ticket?id=1",
  },
  {
    id: 3,
    image: "/images/experience1.jpg",
    title: "Bà Nà Hills",
    address: "Đà Nẵng",
    price: 90000,
    href: "/ticket?id=1",
  },
  {
    id: 4,
    image: "/images/experience1.jpg",
    title: "Bà Nà Hills",
    address: "Đà Nẵng",
    price: 90000,
    href: "/ticket?id=1",
  },
  {
    id: 5,
    image: "/images/experience1.jpg",
    title: "Bà Nà Hills",
    address: "Đà Nẵng",
    price: 90000,
    href: "/ticket?id=1",
  },
  {
    id: 6,
    image: "/images/experience1.jpg",
    title: "Bà Nà Hills",
    address: "Đà Nẵng",
    price: 90000,
    href: "/ticket?id=1",
  },
  {
    id: 7,
    image: "/images/experience1.jpg",
    title: "Bà Nà Hills",
    address: "Đà Nẵng",
    price: 90000,
    href: "/ticket?id=1",
  },
];
export function ExperiencesSection() {
  const displayPrice = (price: number) => {
    if (!price) return "xxx.xxxđ";

    const abs = Math.abs(price);
    const firstDigit = String(abs)[0] ?? "x";

    if (abs >= 1_000_000) return `${firstDigit}xx.xxx.xxxđ`;
    if (abs >= 100_000) return `${firstDigit}xx.xxxđ`;
    return `${firstDigit}đ`;
  };
  return (
    <section id="experiences">
      <div className="py-24 ">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
              Địa đểm nổi bật
            </h2>
            <div className="mt-2 mx-auto w-12 h-1 rounded-full bg-gradient-to-r from-sky-400 to-violet-500" />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {listExperiences.map((item) => (
              <TicketCard
                key={item.id}
                image={item.image}
                title={item.title}
                address={item.address}
                price={item.price}
                href={item.href}
                className=""
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

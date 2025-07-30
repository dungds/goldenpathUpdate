import Image from "next/image";
import { services } from '@/lib/data';
import Link from "next/link";

export default function Services() {
  return (
   <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Our Services</h1>
    <ul className="space-y-2">
      {services.map(service =>(
        <li key={service.id} className="p-4 border">
          <Link href={`/services/${service.id}`}>
          <h2 className="text-lg font-semibold">{service.title}</h2>
          </Link>
          <p className="text-gray-600">{service.description}</p>
        </li>
      ))}

    </ul>
    </div>
  );
}